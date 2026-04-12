import Link from 'next/link';
import {
  BookOpen,
  HandHeart,
  Users,
  Compass,
  Link2,
  ArrowRight,
  Sparkles,
  Heart,
  Star,
} from 'lucide-react';
import { resources, categoryMeta } from '@/lib/data';

const quickActions = [
  {
    href: '/dashboard/resources',
    icon: BookOpen,
    title: 'Browse Resources',
    description: 'Articles, guides, and tools for every stage of the journey.',
    color: 'bg-primary/10 text-primary',
  },
  {
    href: '/dashboard/next-steps',
    icon: Compass,
    title: 'Guided Next Steps',
    description: 'Clear pathways for diagnosis, therapy, school, and self-care.',
    color: 'bg-accent/10 text-accent',
  },
  {
    href: '/dashboard/connect',
    icon: Link2,
    title: 'Find a Parent Match',
    description: 'Get matched with a parent who understands your journey.',
    color: 'bg-brand-red-500/10 text-brand-red-500',
  },
  {
    href: '/dashboard/support',
    icon: HandHeart,
    title: 'Find Support',
    description: 'Therapists, respite care, hotlines, and advocacy near you.',
    color: 'bg-brand-purple-500/10 text-brand-purple-500',
  },
  {
    href: '/dashboard/community',
    icon: Users,
    title: 'Join Community',
    description: 'Local groups, online forums, and family-friendly events.',
    color: 'bg-brand-burgundy-500/10 text-brand-burgundy-500',
  },
];

const featuredResources = resources.filter((r) => r.isFeatured).slice(0, 3);

export default function DashboardHome() {
  return (
    <div className="space-y-10">
      {/* Welcome */}
      <div className="relative overflow-hidden rounded-3xl gradient-navy p-8 sm:p-10 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5" fill="currentColor" />
            <span className="text-sm font-semibold text-white/80">Common Ground</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Welcome, Parent
          </h1>
          <p className="text-white/70 max-w-lg text-base">
            Everything here is built around one idea: you shouldn&apos;t have to
            figure this out alone. Explore resources, find support, and connect
            with your community.
          </p>
        </div>
      </div>

      {/* Quick actions */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Where would you like to start?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="card group hover:translate-y-[-2px] transition-all duration-300 flex gap-4"
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${action.color}`}
              >
                <action.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center gap-1">
                  {action.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-500 text-sm mt-0.5">
                  {action.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured resources */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Featured Resources
          </h2>
          <Link
            href="/dashboard/resources"
            className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {featuredResources.map((resource) => {
            const meta = categoryMeta[resource.category];
            return (
              <div key={resource.id} className="card flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${meta.color}`}
                  >
                    {meta.emoji} {meta.label}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 flex-1">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{resource.readTime} read</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
                    <span>Featured</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
