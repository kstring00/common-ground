import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Compass,
  Flag,
  HandHeart,
  Heart,
  Link2,
  Sparkles,
  Star,
  Target,
  Users,
} from 'lucide-react';
import { categoryMeta, resources } from '@/lib/data';

const portalAreas = [
  {
    href: '/dashboard/next-steps',
    icon: Compass,
    title: 'Guided Next Steps',
    description: 'The clearest first move when families need structure, priorities, and a realistic plan.',
    tone: 'bg-primary/10 text-primary',
  },
  {
    href: '/dashboard/connect',
    icon: Link2,
    title: 'Connect',
    description: 'Parent-to-parent support when families need someone who understands the stage they are in.',
    tone: 'bg-accent/10 text-accent',
  },
  {
    href: '/dashboard/resources',
    icon: BookOpen,
    title: 'Resources',
    description: 'Practical reading, scripts, and guidance that help families decide what to do next.',
    tone: 'bg-brand-plum-50 text-brand-plum-700',
  },
  {
    href: '/dashboard/support',
    icon: HandHeart,
    title: 'Support Services',
    description: 'Credible support options when the family needs another layer of help quickly.',
    tone: 'bg-brand-purple-50 text-brand-purple-700',
  },
  {
    href: '/dashboard/community',
    icon: Users,
    title: 'Community',
    description: 'Local and online spaces that reduce isolation and make the journey more sustainable.',
    tone: 'bg-brand-burgundy-50 text-brand-burgundy-700',
  },
];

const focusAreas = [
  {
    icon: Flag,
    label: 'Current stage',
    value: 'Just diagnosed',
    detail: 'First 30 days: stabilize, understand the report, and choose the next 2-3 priorities.',
  },
  {
    icon: Target,
    label: 'Next milestone',
    value: 'Build a 30-90 day plan',
    detail: 'Align therapy, school, insurance, and family support around realistic goals.',
  },
  {
    icon: HandHeart,
    label: 'Family safeguard',
    value: 'Reduce burnout early',
    detail: 'When stress spikes, simplify the plan and reach for support before disengagement starts.',
  },
];

const featuredResources = resources.filter((r) => r.isFeatured).slice(0, 3);

export default function DashboardHome() {
  return (
    <div className="page-shell">
      <section className="relative overflow-hidden rounded-3xl gradient-navy p-7 text-white sm:p-10">
        <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90">
              <Heart className="h-3.5 w-3.5" fill="currentColor" /> Parent portal home base
            </span>
            <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Your family&apos;s navigation system from diagnosis toward independence
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              If today feels heavy, start with Guided Next Steps. Then use the rest of the portal to
              keep the plan supported, organized, and sustainable without carrying it all alone.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard/next-steps" className="btn-primary bg-white text-primary hover:bg-white/90">
                Start Here <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/dashboard/support" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/15">
                Find support now
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Family journey snapshot</p>
            <div className="mt-4 space-y-3">
              {focusAreas.map((area) => (
                <div key={area.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                      <area.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/65">{area.label}</p>
                      <h2 className="mt-1 text-sm font-semibold text-white sm:text-base">{area.value}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">{area.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="section-title">Start Here, then use the whole system</h2>
            <p className="mt-1 text-sm text-brand-muted-500">
              Guided Next Steps is usually the first move, but the full portal is built for a parent
              who needs guidance, support, and a clearer path forward.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {portalAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group card flex h-full items-start gap-4 border-surface-border p-5"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${area.tone}`}>
                <area.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="flex items-center gap-1.5 text-sm font-semibold text-brand-muted-900 sm:text-base">
                  {area.title}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted-500">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-3xl border border-surface-border bg-white p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="section-title flex items-center gap-2">
              <Sparkles className="h-4.5 w-4.5 text-accent" /> Recommended reading for this stage
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
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-brand-muted-500">{resource.description}</p>
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

        <aside className="space-y-5">
          <div className="soft-panel">
            <h3 className="text-base font-semibold text-brand-muted-900">A steady plan for today</h3>
            <ol className="mt-4 space-y-3 text-sm text-brand-muted-600">
              {[
                'Complete one item in Guided Next Steps.',
                'Save one resource that answers your biggest current question.',
                'Reach out for one layer of support before the week gets heavier.',
              ].map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-brand-burgundy-100 bg-brand-burgundy-50/50 p-5">
            <h3 className="text-base font-semibold text-brand-muted-900">If you are at your limit</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted-600">
              Start with the smallest stabilizing action: contact a support service, message another
              parent, or pause the plan long enough to decide what can wait. You do not have to solve
              everything today.
            </p>
            <Link href="/dashboard/support" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Open support options <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
