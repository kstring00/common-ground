import { ArrowRight, Calendar, Globe, Heart, MapPin, Users } from 'lucide-react';
import { communityGroups } from '@/lib/data';

const typeConfig: Record<string, { icon: typeof MapPin; color: string; badge: string }> = {
  local: { icon: MapPin, color: 'bg-primary/10 text-primary', badge: 'Local group' },
  online: { icon: Globe, color: 'bg-brand-plum-50 text-brand-plum-700', badge: 'Online community' },
  event: { icon: Calendar, color: 'bg-accent/10 text-accent', badge: 'Upcoming event' },
};

export default function CommunityPage() {
  return (
    <div className="page-shell">
      <header className="page-header">
        <h1 className="page-title">Community</h1>
        <p className="page-description">
          Find belonging with families who understand the day-to-day realities. Join local circles,
          online spaces, and sensory-friendly events that reduce isolation and support steadier
          long-term engagement.
        </p>
      </header>

      <section className="soft-panel">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
            <Heart className="h-5 w-5 text-accent" fill="currentColor" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-brand-muted-900">You belong here</h2>
            <p className="mt-1 text-sm leading-relaxed text-brand-muted-600">
              Caregiver isolation is real. Consistent connection with other parents can lower stress
              and increase confidence in navigating services, school systems, and hard seasons at
              home.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {communityGroups.map((group) => {
          const config = typeConfig[group.type];
          const Icon = config.icon;
          return (
            <article key={group.id} className="card flex h-full flex-col p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${config.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="rounded-lg border border-surface-border bg-surface-muted px-2.5 py-1 text-xs font-semibold text-brand-muted-500">
                  {config.badge}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-brand-muted-900">{group.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted-600">{group.description}</p>

              <div className="mt-4 space-y-2 text-sm text-brand-muted-500">
                <p className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{group.location}</p>
                <p className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{group.meetingSchedule}</p>
                <p className="flex items-center gap-1.5"><Users className="h-4 w-4" />{group.memberCount} active members</p>
              </div>

              <button className="btn-secondary mt-5 w-full py-2.5 text-sm">
                Learn more <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          );
        })}
      </section>
    </div>
  );
}
