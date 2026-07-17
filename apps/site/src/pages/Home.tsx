import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased min-h-screen">

{/* Hero Section */}
<section className="relative pt-32 pb-48 px-margin-mobile md:px-margin-desktop overflow-hidden min-h-[90vh] flex items-center">
<div className="absolute inset-0 z-0">
<img alt="Enterprise Team Collaboration" className="w-full h-full object-cover object-top mix-blend-multiply opacity-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMWddG2gKW76dupJ4mfv9BYUieRK1FLSadjZoZVdJImsFsAQVbj17uz9G-ifzMIeI0yPkSxZLmO8n9PetnOm21hm-q5nqtuTkTvqVo6--oHBiT7zvvEl-fxnBTFJN58783LT7FL5WFHpEsEnTY1-zhci-madN6YGV0oCs79bECJeRLz4H-TegRp0IPa4XhyfbhONp26N8N6fayW-GAuFkhEysow8pdmLyuIOx1uM1CH88EmRh0zUHu5R2Uoloo0ky7DcYyd9UDlWaV"/>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="max-w-5xl mx-auto text-center relative z-10 glass-panel p-8 md:p-16 rounded-[2rem]">
<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md text-primary font-label-md mb-8 border border-white/80 shadow-sm">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                    v2.0 is now live. Engineered for speed.
                </div>
<h1 className="font-headline-xl text-headline-xl text-on-surface mb-8 tracking-tight">
                    The Command Center for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-surface-tint">High-Performance Teams</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mx-auto mb-12 text-xl leading-relaxed">
                    Scryme Chat unifies your engineering workflow, real-time collaboration, and automated alerts into one slick, high-fidelity interface. Built for teams that demand absolute precision.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<Link to="/signup" className="w-full sm:w-auto bg-primary text-on-primary font-label-md px-10 py-5 rounded-full hover:bg-on-primary-fixed hover:shadow-[0_12px_24px_-8px_rgba(88,80,236,0.5)] transition-all flex items-center justify-center gap-3 text-[15px]">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>download</span>
                        Download for Free
                    </Link>
<Link to="/contact" className="w-full sm:w-auto bg-white text-on-surface font-label-md px-10 py-5 rounded-full border border-outline-variant/50 hover:border-primary hover:text-primary hover:shadow-md transition-all flex items-center justify-center gap-3 text-[15px]">
                        Request Demo
                    </Link>
</div>
</div>
</section>
{/* Product Preview Section */}
<section className="px-margin-mobile md:px-margin-desktop pb-40 -mt-24 relative z-20">
<div className="max-w-6xl mx-auto rounded-[2rem] bg-inverse-surface border border-outline/20 chat-ui-shadow overflow-hidden flex flex-col md:flex-row min-h-[650px]">
{/* Sidebar (Channels) */}
<div className="w-full md:w-72 bg-[#141d28] border-r border-outline/10 flex flex-col hidden md:flex">
<div className="p-6 border-b border-outline/10 flex items-center justify-between">
<div className="font-label-md text-[14px] text-on-tertiary">Acme Corp</div>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-on-tertiary transition-colors">expand_more</span>
</div>
<div className="p-4 flex-1 overflow-y-auto">
<div className="font-label-md text-[11px] text-outline uppercase tracking-wider mb-4 px-2">Channels</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary-container/20 text-inverse-primary cursor-pointer">
<span className="material-symbols-outlined text-[18px]">tag</span>
<span className="font-body-sm text-[14px] font-medium">engineering</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-outline hover:bg-white/5 hover:text-on-tertiary cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[18px]">tag</span>
<span className="font-body-sm text-[14px]">design-system</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-outline hover:bg-white/5 hover:text-on-tertiary cursor-pointer transition-colors flex justify-between group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[18px]">lock</span>
<span className="font-body-sm text-[14px]">leadership</span>
</div>
<div className="w-2 h-2 rounded-full bg-error hidden group-hover:block"></div>
</div>
</div>
</div>
</div>
{/* Main Chat Stream */}
<div className="flex-1 bg-inverse-surface flex flex-col">
{/* Chat Header */}
<div className="p-6 border-b border-outline/10 flex items-center justify-between bg-inverse-surface/95 backdrop-blur-md sticky top-0">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-outline md:hidden">menu</span>
<div>
<div className="font-label-md text-[15px] text-on-tertiary flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-[18px] text-outline">tag</span> engineering
                                </div>
