'use client';

import { useState } from 'react';
import { Search, BookOpen, Bookmark, Clock, Star } from 'lucide-react';
import { resources, categoryMeta, type ResourceCategory } from '@/lib/data';
import { cn } from '@/lib/utils';

const allCategories: { key: ResourceCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All Resources' },
  ...Object.entries(categoryMeta).map(([key, val]) => ({
    key: key as ResourceCategory,
    label: val.label,
  })),
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

  function toggleSave(id: string) {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          Resource Hub
        </h1>
        <p className="text-gray-500">
          Curated, evidence-based resources for every stage of your family&apos;s journey.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search articles, guides, topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field pl-11"
        />
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {allCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium transition-all',
              activeCategory === cat.key
                ? 'bg-primary text-white shadow-soft'
                : 'bg-white text-gray-500 border border-surface-border hover:border-primary/30 hover:text-primary',
            )}
          >
            {cat.key !== 'all' && (
              <span className="mr-1.5">
                {categoryMeta[cat.key as ResourceCategory].emoji}
              </span>
            )}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-400">
        Showing {filtered.length} resource{filtered.length !== 1 ? 's' : ''}
        {activeCategory !== 'all' && ` in ${categoryMeta[activeCategory].label}`}
      </p>

      {/* Resource cards */}
      <div className="grid sm:grid-cols-2 gap-5">
        {filtered.map((resource) => {
          const meta = categoryMeta[resource.category];
          const isSaved = savedIds.has(resource.id);
          return (
            <div
              key={resource.id}
              className="card flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${meta.color}`}
                >
                  {meta.emoji} {meta.label}
                </span>
                <button
                  onClick={() => toggleSave(resource.id)}
                  className={cn(
                    'p-1.5 rounded-lg transition-colors shrink-0',
                    isSaved
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-300 hover:text-primary hover:bg-primary/5',
                  )}
                  title={isSaved ? 'Saved' : 'Save for later'}
                >
                  <Bookmark
                    className="w-4 h-4"
                    fill={isSaved ? 'currentColor' : 'none'}
                  />
                </button>
              </div>

              <h3 className="font-bold text-gray-900 leading-snug mb-2 flex-1">
                {resource.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                {resource.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-surface-subtle text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-surface-border">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {resource.readTime}
                  </span>
                  <span>
                    Ages: {resource.ageRanges.join(', ')}
                  </span>
                </div>
                {resource.isFeatured && (
                  <span className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5" fill="currentColor" />
                    Featured
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="card text-center py-16">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-400 mb-2">
            No resources found
          </h3>
          <p className="text-gray-400 text-sm">
            Try adjusting your search or category filter.
          </p>
        </div>
      )}
    </div>
  );
}
