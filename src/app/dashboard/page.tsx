'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Compass,
  Flag,
  HandHeart,
  Heart,
  Link2,
  Sparkles,
  Target,
} from 'lucide-react';
import { DemoDataNotice } from '@/components/ui/DemoDataNotice';
import { TrustPanel } from '@/components/ui/TrustPanel';
import {
  guidedSteps,
  resources,
  stageMeta,
  supportProviders,
  type JourneyStageId,
} from '@/lib/data';

export default function DashboardHome() {
  const [activeStage, setActiveStage] = useState<JourneyStageId>('just-diagnosed');

  const stage = useMemo(
    () => guidedSteps.find((item) => item.id === activeStage) ?? guidedSteps[0],
    [activeStage],
  );
  const recommendedResource = useMemo(
    () =>
      resources.find((resource) => resource.isFeatured && resource.journeyStages.includes(activeStage)) ??
      resources.find((resource) => resource.journeyStages.includes(activeStage)) ??
      resources[0],
    [activeStage],
  );
  const supportRoute = useMemo(
    () =>
      supportProviders.find((provider) => provider.journeyStages.includes(activeStage)) ??
      supportProviders[0],
    [activeStage],
  );

  return (
    <div className="page-shell">
      <section className="relative overflow-hidden rounded-3xl gradient-navy p-7 text-white sm:p-10">
        <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90">
              <Heart className="h-3.5 w-3.5" fill="currentColor" /> Parent command center
            </span>
            <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              A steadier plan for this week starts here
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Common Ground is designed to help you figure out what matters now, what can wait, and
              where to reach for support before the whole plan starts to feel too heavy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard/next-steps" className="btn-primary bg-white text-primary hover:bg-white/90">
                Build my plan <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dashboard/support" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/15">
                Find support now
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Current navigation focus</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Current stage</p>
                <p className="mt-2 text-sm font-semibold text-white">{stage.phase}</p>
                <p className="mt-1 text-sm text-white/75">{stage.timeframe}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Next milestone</p>
                <p className="mt-2 text-sm font-semibold text-white">{stage.milestone}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Stabilizing action</p>
                <p className="mt-2 text-sm font-semibold text-white">{stage.supportAction}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoDataNotice
        title="Presentation demo with example family data"
        description="Profiles, resources, support listings, and matching examples are demo content. The navigation structure, guardrails, and trust signals are the product direction."
      />

      <section className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="section-title">What should I do this week?</h2>
            <p className="mt-1 text-sm text-brand-muted-500">
              Pick the family stage that feels most true right now. The rest of the portal will follow that lead.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {guidedSteps.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveStage(item.id)}
                className={`rounded-xl border px-3.5 py-2 text-sm font-medium transition-all ${
                  activeStage === item.id
                    ? 'border-primary bg-primary text-white shadow-soft'
                    : 'border-surface-border bg-white text-brand-muted-600 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {stageMeta[item.id].label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-surface-border bg-surface-muted p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Flag className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {stage.phase}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-brand-muted-900">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{stage.reassurance}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-surface-border bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">What matters now</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-brand-muted-600">
                  {stage.whatMattersNow.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-surface-border bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">What can wait</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-brand-muted-600">
                  {stage.whatCanWait.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-muted-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-surface-border bg-white p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Next milestone</p>
                  <h3 className="mt-1 text-base font-semibold text-brand-muted-900">{stage.milestone}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{stage.focus}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-surface-border bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">This week</p>
              <ol className="mt-3 space-y-3 text-sm text-brand-muted-600">
                {stage.checklist.slice(0, 3).map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="section-title flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-accent" /> Recommended for your stage
            </h2>
            <Link href="/dashboard/resources" className="text-sm font-semibold text-primary hover:underline">
              Open stage-aware resources
            </Link>
          </div>

          <article className="rounded-3xl border border-surface-border bg-surface-muted p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Recommended resource</p>
                <h3 className="mt-2 text-lg font-semibold text-brand-muted-900">{recommendedResource.title}</h3>
              </div>
              <div className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-muted-500">
                {recommendedResource.readTime}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted-600">{recommendedResource.description}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-surface-border bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Why this matters now</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{recommendedResource.whyNow}</p>
              </div>
              <div className="rounded-2xl border border-surface-border bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Question it helps answer</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{recommendedResource.question}</p>
              </div>
              <div className="rounded-2xl border border-surface-border bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Action it supports</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{recommendedResource.action}</p>
              </div>
            </div>
          </article>
        </div>

        <div className="space-y-5">
          <TrustPanel
            eyebrow="Support route"
            title={supportRoute.name}
            description={supportRoute.fit}
            meta={[
              supportRoute.specialty,
              supportRoute.payment,
              supportRoute.lastReviewed,
            ]}
          />
          <TrustPanel
            eyebrow="When overwhelmed"
            title="One stabilizing action is enough for today"
            description={stage.supportAction}
            meta={['Parent-first guidance', 'Built for hard weeks', 'Use support early']}
            icon={HandHeart}
            tone="muted"
          />
          <Link
            href="/dashboard/support"
            className="btn-secondary w-full justify-between py-3"
          >
            Review support options for this stage <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/dashboard/connect"
            className="btn-primary w-full justify-between py-3"
          >
            Get matched with another parent <Link2 className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