<div className="font-body-sm text-[13px] text-outline">Discussing core infrastructure and API updates.</div>
</div>
</div>
<div className="flex items-center gap-5 text-outline">
<span className="material-symbols-outlined cursor-pointer hover:text-on-tertiary transition-colors">search</span>
<span className="material-symbols-outlined cursor-pointer hover:text-on-tertiary transition-colors">notifications</span>
<div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-label-md text-[13px]">SJ</div>
</div>
</div>
{/* Messages Area */}
<div className="flex-1 p-8 overflow-y-auto flex flex-col gap-8">
{/* System Message */}
<div className="flex justify-center">
<div className="px-4 py-1.5 rounded-full bg-surface-container-low/10 text-outline font-label-md text-[12px] border border-outline/10">
                                Today
                            </div>
</div>
{/* User Message */}
<div className="flex gap-5">
<div className="w-11 h-11 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant font-label-md flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A detailed 50-100 word prompt..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlVWtdGQaMiSpCV81eSDpvJtPX72YivRynJ68_TEFglyiyu9QlyF0vhnBxHUKJ4K_Waku8aZhjEHQThOlD5ykRO6bfbVkJGkLnFXA9qn2PsQXUXKBswqGfvGSbkOvHNrvziKwGYdmDk6OVY7Yo2CUib-V9Sa_HLkPs61NorZYABgOxK-ryYntXuNFiwqWkMOemCuFqi4vz-Uz7zh88WyqCTJ5Sw1_fMbsyYt_OZIomWgooSh9yVlMzcYpM_eMq_t7YxKgV8VQVA8sW"/>
</div>
<div>
<div className="flex items-baseline gap-3 mb-2">
<span className="font-label-md text-[14px] text-on-tertiary">Alex Chen</span>
<span className="font-body-sm text-[12px] text-outline">10:42 AM</span>
</div>
<div className="font-body-md text-[15px] leading-relaxed text-on-tertiary/90 bg-white/5 p-4 rounded-xl rounded-tl-none border border-white/5 inline-block">
                                    I've just pushed the new routing logic to staging. Can someone review the PR before we merge into main?
                                </div>
