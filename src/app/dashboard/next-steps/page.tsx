'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Flag,
  HandHeart,
  ShieldCheck,
  Target,
} from 'lucide-react';
import { DemoDataNotice } from '@/components/ui/DemoDataNotice';
import { TrustPanel } from '@/components/ui/TrustPanel';
import { guidedSteps, resources, stageMeta, type JourneyStageId } from '@/lib/data';

export default function NextStepsPage() {
  const [activeStage, setActiveStage] = useState<JourneyStageId>('just-diagnosed');
  const [checked, setChecked] = useState<Record<string, Set<number>>>({});

  const step = useMemo(
    () => guidedSteps.find((item) => item.id === activeStage) ?? guidedSteps[0],
    [activeStage],
  );
  const linkedResources = useMemo(
    () => resources.filter((resource) => step.resources.includes(resource.id)),
    [step.resources],
  );
  const checkedSet = checked[step.id] ?? new Set();
  const progress = Math.round((checkedSet.size / step.checklist.length) * 100);

  const toggleCheck = (index: number) => {
    setChecked((prev) => {
      const current = new Set(prev[step.id] ?? []);
      if (current.has(index)) current.delete(index);
      else current.add(index);
      return { ...prev, [step.id]: current };
    });
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1 className="page-title">Guided Next Steps</h1>
        <p className="page-description">
          This is the heart of Common Ground. It turns big family stages into a steadier plan with
          clear priorities, realistic timelines, support cues, and language that helps parents keep moving.
        </p>
      </header>

      <DemoDataNotice
        title="Example navigation engine for a presentation-ready parent platform"
        description="Stage pathways, resources, and escalation cues use demo content, but the structure is designed to feel like a real parent navigation system."
      />

      <section className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="section-title">Choose the stage that feels most true right now</h2>
            <p className="mt-1 text-sm text-brand-muted-500">
              You do not need to move through these in a perfect order. Use the stage that matches the pressure your family is carrying today.
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
      </section>

      <section className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {step.timeframe}
              </span>
              <span className="rounded-full bg-surface-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted-500">
                {step.lastUpdated}
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-brand-muted-900">{step.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-brand-muted-600">{step.description}</p>
            <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4">
              <p className="text-sm font-semibold text-brand-muted-900">Steady reminder</p>
              <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">{step.reassurance}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-surface-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Milestone</p>
              <p className="mt-2 text-sm font-medium text-brand-muted-800">{step.milestone}</p>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Current focus</p>
              <p className="mt-2 text-sm font-medium text-brand-muted-800">{step.focus}</p>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Reviewed</p>
              <p className="mt-2 text-sm font-medium text-brand-muted-800">{step.reviewedBy}</p>
            </div>
            <div className="rounded-2xl border border-surface-border bg-surface-muted p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Progress</p>
              <p className="mt-2 text-sm font-medium text-brand-muted-800">
                {checkedSet.size} of {step.checklist.length} steps complete
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-subtle">
                <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.9fr_0.9fr_1.2fr]">
        <div className="rounded-3xl border border-surface-border bg-white p-5">
          <div className="mb-4 flex items-center gap-2">
            <Flag className="h-4.5 w-4.5 text-primary" />
            <h2 className="section-title">What matters now</h2>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed text-brand-muted-600">
            {step.whatMattersNow.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-surface-border bg-white p-5">
          <div className="mb-4 flex items-center gap-2">
            <Target className="h-4.5 w-4.5 text-primary" />
            <h2 className="section-title">What can wait</h2>
          </div>
          <ul className="space-y-3 text-sm leading-relaxed text-brand-muted-600">
            {step.whatCanWait.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-muted-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <TrustPanel
          eyebrow="Support escalation"
          title="When to move support up the list"
          description="These cues are here so families do not wait until they are completely underwater before reaching for help."
          meta={step.supportEscalation}
          icon={HandHeart}
          tone="muted"
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
          <div className="mb-5 flex items-center gap-2">
            <Compass className="h-4.5 w-4.5 text-primary" />
            <h2 className="section-title">Practical steps for this stage</h2>
          </div>
          <div className="space-y-2">
            {step.checklist.map((item, index) => {
              const isDone = checkedSet.has(index);
              return (
                <button
                  key={item}
                  onClick={() => toggleCheck(index)}
                  className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-colors ${
                    isDone
                      ? 'border-green-200 bg-green-50'
                      : 'border-surface-border hover:bg-surface-muted'
                  }`}
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-primary ring-1 ring-primary/10">
                    {index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm leading-relaxed ${isDone ? 'text-green-700 line-through' : 'text-brand-muted-700'}`}>
                      {item}
                    </p>
                  </div>
                  {isDone && <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-5">
          <TrustPanel
            eyebrow="Best next action"
            title={step.supportAction}
            description="If everything feels urgent, use this as the single next move that keeps the plan grounded."
            meta={['Parent-first', 'Stage-specific', 'Actionable this week']}
            icon={ShieldCheck}
          />
          <Link href="/dashboard/support" className="btn-secondary w-full justify-between py-3">
            Review support options for this stage <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/dashboard/connect" className="btn-primary w-full justify-between py-3">
            Get matched with another parent <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
        <div className="mb-5 flex items-center gap-2">
          <BookOpen className="h-4.5 w-4.5 text-primary" />
          <h2 className="section-title">Resources selected for this stage</h2>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {linkedResources.map((resource) => (
            <article key={resource.id} className="rounded-3xl border border-surface-border bg-surface-muted p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {resource.readTime}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-muted-500">
                  {resource.lastUpdated}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-muted-900">{resource.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{resource.description}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-surface-border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Why this matters now</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{resource.whyNow}</p>
                </div>
                <div className="rounded-2xl border border-surface-border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">Action it supports</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{resource.action}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium text-brand-muted-500">
                <span className="rounded-full border border-surface-border bg-white px-3 py-1">{resource.reviewedBy}</span>
                {resource.isDemo && (
                  <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800">
                    Example content
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
