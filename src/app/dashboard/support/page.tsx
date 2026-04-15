'use client';

import { useState } from 'react';
import { ExternalLink, Filter, MapPin, Phone, Shield, Star } from 'lucide-react';
import { supportProviders } from '@/lib/data';
import { cn } from '@/lib/utils';

const typeLabels: Record<string, { label: string; color: string }> = {
  therapist: { label: 'Therapist', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  'support-group': { label: 'Support Group', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  hotline: { label: 'Hotline', color: 'bg-red-50 text-red-700 border-red-200' },
  respite: { label: 'Respite Care', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  advocacy: { label: 'Advocacy', color: 'bg-amber-50 text-amber-700 border-amber-200' },
};

const filterOptions = [
  { key: 'all', label: 'All services' },
  { key: 'therapist', label: 'Therapists' },
  { key: 'support-group', label: 'Support groups' },
  { key: 'hotline', label: 'Hotlines' },
  { key: 'respite', label: 'Respite care' },
  { key: 'advocacy', label: 'Advocacy' },
];

export default function SupportPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? supportProviders : supportProviders.filter((p) => p.type === activeFilter);

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1 className="page-title">Support Services</h1>
        <p className="page-description">
          Browse credible support options with clear details on fit, location, insurance, and how to
          contact each provider when your family needs another layer of help.
        </p>
      </header>

      <section className="rounded-3xl border border-brand-burgundy-100 bg-brand-burgundy-50/50 p-5">
        <h2 className="section-title">If you are frustrated or close to burnout</h2>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">
          Start with the lowest-friction support first: a helpline, respite option, caregiver
          counselor, or parent support group. You do not have to wait until everything falls apart.
        </p>
      </section>

      <section className="rounded-3xl border border-surface-border bg-white p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-brand-muted-500">{filtered.length} providers shown</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={cn(
                'rounded-xl border px-3.5 py-2 text-sm font-medium',
                activeFilter === opt.key
                  ? 'border-primary bg-primary text-white'
                  : 'border-surface-border bg-white text-brand-muted-600 hover:border-primary/30 hover:text-primary',
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        {filtered.map((provider) => {
          const typeMeta = typeLabels[provider.type];
          return (
            <article key={provider.id} className="card p-5 sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-brand-muted-900">{provider.name}</h3>
                    <span className={`rounded-lg border px-2.5 py-0.5 text-xs font-semibold ${typeMeta.color}`}>{typeMeta.label}</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{provider.specialty}</p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">{provider.description}</p>

                  <div className="mt-4 grid gap-2 text-sm text-brand-muted-500 sm:grid-cols-2">
                    <p className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{provider.location}</p>
                    {provider.phone ? <p className="flex items-center gap-1.5"><Phone className="h-4 w-4" />{provider.phone}</p> : <span />}
                    <p className="flex items-center gap-1.5"><Shield className={cn('h-4 w-4', provider.acceptsInsurance ? 'text-green-600' : 'text-brand-muted-400')} />{provider.acceptsInsurance ? 'Accepts insurance' : 'Private pay / community funded'}</p>
                    <p className="flex items-center gap-1.5"><Star className="h-4 w-4 text-amber-500" fill="currentColor" />{provider.rating} family rating</p>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-2 sm:w-auto">
                  <button className="btn-primary px-4 py-2.5 text-sm">Contact provider <ExternalLink className="h-4 w-4" /></button>
                  <button className="btn-secondary px-4 py-2.5 text-sm">Save for later</button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {filtered.length === 0 && (
        <div className="card py-14 text-center">
          <Filter className="mx-auto h-10 w-10 text-brand-muted-300" />
          <p className="mt-3 text-sm text-brand-muted-500">No providers found for this filter yet.</p>
        </div>
      )}
    </div>
  );
}
