# Custom Messages Guide

Scrymechat's Custom Message system allows developers to build rich, interactive, and dynamic user interfaces directly within the chat. By using a structured JSON schema, you can create complex workflows like approval systems, data entry forms, and real-time dashboards without writing new frontend code.

## Core Principles

- **Schema-Driven UI**: Define your interface once in JSON; it renders consistently across Web, Mobile, and Desktop.
- **State Management**: Input components automatically track user data, which is sent back to your server upon action.
- **Dynamic Content**: Use `{{double_braces}}` for variable interpolation from static data or live form state.
- **Conditional Visibility**: Show or hide any part of the UI based on logical rules.

---

## The Message Schema

A custom message is defined within the `metadata` field of a standard message object.

```json
{
  "version": "v1",
  "type": "WORKFLOW_OR_TYPE",
  "context": {
    "title": "Header Title",
    "description": "Optional subtitle",
    "icon": "Info",
    "priority": "normal"
  },
  "root": {
    "type": "Layout.Card",
    "children": [ ... ]
  },
  "actions": [ ... ],
  "data": { ... }
}
```

### Context Properties
| Property | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | **Required.** The main heading of the message card. |
| `description` | `string` | Optional text displayed below the title. |
| `icon` | `string` | Lucide icon name (e.g., `Check`, `AlertCircle`, `Settings`). |
| `priority` | `enum` | `low`, `normal`, `high`, `urgent`. Affects visual emphasis. |

---

## Component Reference

### Layout Components
Used to structure the arrangement of other components.

#### `Layout.Card`
A container with padding, borders, and a shadow. Usually used as the root node.

#### `Layout.Stack`
A vertical container that stacks its children with consistent spacing.

#### `Layout.Grid`
A multi-column grid.
- `properties.columns`: Number of columns (default: 1).

### Display Components
Used to show information to the user.

#### `Text.Heading` & `Text.Paragraph`
- `properties.content`: The text to display. Supports variable interpolation. Paragraphs support basic Markdown.

#### `Display.Field`
A labeled data point.
- `properties.label`: The field label (e.g., "Amount").
- `properties.value`: The data to display (e.g., "$50.00").

#### `Data.StatsGrid` & `Data.Stat`
Used for creating dashboard-like metric displays. Use `Data.Stat` inside a `Data.StatsGrid`.

### Input Components
Used to collect data from users. All inputs require a unique `id`.

#### `Input.Text`
- `properties.label`: Label above the input.
- `properties.placeholder`: Hint text.
- `properties.multiline`: If `true`, renders a textarea.
- `properties.inputType`: `text`, `number`, `email`, `password`.

#### `Input.Checkbox`
- `properties.label`: Label displayed next to the checkbox.

#### `Input.Select`
Renders a dropdown menu.
- `properties.dataSource`:
  - `type`: `STATIC` (fixed list), `VARIABLE` (from `data` object), or `API` (remote fetch).
  - `items`: Array of `{ label, value }` (for `STATIC`).
  - `key`: Path in `data` (for `VARIABLE`).
  - `url`: Endpoint to call (for `API`).

---

## Advanced Logic

### Variable Interpolation
You can inject data into strings using `{{path.to.key}}`.
- **Static Data**: Resolved from the `data` object in the schema.
- **Form State**: Resolved from the current values of input components (using their `id`).

Example: `Hello {{user.name}}, your status is {{status_input}}`.

### Conditional Logic
Any node (layout, display, or input) can have a `condition` object.

```json
"condition": {
  "field": "id_of_another_input",
  "operator": "EQUALS",
  "value": "specific_value"
}
```

**Available Operators**: `EQUALS`, `NOT_EQUALS`, `CONTAINS`, `GREATER_THAN`, `LESS_THAN`, `EXISTS`, `NOT_EXISTS`.

### Validation
Inputs can enforce rules before an action is submitted.

```json
"validation": {
  "required": true,
  "minLength": 10,
  "errorMessage": "Please provide a detailed reason (min 10 chars)."
}
```

---

## Handling Actions

Actions are rendered as buttons. When clicked, Scrymechat validates the form state and then triggers the handler.

```json
{
  "id": "submit_btn",
  "label": "Send Request",
  "type": "PRIMARY",
  "handler": {
    "type": "CALLBACK",
    "callbackId": "my-backend-service",
    "includeFormState": true,
    "payload": { "internal_id": 123 }
  }
}
```

### Callback Payload
If `includeFormState` is `true`, your backend receives:
```json
{
  "messageId": "...",
  "internal_id": 123,
  "formState": {
    "input_id_1": "user value",
    "input_id_2": true
  }
}
```

---

## Complete Example: Support Ticket Form

```json
{
  "version": "v1",
  "type": "SUPPORT_FORM",
  "context": {
    "title": "Create Support Ticket",
    "icon": "HelpCircle"
  },
  "root": {
    "type": "Layout.Card",
    "children": [
      {
        "id": "subject",
        "type": "Input.Text",
        "validation": { "required": true },
        "properties": { "label": "Subject", "placeholder": "What do you need help with?" }
      },
      {
        "id": "priority",
        "type": "Input.Select",
        "properties": {
          "label": "Urgency",
          "dataSource": {
            "type": "STATIC",
            "items": [
              { "label": "Low", "value": "low" },
              { "label": "High", "value": "high" }
            ]
          }
        }
      },
      {
        "id": "reason",
        "type": "Input.Text",
        "condition": { "field": "priority", "operator": "EQUALS", "value": "high" },
        "properties": { "label": "Reason for High Urgency", "multiline": true }
      }
    ]
  },
  "actions": [
    {
      "id": "submit",
      "label": "Create Ticket",
      "type": "PRIMARY",
      "handler": { "type": "CALLBACK", "callbackId": "support-bot" }
    }
  ]
}
```
