import {
  Users,
  MapPin,
  Calendar,
  Globe,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { communityGroups } from '@/lib/data';

const typeConfig: Record<string, { icon: typeof MapPin; color: string; badge: string }> = {
  local: {
    icon: MapPin,
    color: 'bg-primary/10 text-primary',
    badge: 'Local Group',
  },
  online: {
    icon: Globe,
    color: 'bg-blue-50 text-blue-600',
    badge: 'Online Community',
  },
  event: {
    icon: Calendar,
    color: 'bg-accent/10 text-accent',
    badge: 'Upcoming Event',
  },
};

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          Community
        </h1>
        <p className="text-gray-500">
          Connect with families who understand your journey. Local groups, online
          communities, and family-friendly events.
        </p>
      </div>

      {/* Encourage banner */}
      <div className="card gradient-warm border-brand-warm-400/30">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 text-accent" fill="currentColor" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">
              You belong here
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Research shows that connecting with other autism families significantly
              reduces caregiver stress and improves outcomes for the whole family.
              You don&apos;t have to do this alone.
            </p>
          </div>
        </div>
      </div>

      {/* Group cards */}
      <div className="grid sm:grid-cols-2 gap-5">
        {communityGroups.map((group) => {
          const config = typeConfig[group.type];
          const Icon = config.icon;
          return (
            <div key={group.id} className="card flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${config.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-400 bg-surface-subtle px-2.5 py-1 rounded-lg">
                  {config.badge}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-1">
                {group.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {group.description}
              </p>

              <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {group.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {group.meetingSchedule}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-gray-400" />
                  {group.memberCount} members
                </span>
              </div>

              <button className="btn-secondary text-sm py-2.5 w-full">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
