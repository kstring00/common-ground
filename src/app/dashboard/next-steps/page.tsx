'use client';

import { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Circle,
  Compass,
  Flag,
  Target,
} from 'lucide-react';
import { guidedSteps, resources } from '@/lib/data';
import { cn } from '@/lib/utils';

const principles = [
  {
    icon: Compass,
    title: 'Clear next steps',
    description: 'One phase at a time so families do not have to solve the entire journey at once.',
  },
  {
    icon: Flag,
    title: 'Realistic timelines',
    description: 'Each phase clarifies what matters now, what milestone comes next, and what can wait.',
  },
  {
    icon: Target,
    title: 'Goal-based progression',
    description: 'The plan is built to move families toward stability, progress, and eventually greater independence.',
  },
];

export default function NextStepsPage() {
  const [expandedId, setExpandedId] = useState<string>(guidedSteps[0].id);
  const [checked, setChecked] = useState<Record<string, Set<number>>>({});

  const toggleCheck = (stepId: string, index: number) => {
    setChecked((prev) => {
      const current = new Set(prev[stepId] ?? []);
      if (current.has(index)) current.delete(index);
      else current.add(index);
      return { ...prev, [stepId]: current };
    });
  };

  const getProgress = (stepId: string, total: number) => {
    const done = checked[stepId]?.size ?? 0;
    return Math.round((done / total) * 100);
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1 className="page-title">Guided Next Steps</h1>
        <p className="page-description">
          This is the core navigation layer of Common Ground. It helps families move from diagnosis
          through milestones with realistic expectations, clearer priorities, and support during hard
          stretches.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-3">
        {principles.map((principle) => (
          <article key={principle.title} className="rounded-3xl border border-surface-border bg-white p-5">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
              <principle.icon className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-brand-muted-900">{principle.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{principle.description}</p>
          </article>
        ))}
      </section>

      <div className="soft-panel">
        <p className="text-sm font-semibold text-brand-muted-700">How to use this page</p>
        <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">
          Open the stage that matches your family now, complete one item at a time, and come back as
          your plan changes. Progress is saved for this session.
        </p>
      </div>

      <div className="space-y-4">
        {guidedSteps.map((step) => {
          const isOpen = expandedId === step.id;
          const progress = getProgress(step.id, step.checklist.length);
          const checkedSet = checked[step.id] ?? new Set();
          const linkedResources = resources.filter((r) => step.resources.includes(r.id));

          return (
            <section key={step.id} className={cn('card p-5 sm:p-6', isOpen && 'ring-2 ring-primary/20')}>
              <button
                onClick={() => setExpandedId(isOpen ? '' : step.id)}
                className="flex w-full items-start gap-4 text-left"
              >
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <Compass className="h-5 w-5 text-primary" />
                  <span className="absolute -right-1 -top-1 rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold text-primary ring-1 ring-primary/20">
                    {progress}%
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">{step.phase}</p>
                    <span className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-muted-500">
                      {step.timeframe}
                    </span>
                  </div>
                  <h2 className="mt-2 text-base font-semibold text-brand-muted-900 sm:text-lg">{step.title}</h2>
                  <p className="mt-1 text-sm text-brand-muted-500">
                    {checkedSet.size}/{step.checklist.length} complete
                  </p>
                </div>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-brand-muted-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-brand-muted-400" />
                )}
              </button>

              {isOpen && (
                <div className="mt-5 space-y-5 border-t border-surface-border pt-5">
                  <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
                    <div className="rounded-2xl border border-surface-border bg-surface-muted p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Milestone</p>
                      <p className="mt-2 text-sm font-medium text-brand-muted-800">{step.milestone}</p>
                    </div>
                    <div className="rounded-2xl border border-surface-border bg-surface-muted p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary">Primary focus</p>
                      <p className="mt-2 text-sm font-medium text-brand-muted-800">{step.focus}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-brand-muted-600">{step.description}</p>

                  <div>
                    <div className="mb-1.5 flex justify-between text-xs text-brand-muted-500">
                      <span>Progress</span>
                      <span>
                        {checkedSet.size} of {step.checklist.length} steps done
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-subtle">
                      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {step.checklist.map((item, i) => {
                      const isDone = checkedSet.has(i);
                      return (
                        <li key={item}>
                          <button
                            onClick={() => toggleCheck(step.id, i)}
                            className={cn(
                              'flex w-full items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-colors',
                              isDone
                                ? 'border-green-200 bg-green-50'
                                : 'border-surface-border hover:bg-surface-muted',
                            )}
                          >
                            {isDone ? (
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                            ) : (
                              <Circle className="mt-0.5 h-5 w-5 shrink-0 text-brand-muted-300" />
                            )}
                            <span
                              className={cn(
                                'text-sm leading-relaxed',
                                isDone ? 'text-green-700 line-through' : 'text-brand-muted-700',
                              )}
                            >
                              {item}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  {linkedResources.length > 0 && (
                    <div>
                      <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-brand-muted-700">
                        <BookOpen className="h-4 w-4" /> Helpful resources
                      </h3>
                      <div className="space-y-2">
                        {linkedResources.map((resource) => (
                          <div
                            key={resource.id}
                            className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface-muted px-3 py-2.5"
                          >
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-brand-muted-800">{resource.title}</p>
                              <p className="text-xs text-brand-muted-500">{resource.readTime} read</p>
                            </div>
                            <ArrowRight className="h-4 w-4 shrink-0 text-brand-muted-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
