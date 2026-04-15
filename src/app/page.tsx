import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  Compass,
  Flag,
  HandHeart,
  Heart,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { TexasAbaLogo } from '@/components/brand/TexasAbaLogo';

const startSteps = [
  {
    label: 'Choose your stage',
    detail: 'Start with the stage that feels most true right now.',
  },
  {
    label: 'See what matters now',
    detail: 'Get a short list for this week instead of the whole journey at once.',
  },
  {
    label: 'Get help early',
    detail: 'If things feel heavy, go straight to support.',
  },
];

const howItWorks = [
  {
    title: 'Where you are',
    detail: 'Pick the stage that fits today.',
    icon: Flag,
  },
  {
    title: 'What to do next',
    detail: 'Follow a short plan built around what matters now.',
    icon: Compass,
  },
  {
    title: 'Where to go if overwhelmed',
    detail: 'Use support before the whole plan feels too heavy.',
    icon: HandHeart,
  },
];

const journeyStages = [
  {
    title: 'Diagnosis',
    timeline: 'First 30 days',
    description: 'Slow the noise, understand the diagnosis, and choose the next few priorities.',
  },
  {
    title: 'Therapy',
    timeline: '30-90 days',
    description: 'Set realistic goals and make early support feel more manageable.',
  },
  {
    title: 'School',
    timeline: 'As needs change',
    description: 'Prepare for school conversations, transitions, and shared planning.',
  },
  {
    title: 'Independence',
    timeline: 'Long-term',
    description: 'Build family stability and move toward less support over time.',
  },
];

const stats = [
  {
    value: '70%',
    label: 'of caregivers report high stress after diagnosis',
  },
  {
    value: '<30%',
    label: 'of families access structured support consistently',
  },
  {
    value: 'Early',
    label: 'support can change the path before burnout builds',
  },
];

const riskSignals = [
  {
    title: 'Mental health strain',
    response: 'Parent support is not extra. It helps families stay steady enough to keep going.',
    source: 'UCSF maternal depressive symptom reporting',
  },
  {
    title: 'Family strain',
    response: 'A shared plan can reduce conflict, confusion, and the feeling of carrying everything alone.',
    source: 'Autism-family marital outcomes study',
  },
  {
    title: 'Child safety',
    response: 'Earlier support matters because stress that goes unsupported can affect the whole home.',
    source: 'Disability maltreatment prevalence review',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-surface-border/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Common Ground home">
            <TexasAbaLogo priority decorative className="h-7 w-auto sm:h-9" />
            <span className="border-l border-surface-border pl-3 font-display text-base font-bold text-brand-muted-900 sm:text-lg">
              Common<span className="text-primary"> Ground</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="#how-it-works" className="hidden text-sm font-semibold text-brand-muted-600 hover:text-primary sm:inline-flex">
              How it works
            </Link>
            <Link href="/dashboard/next-steps" className="btn-primary px-5 py-2.5">
              See my next step <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-36">
        <div className="absolute inset-0 gradient-warm" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-16 bottom-4 h-80 w-80 rounded-full bg-brand-plum-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="pill mb-6 bg-white/90">
              <Heart className="h-3.5 w-3.5 text-accent" /> Parent Navigation System
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight text-brand-muted-900 sm:text-5xl md:text-6xl">
              Common Ground helps you know
              <span className="text-primary"> what to do next</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted-600 sm:text-lg">
              Start with your stage, get a short plan for right now, and reach support early if the
              week feels too heavy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard/next-steps" className="btn-primary">
                See my next step <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dashboard/support" className="btn-secondary">
                Get support now
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-medium text-brand-muted-500">
              <span className="rounded-full border border-surface-border bg-white/85 px-3 py-1">
                Guided next steps first
              </span>
              <span className="rounded-full border border-surface-border bg-white/85 px-3 py-1">
                Support when overwhelmed
              </span>
              <span className="rounded-full border border-surface-border bg-white/85 px-3 py-1">
                Diagnosis to independence
              </span>
            </div>
          </div>

          <div className="soft-panel border-primary/10 bg-white/92 shadow-card">
            <div className="flex items-center justify-between gap-3 border-b border-surface-border pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Start here</p>
                <h2 className="mt-1 text-xl font-semibold text-brand-muted-900">Guided Next Steps</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 p-3">
                <Compass className="h-5 w-5 text-primary" />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {startSteps.map((step, index) => (
                <div key={step.label} className="rounded-2xl border border-surface-border bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-muted-900 sm:text-base">{step.label}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/dashboard/next-steps" className="btn-primary mt-5 w-full justify-between">
              See my next step <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-2xl">
            <span className="pill bg-surface-muted">
              <Compass className="h-3.5 w-3.5 text-primary" /> How it works
            </span>
            <h2 className="mt-4 text-3xl font-bold text-brand-muted-900 sm:text-4xl">
              Relief first. Explanation second.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-muted-600">
              Common Ground is built to help you act before you have to understand the whole system.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {howItWorks.map((item) => (
              <article key={item.title} className="rounded-3xl border border-surface-border bg-surface-muted p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-muted-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="bg-surface-muted px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-2">
          <details className="group rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">See more</p>
                <h2 className="mt-1 text-xl font-semibold text-brand-muted-900">See the full journey</h2>
              </div>
              <ChevronDown className="h-5 w-5 text-brand-muted-400 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted-600">
              The path still moves from diagnosis to independence. You just do not need to hold the whole thing at once.
            </p>
            <div className="mt-5 grid gap-3">
              {journeyStages.map((stage, index) => (
                <article key={stage.title} className="rounded-2xl border border-surface-border bg-surface-muted p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-primary">
                      {index < 2 ? <Flag className="h-4.5 w-4.5" /> : <Target className="h-4.5 w-4.5" />}
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-muted-500">
                      {stage.timeline}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-brand-muted-900">{stage.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">{stage.description}</p>
                </article>
              ))}
            </div>
          </details>

          <details className="group rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Why it matters</p>
                <h2 className="mt-1 text-xl font-semibold text-brand-muted-900">Learn why parent support matters</h2>
              </div>
              <ChevronDown className="h-5 w-5 text-brand-muted-400 transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted-600">
              This is here for context, not to overwhelm you. The point is simple: support for the parent helps protect the whole path forward.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-surface-border bg-surface-muted p-4">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-3">
              {riskSignals.map((signal) => (
                <article key={signal.title} className="rounded-2xl border border-surface-border bg-surface-muted p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-primary">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-muted-900">{signal.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">{signal.response}</p>
                      <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-brand-muted-400">
                        {signal.source}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl rounded-3xl gradient-navy p-10 text-center text-white sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Start with your next step</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80 sm:text-lg">
            You do not need the whole plan today. Just begin with what matters now.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard/next-steps"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3 font-semibold text-primary shadow-soft transition hover:bg-white/90"
            >
              See my next step <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/dashboard/support"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Get support now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