</div>
</div>
{/* Bot Message */}
<div className="flex gap-5">
<div className="w-11 h-11 rounded-xl bg-surface-tint flex items-center justify-center text-on-primary font-label-md flex-shrink-0 border border-primary-fixed-dim shadow-[0_0_20px_rgba(78,68,226,0.3)]">
<span className="material-symbols-outlined text-[22px]">smart_toy</span>
</div>
<div className="w-full max-w-3xl">
<div className="flex items-baseline gap-3 mb-2">
<span className="font-label-md text-[14px] text-primary-fixed">GitHub Bot</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary-fixed font-label-md uppercase tracking-wider">App</span>
<span className="font-body-sm text-[12px] text-outline">10:43 AM</span>
</div>
<div className="bg-[#0f1520] p-5 rounded-xl border border-outline/20 font-code-sm text-[14px] text-tertiary-fixed shadow-inner">
<div className="flex items-center gap-3 mb-4 text-on-tertiary border-b border-outline/20 pb-3">
<span className="material-symbols-outlined text-surface-tint text-[20px]">merge</span>
<span className="font-label-md">PR #4092: Refactor Core Router</span>
</div>
<div className="space-y-3">
<div className="flex justify-between">
<span className="text-outline">Status:</span>
<span className="text-emerald-400 font-medium">Checks passed (12/12)</span>
</div>
<div className="flex justify-between">
<span className="text-outline">Reviewers needed:</span>
<span className="text-amber-400 font-medium">1 pending</span>
</div>
</div>
<div className="mt-5 flex gap-3">
<button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-label-md text-on-tertiary transition-colors text-[13px]">View PR</button>
<button className="px-4 py-2 bg-surface-tint hover:bg-primary rounded-lg font-label-md text-on-primary transition-colors text-[13px] shadow-md">Approve</button>
</div>
</div>
</div>
</div>
</div>
{/* Input Area */}
<div className="p-6 border-t border-outline/10 bg-inverse-surface/95 backdrop-blur-md">
<div className="bg-[#141d28] rounded-xl border border-outline/20 p-2 flex flex-col focus-within:border-surface-tint focus-within:ring-1 focus-within:ring-surface-tint transition-all shadow-inner">
<textarea className="w-full bg-transparent border-none text-on-tertiary font-body-md text-[15px] placeholder-outline focus:ring-0 resize-none px-3 py-2" placeholder="Message #engineering..." rows={1}></textarea>
<div className="flex justify-between items-center mt-3 px-2 pb-1">
<div className="flex items-center gap-2 text-outline">
<button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">add_circle</span></button>
<button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">format_bold</span></button>
<button className="p-2 hover:bg-white/10 rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px]">code</span></button>
</div>
<button className="w-10 h-10 rounded-lg bg-surface-tint text-on-primary flex items-center justify-center hover:bg-primary transition-colors shadow-md">
<span className="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
</div>
<div className="text-center mt-3 text-[12px] text-outline font-body-sm">
                            Pro tip: Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-on-tertiary">⌘</kbd> + <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-on-tertiary">K</kbd> to search anywhere.
                        </div>
</div>
</div>
</div>
</section>
{/* Organized Channels Section */}
<section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
<div className="flex-1">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Organize everything, your way.</h2>
<p className="font-body-md text-on-surface-variant mb-10 text-lg">
                Create dedicated spaces for every project, team, and topic. Keep conversations focused, easily searchable, and out of the noise.
            </p>
<ul className="space-y-8">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary bg-primary-container/20 p-3 rounded-xl shadow-sm text-2xl">tag</span>
<div>
<h3 className="font-label-md text-[16px] text-on-surface mb-2">Public Channels</h3>
<p className="font-body-sm text-[15px] text-on-surface-variant">Open discussions where anyone can join and contribute.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary bg-primary-container/20 p-3 rounded-xl shadow-sm text-2xl">lock</span>
<div>
<h3 className="font-label-md text-[16px] text-on-surface mb-2">Private Channels</h3>
<p className="font-body-sm text-[15px] text-on-surface-variant">Secure spaces for sensitive topics and leadership teams.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary bg-primary-container/20 p-3 rounded-xl shadow-sm text-2xl">folder</span>
<div>
<h3 className="font-label-md text-[16px] text-on-surface mb-2">Sections</h3>
<p className="font-body-sm text-[15px] text-on-surface-variant">Group related channels together for a cleaner sidebar.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 bg-white p-8 rounded-[2rem] border border-outline-variant/30 shadow-2xl relative w-full">
<div className="w-72 bg-[#1a2533] rounded-2xl border border-outline/10 p-6 shadow-2xl mx-auto transform -rotate-3 transition-transform hover:rotate-0 duration-500">
<div className="font-label-md text-[11px] text-outline uppercase tracking-wider mb-4">Sections</div>
<div className="flex flex-col gap-3">
<div className="text-on-tertiary/70 font-label-md text-[14px] flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">folder_open</span> Projects</div>
<div className="pl-5 flex flex-col gap-1.5">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-on-tertiary"><span className="material-symbols-outlined text-[16px]">tag</span> website-redesign</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-outline"><span className="material-symbols-outlined text-[16px]">tag</span> mobile-v3</div>
</div>
<div className="text-on-tertiary/70 font-label-md text-[14px] flex items-center gap-2 mt-4"><span className="material-symbols-outlined text-[18px]">folder_open</span> Teams</div>
<div className="pl-5 flex flex-col gap-1.5">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-outline"><span className="material-symbols-outlined text-[16px]">tag</span> engineering</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-outline"><span className="material-symbols-outlined text-[16px]">tag</span> design</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Real-time Collaboration Section */}
<section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-bright border-y border-outline-variant/20">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-20">
<div className="flex-1">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Real-time collaboration, built-in.</h2>
<p className="font-body-md text-on-surface-variant mb-10 text-lg">
                Jump from text to voice in one click. Share screens, brainstorm on whiteboards, and preview files without ever leaving the app.
            </p>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-4 shadow-sm">
