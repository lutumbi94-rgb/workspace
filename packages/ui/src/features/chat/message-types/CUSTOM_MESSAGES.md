# Custom Message Technical Reference

The custom message system enables dynamic UI rendering based on a recursive node structure defined in JSON.

## Architecture

Custom messages use a **Node-based Tree** instead of flat sections. The root of the UI is defined in `metadata.root`.

### Schema Structure
- **Version**: `v1`
- **Type**: Logical identifier (e.g., `APPROVAL`, `FORM`)
- **Context**: Header metadata (Title, Icon, Priority)
- **Root**: The top-level `MessageNode`
- **Actions**: Array of interactive buttons
- **Data**: Static data for interpolation

### MessageNode Definition
Each node in the tree follows this structure:
```typescript
{
  type: string;        // Component identifier (e.g. 'Layout.Card')
  id?: string;         // Required for Input components
  properties?: object; // Component-specific props
  children?: Node[];   // Nested children
  condition?: object;  // Visibility logic
  validation?: object; // Input validation rules
}
```

## Available Components

### Layouts
- `Layout.Card`: Standard container with padding.
- `Layout.Stack`: Vertical flex container.
- `Layout.Grid`: Multi-column grid (use `properties.columns`).

### Display
- `Text.Heading`: Bold title text.
- `Text.Paragraph`: Body text (Markdown supported).
- `Display.Field`: Labeled value pair.
- `Data.StatsGrid`: Container for multiple stats.
- `Data.Stat`: Metric display (label + value).

### Inputs
- `Input.Text`: Single/Multi-line text box.
- `Input.Select`: Dropdown (supports Static, Variable, and API sources).
- `Input.Checkbox`: Boolean toggle.

## Logic & Interaction

### Variable Interpolation
Strings in `properties` can use `{{path}}` to reference:
1. Keys in the `data` object.
2. Current values of any input node by its `id`.

### Conditional Rendering
Supported operators: `EQUALS`, `NOT_EQUALS`, `CONTAINS`, `GREATER_THAN`, `LESS_THAN`, `EXISTS`, `NOT_EXISTS`.

### Actions & Callbacks
Actions trigger a `CALLBACK` to the `callbackId`.
- **Payload**: Merges `handler.payload` with `formState` (if `includeFormState` is true).
- **Validation**: All visible inputs are validated before the action is dispatched.

## Developer Helpers

The `@repo/shared` package provides helpers to generate standard structures:
- `createApprovalMessage(data)`
- `createReportMessage(data)`
- `createFormMessage(data)`
