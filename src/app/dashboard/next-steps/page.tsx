'use client';

import { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, ChevronDown, ChevronUp, Circle, Compass } from 'lucide-react';
import { guidedSteps, resources } from '@/lib/data';
import { cn } from '@/lib/utils';

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
          When everything feels urgent, this gives you one grounded plan at a time. Start with the
          stage that matches your family right now.
        </p>
      </header>

      <div className="soft-panel">
        <p className="text-sm font-semibold text-brand-muted-700">How to use this page</p>
        <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">
          Open one pathway, check off what you&apos;ve done, and use the linked resources when you need
          details. Progress is saved for this session.
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
              <button onClick={() => setExpandedId(isOpen ? '' : step.id)} className="flex w-full items-center gap-4 text-left">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <Compass className="h-5 w-5 text-primary" />
                  <span className="absolute -right-1 -top-1 rounded-full bg-white px-1.5 py-0.5 text-[10px] font-bold text-primary ring-1 ring-primary/20">
                    {progress}%
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{step.phase}</p>
                  <h3 className="text-base font-semibold text-brand-muted-900 sm:text-lg">{step.title}</h3>
                  <p className="mt-1 text-sm text-brand-muted-500">
                    {checkedSet.size}/{step.checklist.length} complete
                  </p>
                </div>
                {isOpen ? <ChevronUp className="h-5 w-5 text-brand-muted-400" /> : <ChevronDown className="h-5 w-5 text-brand-muted-400" />}
              </button>

              {isOpen && (
                <div className="mt-5 space-y-5 border-t border-surface-border pt-5">
                  <p className="text-sm leading-relaxed text-brand-muted-600">{step.description}</p>

                  <div>
                    <div className="mb-1.5 flex justify-between text-xs text-brand-muted-500">
                      <span>Progress</span>
                      <span>{checkedSet.size} of {step.checklist.length} steps done</span>
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
                              isDone ? 'border-green-200 bg-green-50' : 'border-surface-border hover:bg-surface-muted',
                            )}
                          >
                            {isDone ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" /> : <Circle className="mt-0.5 h-5 w-5 shrink-0 text-brand-muted-300" />}
                            <span className={cn('text-sm leading-relaxed', isDone ? 'text-green-700 line-through' : 'text-brand-muted-700')}>
                              {item}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  {linkedResources.length > 0 && (
                    <div>
                      <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-brand-muted-700">
                        <BookOpen className="h-4 w-4" /> Helpful resources
                      </h4>
                      <div className="space-y-2">
                        {linkedResources.map((r) => (
                          <div key={r.id} className="flex items-center gap-3 rounded-xl border border-surface-border bg-surface-muted px-3 py-2.5">
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-brand-muted-800">{r.title}</p>
                              <p className="text-xs text-brand-muted-500">{r.readTime} read</p>
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
