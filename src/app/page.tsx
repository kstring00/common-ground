import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Compass,
  HandHeart,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { TexasAbaLogo } from '@/components/brand/TexasAbaLogo';

const features = [
  {
    icon: BookOpen,
    title: 'Trusted Resource Library',
    description:
      'Curated articles, scripts, and practical guides written for real family life — not just clinical language.',
  },
  {
    icon: Compass,
    title: 'Guided Next Steps',
    description:
      'Structured checklists for diagnosis, therapy, school planning, and parent well-being so you can focus on what matters now.',
  },
  {
    icon: HandHeart,
    title: 'Support Services Directory',
    description:
      'Browse vetted providers with clear details on location, insurance, fit, and how to contact them quickly.',
  },
  {
    icon: Users,
    title: 'Safe Parent Connection',
    description:
      'Connect with other parents through moderated peer matching, conversation prompts, and community spaces.',
  },
];

const stats = [
  { value: '1 in 36', label: 'children identified with autism in the U.S.' },
  { value: '70%', label: 'of caregivers report high ongoing stress' },
  { value: '<30%', label: 'of families access all services they qualify for' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-surface-border/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Common Ground home">
            <TexasAbaLogo priority decorative className="h-7 w-auto sm:h-9" />
            <span className="border-l border-surface-border pl-3 font-display text-base font-bold text-brand-muted-900 sm:text-lg">
              Common<span className="text-primary"> Ground</span>
            </span>
          </Link>
          <Link href="/dashboard" className="btn-primary px-5 py-2.5">
            Explore Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
        <div className="absolute inset-0 gradient-warm" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-16 bottom-4 h-80 w-80 rounded-full bg-brand-plum-100/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="pill mb-6 bg-white/85">
              <Heart className="h-3.5 w-3.5 text-accent" /> You are not alone in this
            </span>
            <h1 className="text-balance text-4xl font-bold leading-tight text-brand-muted-900 sm:text-5xl md:text-6xl">
              Calm, practical support for
              <span className="text-primary"> autism families</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-muted-600 sm:text-lg">
              Common Ground brings trusted resources, guided action plans, parent connection, and
              support services into one organized place — so families can take the next step with
              confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard" className="btn-primary">
                Start the tour <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#why-it-matters" className="btn-secondary">
                Why this matters
              </Link>
            </div>
          </div>
          <div className="soft-panel">
            <div className="flex items-center gap-3 border-b border-surface-border pb-4">
              <TexasAbaLogo decorative className="h-8 w-auto" />
              <p className="text-sm font-semibold text-brand-muted-700">Designed for overwhelmed days</p>
            </div>
            <ul className="mt-5 space-y-4 text-sm text-brand-muted-700">
              {[
                'Know exactly what to do after a diagnosis.',
                'Find providers and community with clear trust signals.',
                'Save resources and return when you have bandwidth.',
                'Get support without sharing private child details.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="why-it-matters" className="border-y border-surface-border bg-white px-6 py-12 sm:py-14">
        <div className="mx-auto grid max-w-5xl gap-5 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-surface-border bg-surface-muted px-4 py-5">
              <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-brand-muted-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="pill mb-4 bg-white">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> What you can do here
            </span>
            <h2 className="text-3xl font-bold text-brand-muted-900 sm:text-4xl">From overwhelm to next step</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <article key={feature.title} className="card p-7">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-brand-muted-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted-600 sm:text-base">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold text-brand-muted-900 sm:text-4xl">
            Built for the parent who is carrying a lot
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted-600 sm:text-lg">
            The appointments, school emails, paperwork, and hard nights are real. Common Ground is
            designed to reduce decision fatigue with a calmer, clearer path forward.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl gradient-navy p-10 text-center text-white sm:p-14">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to explore Common Ground?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80 sm:text-lg">
            See the full product demo across dashboard, resources, guided next steps, connection,
            support services, and community.
          </p>
          <Link
            href="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3 font-semibold text-primary shadow-soft transition hover:bg-white/90"
          >
            Open the dashboard <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
