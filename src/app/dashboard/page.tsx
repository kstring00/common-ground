import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Compass,
  HandHeart,
  Heart,
  Link2,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { categoryMeta, resources } from '@/lib/data';

const quickActions = [
  {
    href: '/dashboard/resources',
    icon: BookOpen,
    title: 'Browse Resources',
    description: 'Find trusted articles, checklists, and scripts for this stage.',
    tone: 'bg-primary/10 text-primary',
  },
  {
    href: '/dashboard/next-steps',
    icon: Compass,
    title: 'Follow Guided Next Steps',
    description: 'Move forward with one focused checklist at a time.',
    tone: 'bg-brand-plum-50 text-brand-plum-700',
  },
  {
    href: '/dashboard/connect',
    icon: Link2,
    title: 'Connect with a Parent',
    description: 'Safe peer matching with privacy-first guidelines.',
    tone: 'bg-accent/10 text-accent',
  },
  {
    href: '/dashboard/support',
    icon: HandHeart,
    title: 'Find Support Services',
    description: 'Compare therapists, groups, and advocacy support nearby.',
    tone: 'bg-brand-purple-50 text-brand-purple-700',
  },
  {
    href: '/dashboard/community',
    icon: Users,
    title: 'Explore Community',
    description: 'Discover local groups and events where families belong.',
    tone: 'bg-brand-burgundy-50 text-brand-burgundy-700',
  },
];

const featuredResources = resources.filter((r) => r.isFeatured).slice(0, 3);

export default function DashboardHome() {
  return (
    <div className="page-shell">
      <section className="relative overflow-hidden rounded-3xl gradient-navy p-7 text-white sm:p-10">
        <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
        <div className="relative space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90">
            <Heart className="h-3.5 w-3.5" fill="currentColor" /> Parent dashboard
          </span>
          <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">Welcome back. Let&apos;s make today easier.</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            This is your home base for resources, support, and next steps. Pick one area to focus on
            right now — you can always come back for the rest.
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="section-title">Where would you like to start?</h2>
            <p className="mt-1 text-sm text-brand-muted-500">Choose the action that feels most urgent today.</p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.href} href={action.href} className="group card flex h-full items-start gap-4 p-5">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${action.tone}`}>
                <action.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="flex items-center gap-1.5 text-sm font-semibold text-brand-muted-900 sm:text-base">
                  {action.title}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted-500">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="section-title flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-accent" /> Featured resources
            </h2>
            <Link href="/dashboard/resources" className="text-sm font-semibold text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {featuredResources.map((resource) => {
              const meta = categoryMeta[resource.category];
              return (
                <article key={resource.id} className="rounded-2xl border border-surface-border bg-surface-muted p-4">
                  <span className={`inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-semibold ${meta.color}`}>
                    {meta.emoji} {meta.label}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold leading-snug text-brand-muted-900">{resource.title}</h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-brand-muted-500">{resource.description}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-brand-muted-400">
                    <span>{resource.readTime} read</span>
                    <span className="inline-flex items-center gap-1 text-amber-600">
                      <Star className="h-3.5 w-3.5" fill="currentColor" /> Featured
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="soft-panel">
          <h3 className="text-base font-semibold text-brand-muted-900">Today&apos;s suggested rhythm</h3>
          <ol className="mt-4 space-y-3 text-sm text-brand-muted-600">
            {[
              'Read one short resource that helps with your current challenge.',
              'Complete one checklist item in Guided Next Steps.',
              'Reach out to one parent or service for support this week.',
            ].map((item, i) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </div>
  );
}
