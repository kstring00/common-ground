import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Flag,
  HandHeart,
  Heart,
  Link2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { TexasAbaLogo } from '@/components/brand/TexasAbaLogo';
import { TrustPanel } from '@/components/ui/TrustPanel';

const heroSteps = [
  {
    phase: 'Right now',
    title: 'Understand the diagnosis',
    detail: 'What matters this week, what can wait, and what realistic progress looks like.',
  },
  {
    phase: 'Next 30-90 days',
    title: 'Set goals and timelines',
    detail: 'Therapy, school, insurance, and family support organized into one plan.',
  },
  {
    phase: 'Longer term',
    title: 'Move toward independence',
    detail: 'Build skills, reduce burnout, and phase support based on progress and readiness.',
  },
];

const stats = [
  {
    value: '70%',
    label: 'of caregivers report high stress after diagnosis',
    note: 'The early stage is emotionally heavy and families often enter it without a plan.',
  },
  {
    value: '<30%',
    label: 'of families access structured support consistently',
    note: 'Support is often fragmented across providers, school, and home.',
  },
  {
    value: 'Early',
    label: 'support changes the long-term path',
    note: 'The goal is not to scare parents. It is to intervene before overwhelm becomes burnout.',
  },
];

const riskSignals = [
  {
    title: 'Mental health strain',
    value: '50%',
    detail: 'In one UCSF-tracked cohort, about half of mothers of children with ASD showed elevated depressive symptoms over 18 months.',
    response: 'Common Ground lowers noise early with guided next steps, realistic expectations, and fast access to support.',
    source: 'UCSF maternal depressive symptom reporting',
  },
  {
    title: 'Family breakdown risk',
    value: '23.5%',
    detail: 'One autism-family study reported a 23.5% divorce rate versus 13.8% in comparison families, with elevated risk continuing over time.',
    response: 'We keep the plan shared, paced, and grounded so families are not carrying the entire system alone.',
    source: 'Autism-family marital outcomes study',
  },
  {
    title: 'Child safety risk',
    value: '31%',
    detail: 'One large disability maltreatment study found a 31% abuse or neglect rate versus 9% for children without disabilities.',
    response: 'We help families reach support before stress turns into disengagement, breakdown, or harm.',
    source: 'Disability maltreatment prevalence review',
  },
];

const challengePaths = [
  {
    title: 'Without guidance and support',
    icon: AlertTriangle,
    tone: 'border-red-100 bg-red-50/70 text-red-800',
    items: [
      'Information overload after diagnosis',
      'Unclear priorities and unrealistic expectations',
      'Parent burnout, conflict, and disengagement',
      'Higher risk of missed follow-through, family strain, and dropout from care',
    ],
  },
  {
    title: 'With Common Ground',
    icon: CheckCircle2,
    tone: 'border-emerald-100 bg-emerald-50/80 text-emerald-800',
    items: [
      'Guided next steps matched to the family stage',
      'Clear timelines, milestones, and goal-based progression',
      'Support when parents are overwhelmed or at a breaking point',
      'Stronger engagement and steadier progress toward child and family goals',
    ],
  },
];

const platformAreas = [
  {
    icon: Compass,
    title: 'Guided Next Steps',
    description: 'The clearest place to begin: structured pathways for diagnosis, therapy, school, burnout, and family decision-making.',
  },
  {
    icon: Link2,
    title: 'Connect',
    description: 'Moderated parent-to-parent support for the moments when families need someone who understands their stage.',
  },
  {
    icon: BookOpen,
    title: 'Resources',
    description: 'Practical reading, scripts, and guidance that turn questions into action without creating more noise.',
  },
  {
    icon: HandHeart,
    title: 'Support Services',
    description: 'Credible providers and support options with clear details on fit, location, insurance, and access.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Local and online spaces that reduce isolation and strengthen long-term family engagement.',
  },
];

const journeyStages = [
  {
    title: 'Diagnosis and Stabilization',
    timeline: 'First 30 days',
    description: 'Process the diagnosis, understand the report, choose the next 2-3 priorities, and reduce panic-driven decision making.',
  },
  {
    title: 'Care Plan and Early Support',
    timeline: '30-90 days',
    description: 'Set realistic expectations, identify milestones, and align therapy, insurance, school, and parent support around shared goals.',
  },
  {
    title: 'Progress and Recalibration',
    timeline: 'Quarter by quarter',
    description: 'Track what is helping, update goals, and know when to add support, adjust support, or simplify the plan.',
  },
  {
    title: 'Phase-Out and Independence',
    timeline: 'Long-term',
    description: 'Common Ground is not built to keep families in services forever. It helps them move toward sustainable independence.',
  },
];

