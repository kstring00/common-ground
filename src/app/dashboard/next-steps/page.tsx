'use client';

import { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { guidedSteps, resources } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function NextStepsPage() {
  const [expandedId, setExpandedId] = useState<string>(guidedSteps[0].id);
  const [checked, setChecked] = useState<Record<string, Set<number>>>({});

  function toggleCheck(stepId: string, index: number) {
    setChecked((prev) => {
      const current = new Set(prev[stepId] ?? []);
      if (current.has(index)) current.delete(index);
      else current.add(index);
      return { ...prev, [stepId]: current };
    });
  }

  function getProgress(stepId: string, total: number) {
    const done = checked[stepId]?.size ?? 0;
    return Math.round((done / total) * 100);
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          Guided Next Steps
        </h1>
        <p className="text-gray-500">
          Clear, structured pathways for wherever you are in your family&apos;s journey.
          Check items off as you go.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {guidedSteps.map((step) => {
          const isOpen = expandedId === step.id;
          const progress = getProgress(step.id, step.checklist.length);
          const checkedSet = checked[step.id] ?? new Set();
          const linkedResources = resources.filter((r) =>
            step.resources.includes(r.id),
          );

          return (
            <div
              key={step.id}
              className={cn(
                'card transition-all duration-300',
                isOpen && 'ring-2 ring-primary/20',
              )}
            >
              {/* Header row */}
              <button
                onClick={() => setExpandedId(isOpen ? '' : step.id)}
                className="w-full flex items-center gap-4 text-left"
              >
                <div className="relative w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Compass className="w-6 h-6 text-primary" />
                  {progress > 0 && progress < 100 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-white text-[10px] font-bold flex items-center justify-center">
                      {progress}%
                    </div>
                  )}
                  {progress === 100 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {step.phase}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base">
                    {step.title}
                  </h3>
                </div>

                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div className="mt-5 pt-5 border-t border-surface-border space-y-5">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                      <span>Progress</span>
                      <span>
                        {checkedSet.size} / {step.checklist.length} complete
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-surface-subtle overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2">
                    {step.checklist.map((item, i) => {
                      const isDone = checkedSet.has(i);
                      return (
                        <li key={i}>
                          <button
                            onClick={() => toggleCheck(step.id, i)}
                            className={cn(
                              'w-full flex items-start gap-3 text-left px-3 py-2.5 rounded-xl transition-colors',
                              isDone
                                ? 'bg-green-50'
                                : 'hover:bg-surface-subtle',
                            )}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                            )}
                            <span
                              className={cn(
                                'text-sm',
                                isDone
                                  ? 'text-green-700 line-through'
                                  : 'text-gray-700',
                              )}
                            >
                              {item}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Related resources */}
                  {linkedResources.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4" />
                        Related Resources
                      </h4>
                      <div className="space-y-2">
                        {linkedResources.map((r) => (
                          <div
                            key={r.id}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface-subtle hover:bg-surface-muted transition-colors cursor-pointer"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-800 truncate">
                                {r.title}
                              </p>
                              <p className="text-xs text-gray-400">
                                {r.readTime} read
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