<span className="material-symbols-outlined text-[24px]">headset_mic</span>
</div>
<h3 className="font-label-md text-[16px] text-on-surface mb-2">Instant Huddles</h3>
<p className="font-body-sm text-on-surface-variant">Start lightweight voice chats in any channel.</p>
</div>
<div>
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-4 shadow-sm">
<span className="material-symbols-outlined text-[24px]">present_to_all</span>
</div>
<h3 className="font-label-md text-[16px] text-on-surface mb-2">Screen Sharing</h3>
<p className="font-body-sm text-on-surface-variant">Share your screen instantly for quick reviews.</p>
</div>
<div>
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-4 shadow-sm">
<span className="material-symbols-outlined text-[24px]">description</span>
</div>
<h3 className="font-label-md text-[16px] text-on-surface mb-2">Rich Previews</h3>
<p className="font-body-sm text-on-surface-variant">Inline viewing for code snippets, PDFs, and images.</p>
</div>
<div>
<div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary mb-4 shadow-sm">
<span className="material-symbols-outlined text-[24px]">draw</span>
</div>
<h3 className="font-label-md text-[16px] text-on-surface mb-2">Whiteboarding</h3>
<p className="font-body-sm text-on-surface-variant">Collaborative canvases for brainstorming.</p>
</div>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="bg-white rounded-[2rem] p-6 shadow-2xl border border-outline-variant/30">
<div className="bg-[#111827] rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden shadow-inner">
<div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAnA9or0ekyzjeNqga_F4k-Z-OT0sdWY_KjTwmKEP5n49V7SCD-foY74icslxGu_IXlk-668X9lqEuILcux1spDolEGnxrIioATLgzjkV8Fq3oYbAwVkx8J8OA_NGVtovaAcQkxlzGAAVcAD-asvTzSMKPRHYjvVLl62N45OitG2HDAwox_Eal3wXtpwu8l5kop5vbJP59h4WrvfonAp88gRPfLDWGh-uKNElU0_6D0pvHlvHuYk602s_eIiWS9BvFb4Lc-fi90Zgd')] bg-cover bg-center opacity-60 mix-blend-screen"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white border-4 border-white/20 shadow-2xl animate-pulse">
<span className="material-symbols-outlined text-[36px]">mic</span>
</div>
<div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary border-4 border-white/20 shadow-xl -ml-6 text-[14px] font-bold">
                                JD
                            </div>
<div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary border-4 border-white/20 shadow-xl -ml-6 text-[14px] font-bold">
                                AS
                            </div>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-black/60 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10">
