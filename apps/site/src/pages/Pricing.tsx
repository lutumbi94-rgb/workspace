import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';

export function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing | Scryme Chat</title>
        <meta name="description" content="Flexible pricing plans for teams of all sizes. Start for free today." />
      </Helmet>
      <div className="bg-background text-on-background font-body-md antialiased min-h-screen py-24 flex flex-col items-center justify-center">

{/* Background accents */}
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute top-1/3 right-1/4 w-80 h-80 bg-surface-tint/10 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
<div className="text-center mb-16 space-y-stack-md">
<h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface">Choose the best plan for you</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Scalable communication infrastructure for high-performance teams. Start free, upgrade when you need.</p>
</div>
{/* Pricing Cards Container */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 w-full max-w-6xl">
{/* Starter Plan */}
<div className="bg-surface rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-outline-variant/40">
<div className="mb-8">
<h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Starter</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">For small teams getting started.</p>
</div>
<div className="mb-8">
<span className="font-headline-xl text-headline-xl text-on-surface">Free</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">/forever</span>
</div>
<Link to="/signup" className="w-full bg-surface-container-high text-on-surface font-label-md text-label-md py-3 rounded-lg mb-8 hover:bg-surface-variant transition-colors border border-outline-variant/50 shadow-sm text-center block">Get Started</Link>
<div className="flex-grow space-y-4">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4">Features included:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            Up to 10 users
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            30-day message history
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            Basic file sharing (1GB)
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            Standard support
                        </li>
</ul>
</div>
</div>
{/* Pro Plan */}
<div className="bg-primary rounded-2xl p-8 flex flex-col relative overflow-hidden transform md:-translate-y-4 pro-glow border border-primary-container z-10 text-on-primary transition-all duration-300 hover:-translate-y-6 hover:shadow-2xl">
<div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container font-label-md text-[10px] px-4 py-1.5 rounded-bl-lg font-bold uppercase tracking-wider shadow-sm">Most Popular</div>
<div className="mb-8">
<h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary mb-2">Pro</h3>
<p className="font-body-sm text-body-sm text-primary-fixed-dim">For growing, high-performance teams.</p>
</div>
<div className="mb-8">
<span className="font-headline-xl text-headline-xl text-on-primary">$15</span>
<span className="font-body-sm text-body-sm text-primary-fixed-dim">/user/month</span>
</div>
<Link to="/signup" className="w-full bg-on-primary text-primary font-label-md text-label-md py-3 rounded-lg mb-8 hover:bg-surface-bright transition-colors shadow-md text-center block">Start Free Trial</Link>
<div className="flex-grow space-y-4">
<p className="font-label-md text-label-md text-primary-fixed-dim uppercase tracking-wider mb-4">Everything in Starter, plus:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-on-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            Unlimited History
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-on-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            Custom Bots &amp; Integrations
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-on-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            SSO Authentication
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-on-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            100GB file storage per user
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-on-primary">
<span className="material-symbols-outlined text-on-primary text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            Priority 24/7 support
                        </li>
</ul>
</div>
</div>
{/* Enterprise Plan */}
<div className="bg-inverse-surface rounded-2xl p-8 flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl enterprise-glow border border-inverse-surface">
<div className="mb-8">
<h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-inverse-on-surface mb-2">Enterprise</h3>
<p className="font-body-sm text-body-sm text-inverse-on-surface/70">Custom security and compliance needs.</p>
</div>
<div className="mb-8">
<span className="font-headline-xl text-headline-lg-mobile md:text-headline-lg text-inverse-on-surface">Custom</span>
</div>
<Link to="/contact" className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg mb-8 hover:bg-primary-container transition-colors shadow-md text-center block">Contact Us</Link>
<div className="flex-grow space-y-4">
<p className="font-label-md text-label-md text-inverse-on-surface/70 uppercase tracking-wider mb-4">Everything in Pro, plus:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-primary-fixed-dim text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            Dedicated Account Manager
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-primary-fixed-dim text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            On-premise deployment options
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-primary-fixed-dim text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            Advanced Audit Logs
                        </li>
<li className="flex items-center gap-3 font-body-sm text-body-sm text-inverse-on-surface">
<span className="material-symbols-outlined text-primary-fixed-dim text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                            HIPAA &amp; SOC2 Compliance
                        </li>
</ul>
</div>
</div>
</div>

      </div>
    </>
  );
}
