import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export function Developers() {
  return (
    <>
      <Helmet>
        <title>Developers & API | Scryme Chat</title>
        <meta name="description" content="Powerful API & Webhooks built for engineers. Build custom bots, subscribe to events, and connect your stack." />
      </Helmet>
      <div className="bg-background text-on-background font-body-md antialiased min-h-screen">

{/* Hero Section */}
<section className="pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center relative overflow-hidden">
<div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #3e32d3 0%, transparent 50%)'}}></div>
<h1 className="font-headline-xl text-headline-xl text-on-background mb-stack-lg max-w-4xl mx-auto tracking-tight">
                Powerful API &amp; Webhooks.<br/>
<span className="text-gradient">Built for Engineers.</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
                Build custom bots in minutes. Seamlessly connect your stack. Scryme Chat's developer platform gives you the low-level control and high-level abstractions you need to automate your team's workflow.
            </p>
<div className="flex justify-center gap-stack-md">
<a href="#" className="bg-on-background text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:bg-primary transition-colors shadow-lg text-center block sm:inline-block">Read the Docs</a>
<Link to="/developer" className="bg-surface-container text-on-surface px-8 py-3 rounded-full font-label-md text-label-md hover:bg-surface-variant transition-colors border border-outline-variant/50 text-center block sm:inline-block">Generate API Key</Link>
</div>
</section>
{/* Code Editor & Features Bento */}
<section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Main Code Block */}
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden border border-outline-variant/20 flex flex-col">
<div className="bg-surface-container-low px-stack-md py-stack-sm border-b border-outline-variant/20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-error"></div>
<div className="w-3 h-3 rounded-full bg-primary-container"></div>
<div className="w-3 h-3 rounded-full bg-surface-tint"></div>
</div>
<span className="font-code-sm text-code-sm text-on-surface-variant">webhook_handler.js</span>
</div>
<div className="p-stack-lg code-block flex-grow overflow-x-auto">
<pre  className="font-code-sm text-code-sm leading-relaxed"><span className="text-primary-fixed">const</span> {"{"} ScrymeClient {"}"} = <span className="text-surface-tint">require</span>(<span className="text-error-container">'@scryme/chat-sdk'</span>);

<span className="text-primary-fixed">const</span> client = <span className="text-primary-fixed">new</span> ScrymeClient({"{"}
  token: process.env.<span className="text-surface-tint">SCRYME_API_TOKEN</span>,
  webhookSecret: process.env.<span className="text-surface-tint">SCRYME_WEBHOOK_SECRET</span>
{"}"});

<span className="text-surface-variant">// Listen for new messages mentioning the bot</span>
client.on(<span className="text-error-container">'message.created'</span>, <span className="text-primary-fixed">async</span> (event) =&gt; {"{"}
  <span className="text-primary-fixed">if</span> (event.message.mentions.includes(client.botId)) {"{"}
    <span className="text-primary-fixed">const</span> channelId = event.channel.id;
    <span className="text-primary-fixed">const</span> command = parseCommand(event.message.text);

    <span className="text-primary-fixed">try</span> {"{"}
      <span className="text-surface-variant">// Execute custom logic</span>
      <span className="text-primary-fixed">const</span> result = <span className="text-primary-fixed">await</span> executeWorkflow(command);

      <span className="text-primary-fixed">await</span> client.messages.create({"{"}
        channel: channelId,
        blocks: [
          {"{"} type: <span className="text-error-container">'section'</span>, text: <span className="text-error-container">'Workflow executed successfully. ✅'</span> {"}"},
          {"{"} type: <span className="text-error-container">'code'</span>, text: JSON.stringify(result, <span className="text-primary-fixed">null</span>, 2) {"}"}
        ]
      {"}"});
    {"}"} <span className="text-primary-fixed">catch</span> (error) {"{"}
      console.error(<span className="text-error-container">'Workflow failed'</span>, error);
    {"}"}
  {"}"}
{"}"});

client.start(3000, () =&gt; console.log(<span className="text-error-container">'⚡️ Bot is running on port 3000'</span>));
</pre>
</div>
</div>
{/* Side Cards */}
<div className="lg:col-span-4 flex flex-col gap-gutter">
{/* Webhooks Card */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-stack-lg border border-outline-variant/20 flex-1">
<div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center mb-stack-md">
<span className="material-symbols-outlined text-primary text-[24px]">webhook</span>
</div>
<h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm text-[20px]">Real-time Webhooks</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                            Subscribe to events across your workspace. Get instant HTTP POST payloads for messages, reactions, and channel updates to keep your systems perfectly synced.
                        </p>
</div>
{/* Custom Bots Card */}
<div className="bg-primary text-on-primary rounded-xl shadow-[0_20px_40px_rgba(88,80,236,0.2)] p-stack-lg relative overflow-hidden flex-1">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
<div className="w-12 h-12 rounded-lg bg-on-primary/20 flex items-center justify-center mb-stack-md backdrop-blur-sm">
<span className="material-symbols-outlined text-on-primary text-[24px]">smart_toy</span>
</div>
<h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary mb-stack-sm text-[20px]">Build Custom Bots</h3>
<p className="font-body-sm text-body-sm text-on-primary/90">
                            Create interactive bots that respond to commands, unfurl links, and guide users through complex internal workflows directly within chat.
                        </p>
</div>
</div>
</div>
</section>
{/* Technical Diagram / Flow Section */}
<section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-stack-lg">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-stack-sm">Seamlessly connect your stack</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Architecture designed for reliability and scale. Push and pull data exactly when you need it.</p>
</div>
<div className="bg-surface-bright rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-outline-variant/20 p-stack-lg relative flex flex-col md:flex-row items-center justify-between gap-stack-lg">
{/* Diagram Item 1 */}
<div className="flex flex-col items-center flex-1 z-10">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center border-2 border-outline-variant/30 mb-stack-sm shadow-sm">
<span className="material-symbols-outlined text-on-surface text-[28px]">forum</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Scryme Chat</span>
</div>
{/* Connecting Line */}
<div className="hidden md:flex flex-1 items-center justify-center relative w-full h-px">
<div className="absolute inset-0 border-t-2 border-dashed border-outline-variant/50 w-full h-0 top-1/2 -translate-y-1/2"></div>
<div className="bg-surface-bright px-2 z-10">
<span className="material-symbols-outlined text-primary text-[20px] animate-pulse">arrow_forward</span>
</div>
</div>
{/* Diagram Item 2 */}
<div className="flex flex-col items-center flex-1 z-10">
<div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shadow-[0_10px_20px_rgba(88,80,236,0.2)] mb-stack-sm border-2 border-primary">
<span className="material-symbols-outlined text-[28px]">api</span>
</div>
<span className="font-label-md text-label-md text-primary font-bold">API Gateway</span>
</div>
{/* Connecting Line */}
<div className="hidden md:flex flex-1 items-center justify-center relative w-full h-px">
<div className="absolute inset-0 border-t-2 border-dashed border-outline-variant/50 w-full h-0 top-1/2 -translate-y-1/2"></div>
<div className="bg-surface-bright px-2 z-10">
<span className="material-symbols-outlined text-primary text-[20px] animate-pulse" style={{animationDelay: '500ms'}}>swap_horiz</span>
</div>
</div>
{/* Diagram Item 3 */}
<div className="flex flex-col items-center flex-1 z-10">
<div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center border-2 border-outline-variant/30 mb-stack-sm shadow-sm">
<span className="material-symbols-outlined text-on-surface text-[28px]">dns</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Your Infrastructure</span>
</div>
</div>
</section>

      </div>
    </>
  );
}