<span className="text-white font-label-md text-[15px]">Design Sync Huddle</span>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"><span className="material-symbols-outlined text-[20px]">videocam</span></button>
<button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"><span className="material-symbols-outlined text-[20px]">screen_share</span></button>
<button className="w-10 h-10 rounded-full bg-error hover:bg-error/90 flex items-center justify-center text-white transition-colors shadow-lg"><span className="material-symbols-outlined text-[20px]">call_end</span></button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* App Directory & Integrations */}
<section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface">
<div className="max-w-4xl mx-auto text-center mb-20">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8">Connect your entire stack.</h2>
<p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-lg">
            Scryme Chat integrates with the tools your team already uses. Turn chats into actionable items, get deployment alerts, and resolve tickets faster.
        </p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="bg-white border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-surface-bright rounded-xl shadow-inner flex items-center justify-center text-2xl font-bold text-on-surface">GH</div>
<span className="font-label-md text-[15px] text-on-surface">GitHub</span>
</div>
<div className="bg-white border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-[#0052CC] text-white rounded-xl shadow-md flex items-center justify-center text-2xl font-bold">J</div>
<span className="font-label-md text-[15px] text-on-surface">Jira</span>
</div>
<div className="bg-white border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-[#0079BF] text-white rounded-xl shadow-md flex items-center justify-center text-2xl font-bold">T</div>
<span className="font-label-md text-[15px] text-on-surface">Trello</span>
</div>
<div className="bg-white border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-[#F9A01B] text-white rounded-xl shadow-md flex items-center justify-center text-2xl font-bold">GL</div>
<span className="font-label-md text-[15px] text-on-surface">GitLab</span>
</div>
<div className="bg-white border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-[#00C7B7] text-white rounded-xl shadow-md flex items-center justify-center text-2xl font-bold">PD</div>
<span className="font-label-md text-[15px] text-on-surface">PagerDuty</span>
</div>
<div className="bg-white border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-[#1A73E8] text-white rounded-xl shadow-md flex items-center justify-center text-2xl font-bold">GD</div>
<span className="font-label-md text-[15px] text-on-surface">Google Drive</span>
</div>
<div className="bg-white border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-[#FF4F00] text-white rounded-xl shadow-md flex items-center justify-center text-2xl font-bold">Z</div>
<span className="font-label-md text-[15px] text-on-surface">Zapier</span>
</div>
<div className="bg-surface-bright border border-outline-variant/30 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 group">
<div className="w-14 h-14 bg-primary-container/20 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined text-[28px]">add</span>
</div>
<span className="font-label-md text-[15px] text-primary">View All 100+</span>
</div>
</div>
</section>
{/* Enterprise-Grade Security */}
<section className="py-32 px-margin-mobile md:px-margin-desktop bg-[#141d28] text-on-tertiary relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(78,68,226,0.15),transparent_70%)]"></div>
<div className="max-w-6xl mx-auto text-center relative z-10">
<h2 className="font-headline-lg text-headline-lg mb-8">Enterprise-Grade Security</h2>
<p className="font-body-md text-outline max-w-2xl mx-auto mb-20 text-lg">
            We take your data security seriously. Scryme Chat is built from the ground up to meet the compliance needs of the world's most demanding organizations.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="p-10 rounded-[2rem] bg-[#1a2533]/80 backdrop-blur-md border border-outline/20 hover:border-surface-tint/50 transition-colors">
