'use client';

import { useState } from 'react';
import { Bookmark, BookOpen, Clock, Search, Star } from 'lucide-react';
import { categoryMeta, resources, type ResourceCategory } from '@/lib/data';
import { cn } from '@/lib/utils';

const allCategories: { key: ResourceCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All resources' },
  ...Object.entries(categoryMeta).map(([key, val]) => ({ key: key as ResourceCategory, label: val.label })),
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1 className="page-title">Resources &amp; Support Library</h1>
        <p className="page-description">
          Practical guidance for the real family journey. Use this library to answer the question in
          front of you, save what matters, and come back when you have bandwidth.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-3">
        {[
          'Organized by stage and challenge',
          'Designed for realistic expectations',
          'Built to support goal-based decisions',
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-surface-border bg-white p-4 text-sm font-medium text-brand-muted-700">
            {item}
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-surface-border bg-white p-4 sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted-400" />
            <input
              type="text"
              placeholder="Search by topic, challenge, or keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-11"
            />
          </div>
          <p className="text-sm text-brand-muted-500">
            {filtered.length} resource{filtered.length !== 1 ? 's' : ''} shown
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'rounded-xl border px-3.5 py-2 text-sm font-medium transition-all',
                activeCategory === cat.key
                  ? 'border-primary bg-primary text-white shadow-soft'
                  : 'border-surface-border bg-white text-brand-muted-600 hover:border-primary/30 hover:text-primary',
              )}
            >
              {cat.key !== 'all' && <span className="mr-1.5">{categoryMeta[cat.key as ResourceCategory].emoji}</span>}
              {cat.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-brand-muted-500">
          Start with one question, not ten. The goal is clarity and follow-through, not reading
          everything at once.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {filtered.map((resource) => {
          const meta = categoryMeta[resource.category];
          const isSaved = savedIds.has(resource.id);
          return (
            <article key={resource.id} className="card flex h-full flex-col p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-semibold ${meta.color}`}>
                  {meta.emoji} {meta.label}
                </span>
                <button
                  onClick={() => toggleSave(resource.id)}
                  className={cn(
                    'rounded-lg p-2 transition-colors',
                    isSaved ? 'bg-primary/10 text-primary' : 'text-brand-muted-300 hover:bg-primary/5 hover:text-primary',
                  )}
                >
                  <Bookmark className="h-4 w-4" fill={isSaved ? 'currentColor' : 'none'} />
                </button>
              </div>

              <h3 className="text-lg font-semibold leading-snug text-brand-muted-900">{resource.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted-600">{resource.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {resource.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-surface-border bg-surface-muted px-2 py-1 text-xs text-brand-muted-500">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-surface-border pt-3 text-xs text-brand-muted-500">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {resource.readTime}
                  </span>
                  <span>Ages: {resource.ageRanges.join(', ')}</span>
                </div>
                {resource.isFeatured && (
                  <span className="inline-flex items-center gap-1 text-amber-600">
                    <Star className="h-3.5 w-3.5" fill="currentColor" /> Featured
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </section>

      {filtered.length === 0 && (
        <div className="card py-14 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-brand-muted-300" />
          <h3 className="mt-4 text-lg font-semibold text-brand-muted-600">No resources found</h3>
          <p className="mt-1 text-sm text-brand-muted-500">Try a broader keyword or a different category filter.</p>
        </div>
      )}
    </div>
  );
}
