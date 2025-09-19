"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Bot, Workflow, Cpu, LineChart, Sparkles, Wrench, Shield, Mail, ArrowRight, FileText, Handshake, Gauge, Settings, Rocket } from "lucide-react";

// --- Lightweight UI primitives (no external UI library needed) ---
const cn = (...cls: (string | false | null | undefined)[]) => cls.filter(Boolean).join(" ");

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: "default" | "outline" | "ghost"; size?: "sm" | "md" | "lg" };
const Button = ({ asChild, variant = "default", size = "md", className, children, ...props }: ButtonProps) => {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";
  const sizes = { sm: "h-9 px-3 text-sm", md: "h-10 px-4 text-sm", lg: "h-11 px-5 text-base" } as const;
  const variants = {
    default: "bg-primary text-primary-foreground bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  } as const;
  const cls = cn(base, sizes[size], variants[variant], className);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, { className: cn((children as any).props?.className, cls) });
  }
  return <button className={cls} {...props}>{children}</button>;
};

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("rounded-2xl border border-gray-200 bg-card text-card-foreground", className)}>{children}</div>
);
const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("p-6", className)}>{children}</div>
);
const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <h3 className={cn("text-xl font-semibold leading-none tracking-tight", className)}>{children}</h3>
);
const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("p-6 pt-0", className)}>{children}</div>
);

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cn("flex h-10 w-full rounded-xl border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2", className)} {...props} />
);