<span className="material-symbols-outlined text-surface-tint text-[48px] mb-6">verified_user</span>
<h3 className="font-label-md text-[18px] mb-4">SOC2 Type II Certified</h3>
<p className="font-body-sm text-[15px] text-outline">Independently audited for security, availability, and confidentiality.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#1a2533]/80 backdrop-blur-md border border-outline/20 hover:border-surface-tint/50 transition-colors">
<span className="material-symbols-outlined text-surface-tint text-[48px] mb-6">enhanced_encryption</span>
<h3 className="font-label-md text-[18px] mb-4">End-to-End Encryption</h3>
<p className="font-body-sm text-[15px] text-outline">Your data is encrypted in transit and at rest. Always.</p>
</div>
<div className="p-10 rounded-[2rem] bg-[#1a2533]/80 backdrop-blur-md border border-outline/20 hover:border-surface-tint/50 transition-colors">
<span className="material-symbols-outlined text-surface-tint text-[48px] mb-6">key</span>
<h3 className="font-label-md text-[18px] mb-4">Single Sign-On (SSO)</h3>
<p className="font-body-sm text-[15px] text-outline">Integrate seamlessly with Okta, Google Workspace, and Active Directory.</p>
</div>
</div>
</div>
</section>
{/* Social Proof / Wall of Love */}
<section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-bright">
<div className="max-w-6xl mx-auto">
<h2 className="font-headline-lg text-headline-lg text-center text-on-surface mb-20">Trusted by High-Performance Teams</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="bg-white p-10 rounded-[2rem] shadow-xl border border-outline-variant/20 relative hover:-translate-y-2 transition-transform duration-300">
<span className="material-symbols-outlined text-surface-tint/10 text-[80px] absolute top-6 right-6">format_quote</span>
<p className="font-body-md text-on-surface-variant mb-8 relative z-10 text-[16px] leading-relaxed">"Scryme Chat completely transformed how our engineering org operates. The integration with our CI/CD pipeline is flawless, and incidents are resolved 3x faster."</p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center font-label-md text-primary text-[16px]">SM</div>
<div>
<div className="font-label-md text-[15px] text-on-surface">Sarah Miller</div>
<div className="font-body-sm text-on-surface-variant">VP Engineering, TechFlow</div>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-[2rem] shadow-xl border border-outline-variant/20 relative hover:-translate-y-2 transition-transform duration-300">
<span className="material-symbols-outlined text-surface-tint/10 text-[80px] absolute top-6 right-6">format_quote</span>
<p className="font-body-md text-on-surface-variant mb-8 relative z-10 text-[16px] leading-relaxed">"We moved from a generic chat app to Scryme because we needed a tool that respected developers' time. The deep GitHub integration is a game-changer."</p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center font-label-md text-primary text-[16px]">DJ</div>
<div>
<div className="font-label-md text-[15px] text-on-surface">David Jin</div>
<div className="font-body-sm text-on-surface-variant">CTO, DataSync</div>
</div>
</div>
</div>
<div className="bg-white p-10 rounded-[2rem] shadow-xl border border-outline-variant/20 relative hover:-translate-y-2 transition-transform duration-300">
<span className="material-symbols-outlined text-surface-tint/10 text-[80px] absolute top-6 right-6">format_quote</span>
<p className="font-body-md text-on-surface-variant mb-8 relative z-10 text-[16px] leading-relaxed">"The real-time collaboration features are stellar. Huddles feel instant, and sharing code snippets doesn't ruin the formatting. Highly recommend."</p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-primary-container/20 flex items-center justify-center font-label-md text-primary text-[16px]">EL</div>
<div>
<div className="font-label-md text-[15px] text-on-surface">Elena Rodriguez</div>
<div className="font-body-sm text-on-surface-variant">Product Manager, Nexus</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Secondary CTA */}
<section className="py-40 px-margin-mobile md:px-margin-desktop bg-surface-tint relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-headline-xl text-headline-xl text-white mb-8">Ready to upgrade your workflow?</h2>
<p className="font-body-md text-white/90 max-w-2xl mx-auto mb-12 text-[20px] leading-relaxed">
            Join thousands of teams who have already made the switch. Start using Scryme Chat today for free, no credit card required.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<Link to="/signup" className="w-full sm:w-auto bg-white text-surface-tint font-label-md px-10 py-5 rounded-full hover:bg-surface-bright transition-all shadow-xl hover:shadow-2xl text-[16px] text-center block">
                Get Started for Free
            </Link>
<Link to="/contact" className="w-full sm:w-auto bg-transparent text-white font-label-md px-10 py-5 rounded-full border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all text-[16px] text-center block">
                Book a Demo
            </Link>
</div>
</div>
</section>

    </div>
  );
}
