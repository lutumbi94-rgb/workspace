import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export function Features() {
  return (
    <>
      <Helmet>
        <title>Features | Scryme Chat</title>
        <meta name="description" content="Intelligent communication and workflows with smart threading, universal search, and bot-driven automations." />
      </Helmet>
      <div className="bg-background text-on-background font-body-md antialiased min-h-screen">

{/* Hero Section */}
<section className="text-center max-w-4xl mx-auto flex flex-col items-center gap-stack-lg">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-surface-container-high shadow-sm mb-4">
<span className="material-symbols-outlined text-primary text-[18px]">auto_awesome</span>
<span className="font-label-md text-label-md text-primary uppercase tracking-wider">Intelligent Communication</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface max-w-3xl">
                Workflows that think <br className="hidden md:block"/>
<span className="text-gradient">as fast as you do.</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Move beyond linear chat. Scryme's intelligent architecture auto-organizes conversations, surfaces vital context instantly, and automates repetitive tasks directly within your stream.
            </p>
</section>
{/* Bento Grid: Core Intelligence Features */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Smart Threading (Spans 8 cols) */}
<div className="col-span-1 md:col-span-8 glass-panel rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 enterprise-shadow">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
<div className="flex items-start justify-between relative z-10">
<div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center border border-outline-variant/30 text-primary shadow-sm">
<span className="material-symbols-outlined text-[28px]">account_tree</span>
</div>
</div>
<div className="relative z-10 mt-auto pt-12">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-3">Smart Threading</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                        Conversations automatically branch based on context and participants. No more losing critical decisions in the main channel stream.
                    </p>
</div>
</div>
{/* Universal Search (Spans 4 cols) */}
<div className="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-8 enterprise-shadow flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[28px]">search</span>
</div>
<div className="mt-auto pt-8">
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-3">Universal Search</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                        Find files, code snippets, and messages across all channels instantly with fuzzy matching and natural language queries.
                    </p>
</div>
</div>
{/* Mobile Experience (Spans full width, split layout) */}
<div className="col-span-1 md:col-span-12 bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-0 flex flex-col md:flex-row overflow-hidden group enterprise-shadow">
<div className="p-8 md:p-12 flex flex-col justify-center gap-6 md:w-[45%] relative z-10 bg-white dark:bg-inverse-surface">
<div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center border border-outline-variant/30 text-primary shadow-sm">
<span className="material-symbols-outlined text-[28px]">smartphone</span>
</div>
<div>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-3">Seamless Mobile Experience</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">
                            Stay connected wherever you go. Our high-fidelity mobile app ensures you never miss a beat, with full feature parity and an interface designed for professionals on the move.
                        </p>
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-wider hover:text-primary/80 transition-colors" href="#">
                            Download App <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
<div className="md:w-[55%] relative h-64 md:h-auto overflow-hidden bg-surface-variant/30">
<img alt="Mobile app experience" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFy1zB6XRx_sEaMP62_62Njvj5px00AUtOcmLzFEiumay-VX__3T5CCeMANszpbxab75_9qGQFNCNzZGoL3jCqzHSgbjSr7u-7Sr38uC356rq11HmYSY5_pIZYEXTkMB4aK9qYgL5w0zaQhysq6vlcelNUFkjPMAgmM4EIrmrAgNHrGlHZBgFqZxJVr_ljB6Y-TC7HdaCwXgmvECGmylqJ9gmAS-kGqLA8HKTtsE2ipr8MqsZKIa2HsC_K-sQbELwDB8rK0vXooz2h"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent dark:from-inverse-surface dark:via-inverse-surface/20 w-1/3 md:w-1/2"></div>
</div>
</div>
{/* Bot-Driven Workflows (Spans full width, split layout) */}
<div className="col-span-1 md:col-span-12 glass-panel rounded-3xl p-0 flex flex-col md:flex-row overflow-hidden group enterprise-shadow">
<div className="p-8 md:p-12 flex flex-col justify-center gap-6 md:w-1/2 relative z-10">
<div className="w-14 h-14 rounded-2xl bg-surface-container-lowest flex items-center justify-center border border-outline-variant/30 text-primary shadow-sm">
<span className="material-symbols-outlined text-[28px]">smart_toy</span>
</div>
<div>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-3">Bot-Driven Workflows</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">
                            Deploy custom bots to handle stand-ups, code reviews, and incident management without leaving the chat interface. Output is rendered in pristine, monospaced tech formats.
                        </p>
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-primary uppercase tracking-wider hover:text-primary/80 transition-colors" href="#">
                            Explore Integrations <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
<div className="bg-surface-container-low/50 md:w-1/2 relative p-8 md:p-12 flex items-center justify-center border-t md:border-t-0 md:border-l border-outline-variant/20 backdrop-blur-sm">
{/* Conceptual UI Element */}
<div className="w-full max-w-sm bg-surface-container-lowest rounded-2xl shadow-xl border border-[#8B5CF6]/30 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
<div className="px-5 py-4 border-b border-outline-variant/20 bg-surface-bright flex items-center gap-3">
<span className="material-symbols-outlined text-[#8B5CF6] text-[22px]">smart_toy</span>
<span className="font-label-md text-label-md text-on-surface">DeployBot</span>
</div>
<div className="p-5 bg-[#0b1c30] text-[#e0e3e5] font-code-sm text-code-sm leading-relaxed">
<div className="flex gap-3 mb-3"><span className="text-[#c3c0ff] opacity-70">&gt;</span> <span>Deploying staging branch...</span></div>
<div className="flex gap-3 mb-3"><span className="text-[#c3c0ff] opacity-70">&gt;</span> <span>Running tests (45/45 passed)</span></div>
<div className="flex gap-3 text-primary-fixed font-medium"><span className="text-[#c3c0ff] opacity-70">&gt;</span> <span>Deployment successful. URL generated.</span></div>
</div>
</div>
</div>
</div>
</section>

{/* Sticky Bottom Section / Try it now */}
<div className="sticky bottom-0 z-40 w-full px-margin-mobile md:px-margin-desktop pb-8 pointer-events-none">
<div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto enterprise-shadow">
<div>
<h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Ready to upgrade your team's comms?</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Join thousands of high-performance teams using Scryme.</p>
</div>
<div className="flex gap-4 w-full md:w-auto">
<Link to="/pricing" className="flex-1 md:flex-none px-6 py-3 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-high transition-colors border border-outline-variant/30 shadow-sm text-center block">
                    View Pricing
                </Link>
<Link to="/signup" className="flex-1 md:flex-none px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center block">
                    Try it Free
                </Link>
</div>
</div>
</div>

      </div>
    </>
  );
}
