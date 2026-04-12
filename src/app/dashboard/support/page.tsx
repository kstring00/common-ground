'use client';

import { useState } from 'react';
import {
  HandHeart,
  MapPin,
  Phone,
  ExternalLink,
  Star,
  Shield,
  Filter,
} from 'lucide-react';
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
  { key: 'all', label: 'All Services' },
  { key: 'therapist', label: 'Therapists' },
  { key: 'support-group', label: 'Support Groups' },
  { key: 'hotline', label: 'Hotlines' },
  { key: 'respite', label: 'Respite Care' },
  { key: 'advocacy', label: 'Advocacy' },
];

export default function SupportPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? supportProviders
      : supportProviders.filter((p) => p.type === activeFilter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          Support Services
        </h1>
        <p className="text-gray-500">
          Connect with licensed professionals, support groups, and caregiver programs near you.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filterOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setActiveFilter(opt.key)}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium transition-all',
              activeFilter === opt.key
                ? 'bg-primary text-white shadow-soft'
                : 'bg-white text-gray-500 border border-surface-border hover:border-primary/30 hover:text-primary',
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Provider cards */}
      <div className="space-y-4">
        {filtered.map((provider) => {
          const typeMeta = typeLabels[provider.type];
          return (
            <div key={provider.id} className="card">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <HandHeart className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {provider.name}
                    </h3>
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-lg text-xs font-semibold border ${typeMeta.color}`}
                    >
                      {typeMeta.label}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-primary mb-2">
                    {provider.specialty}
                  </p>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {provider.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      {provider.location}
                    </span>
                    {provider.phone && (
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {provider.phone}
                      </span>
                    )}
                    {provider.acceptsInsurance && (
                      <span className="flex items-center gap-1.5 text-green-600">
                        <Shield className="w-4 h-4" />
                        Accepts Insurance
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
                      {provider.rating}
                    </span>
                  </div>
                </div>

                {/* Action */}
                <div className="shrink-0 sm:self-center">
                  <button className="btn-primary text-sm px-5 py-2.5 w-full sm:w-auto">
                    Connect
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="card text-center py-16">
          <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-400">No providers found for this filter.</p>
        </div>
      )}
    </div>
  );
}