const outcomes = [
  'Lower caregiver stress through clearer next steps',
  'Better engagement with treatment, school, and follow-through',
  'More confident family decision-making during hard seasons',
  'A clearer path from diagnosis toward independence',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pb-24">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-surface-border/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Common Ground home">
            <TexasAbaLogo priority decorative className="h-7 w-auto sm:h-9" />
            <span className="border-l border-surface-border pl-3 font-display text-base font-bold text-brand-muted-900 sm:text-lg">
              Common<span className="text-primary"> Ground</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="#journey" className="hidden text-sm font-semibold text-brand-muted-600 hover:text-primary sm:inline-flex">
              View the journey
            </Link>
            <Link href="/dashboard/next-steps" className="btn-primary px-5 py-2.5">
              Start Here <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
        <div className="absolute inset-0 gradient-warm" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-16 bottom-4 h-80 w-80 rounded-full bg-brand-plum-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="pill mb-6 bg-white/90">
              <Heart className="h-3.5 w-3.5 text-accent" /> Guiding the entire journey
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight text-brand-muted-900 sm:text-5xl md:text-6xl">
              Common Ground is the
              <span className="text-primary"> Parent Navigation System</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted-600 sm:text-lg">
              Families often leave diagnosis with referrals, paperwork, and too many choices but no
              clear path. Common Ground brings guided next steps, support, and realistic timelines
              into one parent portal so families know what to do now, what comes next, and how the
              journey can move toward independence.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-muted-500 sm:text-base">
              If you are feeling weary, frustrated, lost, or unsure where to begin, start here.
              Common Ground is built to help you slow the noise, feel supported, and take the next
              right step for your child and your family.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard/next-steps" className="btn-primary">
                Start Here <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dashboard" className="btn-secondary">
                Explore the parent portal
              </Link>
            </div>
          </div>

          <div className="soft-panel border-primary/10 bg-white/90 shadow-card">
            <div className="flex items-center justify-between gap-3 border-b border-surface-border pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Start here</p>
                <h2 className="mt-1 text-xl font-semibold text-brand-muted-900">Guided Next Steps</h2>
              </div>
              <div className="rounded-2xl bg-primary/10 p-3">
                <Compass className="h-5 w-5 text-primary" />
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {heroSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-surface-border bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{step.phase}</p>
                      <h3 className="mt-1 text-sm font-semibold text-brand-muted-900 sm:text-base">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-brand-plum-100 bg-brand-plum-50/70 p-4">
              <p className="text-sm font-semibold text-brand-muted-900">Designed for the hardest moments too</p>
              <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">
                When a parent is frustrated, flooded, or close to burnout, Common Ground helps them
                reduce the noise, find support, and restart with the next smallest step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-it-matters" className="border-y border-surface-border bg-white px-6 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 max-w-3xl">
            <span className="pill bg-surface-muted">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Why this matters
            </span>
            <h2 className="mt-4 text-3xl font-bold text-brand-muted-900 sm:text-4xl">
              Parents are often asked to carry too much, too early, with too little guidance
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted-600">
              These numbers are here for one reason: to show that support for the parent matters from
              the beginning. This is not about scaring families. It is about making clear that early
              guidance protects the whole journey.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-surface-border bg-surface-muted px-5 py-6">
                <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-brand-muted-700">{stat.label}</p>
                <p className="mt-2 text-xs leading-relaxed text-brand-muted-500">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <span className="pill border-white/10 bg-white/10 text-white/80">
              <ShieldCheck className="h-3.5 w-3.5 text-white" /> The cost of leaving parents unsupported
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              When parents go unsupported, the whole family can feel it
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              These are serious research-backed warning signs. We show them to explain why support,
              teaching, and navigation matter from the beginning, not to make parents feel blamed or
              afraid.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {riskSignals.map((signal) => (
              <article key={signal.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card">
                <div className="mb-4 border-t-4 border-accent pt-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent/90">{signal.title}</p>
                  <p className="mt-3 text-4xl font-bold text-white">{signal.value}</p>
                </div>
                <p className="text-sm leading-relaxed text-white/75">{signal.detail}</p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Why this matters for you</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{signal.response}</p>
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-white/55">Evidence basis</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">{signal.source}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/75">
            <span className="font-semibold text-accent">The point:</span> when stress goes unsupported,
            it can build into burnout, relationship strain, disengagement, and greater risk for the
            child. That is why parent support is not extra. It is part of good outcomes.
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/80">
            You are not expected to know how to navigate this alone. Common Ground exists to help you
            feel steadier, more informed, and better supported from the beginning.
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <TrustPanel
            eyebrow="Evidence and guardrails"
            title="Serious claims should come with clear context"
            description="When Common Ground shows research-style parent risk signals, it should also show why they matter, what they do not mean, and how the platform responds in a parent-safe way."
            meta={['Evidence basis visible', 'Directional not diagnostic', 'Reviewed for parent readability']}
            icon={ShieldCheck}
          />
          <TrustPanel
            eyebrow="What Common Ground is and is not"
            title="Navigation, support, and routing in one place"
            description="Common Ground helps parents understand what matters now, connect to support, and build a steadier plan. It does not replace clinical care, school decisions, or emergency response."
            meta={['Parent-first', 'Calm and practical', 'Built for hard stages']}
            icon={Compass}
            tone="muted"
          />
        </div>
      </section>

      <section className="bg-surface-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="pill mb-4 bg-white">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> The hub where paths diverge
            </span>
            <h2 className="text-3xl font-bold text-brand-muted-900 sm:text-4xl">
              The difference is not more information. It is better guidance.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {challengePaths.map((path) => (
              <article key={path.title} className={`rounded-3xl border p-7 ${path.tone}`}>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70">
                  <path.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{path.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                  {path.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-current/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guided-next-steps" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="pill bg-surface-muted">
                <Compass className="h-3.5 w-3.5 text-primary" /> One parent portal
              </span>
              <h2 className="mt-4 text-3xl font-bold text-brand-muted-900 sm:text-4xl">
                The whole system works together for the parent
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-muted-600">
                Guided Next Steps may be the clearest place to begin, but Common Ground is designed
                as a full parent portal for real life. Every area exists to reduce overwhelm, improve
                follow-through, and help the parent feel less alone while moving toward the next milestone.
              </p>
            </div>
            <Link href="/dashboard" className="btn-secondary">
              See how the full system works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {platformAreas.map((area) => (
              <article key={area.title} className="card p-6">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-brand-muted-900">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted-600">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="bg-surface-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <span className="pill bg-white">
              <Target className="h-3.5 w-3.5 text-accent" /> Journey visualization
            </span>
            <h2 className="mt-4 text-3xl font-bold text-brand-muted-900 sm:text-4xl">
              Where families are now, where they want to go, and what happens in between
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted-600">
              Common Ground helps families move from uncertainty to goal-based progression with
              clearer milestones, stronger support, and a realistic pace.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {journeyStages.map((stage, index) => (
              <article key={stage.title} className="relative rounded-3xl border border-surface-border bg-white p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {index === 0 && <Flag className="h-5 w-5" />}
                    {index === 1 && <Compass className="h-5 w-5" />}
                    {index === 2 && <Target className="h-5 w-5" />}
                    {index === 3 && <Users className="h-5 w-5" />}
                  </div>
                  <span className="rounded-full bg-surface-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-muted-500">
                    {stage.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-brand-muted-900">{stage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted-600">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="pill bg-surface-muted">
              <HandHeart className="h-3.5 w-3.5 text-accent" /> Philosophy
            </span>
            <h2 className="mt-4 text-3xl font-bold text-brand-muted-900 sm:text-4xl">
              Common Ground supports families toward independence, not endless dependency
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted-600">
              The goal is not to keep families inside services forever. The goal is to help them
              understand the path, engage well, build confidence, and phase support based on
              progress, readiness, and real life.
            </p>
          </div>

          <div className="rounded-3xl gradient-navy p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Expected outcomes</p>
            <ul className="mt-5 space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl gradient-navy p-10 text-center text-white sm:p-14">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Explore Common Ground as a working parent portal
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 sm:text-lg">
            See Guided Next Steps, Connect, Resources, Support Services, and the dashboard experience
            that turns a scattered journey into a clearer system.
          </p>
          <Link
            href="/dashboard/next-steps"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3 font-semibold text-primary shadow-soft transition hover:bg-white/90"
          >
            Start building my plan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="fixed inset-x-4 bottom-4 z-40 sm:inset-x-auto sm:right-6">
        <Link
          href="/dashboard/next-steps"
          className="flex items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-white px-5 py-4 shadow-card hover:shadow-card-hover sm:min-w-[280px]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Start here</p>
            <p className="mt-1 text-sm font-semibold text-brand-muted-900">Feeling lost? Open Guided Next Steps</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
      </div>
    </main>
  );
}