// Simple container + section helpers
const Section = ({ id, title, subtitle, children }: { id?: string; title?: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="w-full py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      {title && (
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Card className="h-full shadow-sm hover:shadow-md transition-shadow">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-blue-600/10 text-blue-700">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

export default function OfficeWiseSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Nav */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-blue-600/10 grid place-items-center"><Sparkles className="h-4 w-4"/></div>
            <span className="font-semibold tracking-tight">OfficeWise AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#results" className="hover:underline">Results</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild><a href="#contact">Contact</a></Button>
            <Button asChild><a href="https://calendly.com/ayesha-officewise/30min" target="_blank" rel="noopener noreferrer">Get a Free Audit</a></Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Automate the busywork. <span className="text-blue-700">Ship more. Spend less.</span>
            </motion.h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              OfficeWise helps small and mid‑size teams deploy practical AI automations—without the hype. We audit your workflows, integrate the right tools, and ship reliable agents that save hours every week.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "AI audit to uncover ROI in under 2 weeks",
                "Agentic workflows wired into your existing tools",
                "Security‑minded setup with clear documentation",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-blue-700"/><span>{i}</span></li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <a href="https://calendly.com/ayesha-officewise/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Book a discovery call <ArrowRight className="h-4 w-4"/></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#services">See what we build</a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Based in Ontario • Serving US & Canada • Remote‑first</p>
          </div>

          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.5, delay:0.1}} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10"><Bot className="h-4 w-4"/></div>
                  <div className="font-medium">Support Triage Bot</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Routes tickets, drafts replies, and escalates with context in Slack/Helpdesk.</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10"><Workflow className="h-4 w-4"/></div>
                  <div className="font-medium">Ops Automations</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">From invoice matching to CRM hygiene, let bots do repetitive steps.</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10"><Cpu className="h-4 w-4"/></div>
                  <div className="font-medium">Data Assistants</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Ask plain‑English questions over databases, sheets, or dashboards.</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10"><LineChart className="h-4 w-4"/></div>
                  <div className="font-medium">Analytics & Reporting</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Scheduled summaries, KPIs, and alerts delivered where you work.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Social proof / logos placeholder */}
      <Section>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 text-sm">
          <span>Trusted by product, ops, and engineering teams</span>
          <div className="h-6 w-px bg-border"/>
          <span>Security‑first • Vendor‑agnostic • Clear docs</span>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="What we can do for you" subtitle="Pick a starting point, or ask for a custom plan for your stack.">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={Bot} title="AI Helpdesk & Ticketing" desc="Triage, summarize, and draft replies across Zendesk, Intercom, or Gmail. Escalate with full context into Slack or JIRA." />
          <Feature icon={Workflow} title="Back‑office Automation" desc="Automate high‑volume workflows—invoice matching, PO checks, report generation, CRM enrichment, lead routing, and more." />
          <Feature icon={Cpu} title="Data Q&A Assistants" desc="Natural‑language to SQL for Redshift/Snowflake/BigQuery; governed access; query templates; one‑click CSV exports." />
          <Feature icon={LineChart} title="Dashboards & Alerts" desc="Daily/weekly KPI digests, anomaly alerts, and proactive insights sent to Slack/Email with drill‑downs." />
          <Feature icon={Wrench} title="Build Environments & DevX" desc="Dockerized, reproducible dev setups; CI/CD hardening; guardrails for AI‑generated code; test scaffolding." />
          <Feature icon={Shield} title="Security & Policy" desc="SSO, least‑privilege IAM, secret management, data‑retention, and clear AI usage policies your team can follow." />
        </div>
        <div className="mt-6 flex justify-center">
          <div className="w-full max-w-sm">
            <Feature icon={Sparkles} title="Integration with AI B2B Services" desc="We also integrate cutting-edge AI B2B platforms—like Cohere, Anthropic, OpenAI, Scale AI, Glean, Typeface, or Gumloop—into your workflows so you can leverage the best of the ecosystem." />
          </div>
        </div>

        {/* Custom administrative tasks section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Custom Administrative Solutions</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-10">
            Beyond standard automation, we build extremely tailored tools for clerical, administrative, and document‑heavy workflows. These are a few real‑world examples:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Feature icon={FileText} title="Outlook Plugin for CX" desc="Custom plugin that answers customer inquiries directly in Outlook using your company's FAQs, meeting notes, and knowledge base." />
            <Feature icon={FileText} title="Automated Bank Reconciliations" desc="End‑to‑end automation that generates accurate bank recs directly from bank statements—no manual spreadsheet crunching required." />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Service Packages</h3>
          <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Starter: AI Audit (2 weeks)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>We map your workflows, quantify potential ROI, and ship one high‑leverage automation as a quick win.</p>
              <ul className="space-y-2">
                {[
                  "Discovery interviews & tooling inventory",
                  "Risk & security review (lightweight)",
                  "Automation roadmap with ROI estimates",
                  "One shipped automation + documentation",
                ].map((i) => (
                  <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-blue-700 mt-0.5"/>{i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly: Automation Partner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>Ongoing build‑measure‑learn cycles to expand coverage, maintain agents, and keep everything fast and reliable.</p>
              <ul className="space-y-2">
                {[
                  "2–4 new automations per month",
                  "SLAs for fixes & maintenance",
                  "Quarterly security & cost reviews",
                  "Change‑logs and leader updates",
                ].map((i) => (
                  <li key={i} className="flex gap-2"><Check className="h-4 w-4 text-blue-700 mt-0.5"/>{i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section id="process" title="How we work" subtitle="Clear steps, visible progress, and documentation that outlasts personnel changes.">
        <div className="grid md:grid-cols-4 gap-6">
          {[{icon:FileText,title:"1) Audit & Priorities",desc:"Workflow mapping, stack review, north‑star metrics. Pick top 3 automations by ROI and ease."},
            {icon:Settings,title:"2) Design & Security",desc:"Data flows, permissions, fallback paths, and measurable success criteria."},
            {icon:Gauge,title:"3) Build & Validate",desc:"Ship small, test in shadow mode, then graduate to production with SLAs."},
            {icon:Rocket,title:"4) Launch & Iterate",desc:"Track KPIs, create docs, and expand coverage every sprint."}].map(({icon:Icon,title,desc}) => (
              <Card key={title} className="h-full">
                <CardHeader className="space-y-2">
                  <div className="p-2 rounded-xl bg-blue-600/10 w-fit"><Icon className="h-5 w-5"/></div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </Section>

      {/* Outcomes / Results */}
      <Section id="results" title="Outcomes we aim for" subtitle="Your mileage will vary, but these are typical wins once the flywheel starts.">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <Card><CardContent className="pt-6"><div className="text-4xl font-bold">20–40%</div><p className="mt-1 text-muted-foreground">Less time on repetitive ops within 90 days</p></CardContent></Card>
          <Card><CardContent className="pt-6"><div className="text-4xl font-bold">$3–10k/mo</div><p className="mt-1 text-muted-foreground">Typical saved cost from automation + fewer errors</p></CardContent></Card>
          <Card><CardContent className="pt-6"><div className="text-4xl font-bold">~2 weeks</div><p className="mt-1 text-muted-foreground">From scoped idea to first shipped agent</p></CardContent></Card>
        </div>
      </Section>

      {/* Testimonials placeholder */}
      <Section title="What clients say" subtitle="Short, honest notes from the teams we help.">
        <div className="grid md:grid-cols-3 gap-6">
          {["We finally have clean, weekly KPI snapshots in Slack—no more spreadsheet wrangling.",
            "Their audit found two workflows we didn't realize were draining 15+ hours a week.",
            "Docs are immaculate. If someone leaves, the automations keep working."]
            .map((quote, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <p className="text-sm">“{quote}”</p>
                  <p className="mt-3 text-xs text-muted-foreground">— Client in SaaS / Services</p>
                </CardContent>
              </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ" subtitle="If it's not here, ask us—happy to clarify.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Which tools and stacks do you work with?",
              a: "We're vendor‑agnostic. Common picks: AWS (Lambda, Bedrock), GCP, Snowflake/Redshift/BigQuery, dbt, Airbyte, Slack, Notion, Jira, Asana, HubSpot, Zapier/Make, LangChain, Cohere, Anthropic, Scale AI, Glean, Typeface, and direct API integrations.",
            },
            {
              q: "How do you handle security?",
              a: "Least‑privilege IAM, SSO where possible, secret managers, data scoping, and audit logs. We document data flows and set up access reviews.",
            },
            {
              q: "What does the AI Audit include?",
              a: "Stakeholder interviews, workflow mapping, tool inventory, risk review, ROI model, and one shipped quick‑win automation with docs.",
            },
            {
              q: "Pricing?",
              a: "Fixed‑fee audit; then monthly retainer or project‑based. We aim for a clear ROI multiple over fees.",
            },
          ].map(({q,a}) => (
            <Card key={q}>
              <CardHeader><CardTitle className="text-lg">{q}</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground">{a}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get a Free Audit Intro" subtitle="Tell us a bit about your team and workflows. We'll reply within 24 hours.">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <form action="https://formspree.io/f/xandrnaq" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input placeholder="Name" name="name" />
                  <Input placeholder="Work Email" type="email" name="email" />
                </div>
                <Input placeholder="Company / Team size" name="company" />
                <Input placeholder="Your stack (e.g., Slack, HubSpot, Redshift)" name="stack" />
                <Input placeholder="Top workflow to fix (one sentence)" name="workflow" />
                <Button type="submit" className="w-full">Send request <Mail className="ml-2 h-4 w-4"/></Button>
              </form>
              <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about this request.</p>
            </CardContent>
          </Card>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Handshake className="h-5 w-5 mt-1"/>
              <div>
                <p className="font-medium">Hands‑on partnership</p>
                <p className="text-muted-foreground">We scope small, ship quickly, and iterate. Expect measurable wins, not long decks.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 mt-1"/>
              <div>
                <p className="font-medium">Security‑minded by default</p>
                <p className="text-muted-foreground">Access is scoped, secrets are managed, and changes are logged.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wrench className="h-5 w-5 mt-1"/>
              <div>
                <p className="font-medium">Docs that outlive people</p>
                <p className="text-muted-foreground">Everything we build comes with clear runbooks and handoff docs.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-blue-600/10 grid place-items-center"><Sparkles className="h-4 w-4"/></div>
            <span className="font-medium">OfficeWise AI</span>
          </div>
          <div className="text-muted-foreground">© {new Date().getFullYear()} OfficeWise AI. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#process" className="hover:underline">Process</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
