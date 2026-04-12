import Link from 'next/link';
import {
  Heart,
  Users,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Compass,
  HandHeart,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Trusted Resources',
    description:
      'Curated, evidence-based articles and guides personalized to your child\'s age, diagnosis stage, and your family\'s needs.',
  },
  {
    icon: Compass,
    title: 'Guided Next Steps',
    description:
      'Structured pathways that walk you through what to do after diagnosis, starting therapy, school transitions, and more.',
  },
  {
    icon: HandHeart,
    title: 'Support Services',
    description:
      'Get connected to licensed therapists, respite care, advocacy services, and caregiver support programs.',
  },
  {
    icon: Users,
    title: 'Community',
    description:
      'Find local groups, online communities, and family events with people who truly understand your journey.',
  },
];

const stats = [
  { value: '1 in 36', label: 'children diagnosed with autism' },
  { value: '70%', label: 'of autism caregivers report significant stress' },
  { value: '< 30%', label: 'of families access available support services' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-surface-border">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-navy flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-xl text-gray-900">
              Common<span className="text-primary"> Ground</span>
            </span>
          </Link>
          <Link href="/dashboard" className="btn-primary text-sm px-5 py-2.5">
            Explore the App
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-warm opacity-60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            You&apos;re not alone in this
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] text-balance mb-6">
            Support built for{' '}
            <span className="text-primary">autism families</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 text-balance">
            Find community, access trusted resources, and get connected to the
            mental health and support services your family deserves.
          </p>
          <Link href="/dashboard" className="btn-primary text-base px-8 py-4">
            Explore the Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-12 px-6 bg-white border-y border-surface-border">
        <div className="mx-auto max-w-4xl grid grid-cols-3 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-extrabold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-20 px-6 bg-surface-muted">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              What Common Ground Offers
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything your family needs, in one place
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Built by people who understand the autism journey — for people living it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Empathy section ─── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Built for the parent who Googles at midnight
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            The one juggling therapy appointments, IEP meetings, insurance calls,
            and bedtime meltdowns — while wondering if they&apos;re doing enough.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Common Ground brings everything into one calm, organized space so you can
            spend less time searching and more time being present.
          </p>
          <Link href="/dashboard" className="btn-secondary text-base px-8 py-4">
            See How It Works
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl gradient-navy rounded-3xl p-10 sm:p-16 text-center text-white">
          <ShieldCheck className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to feel supported?
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Explore the full demo and see how Common Ground can transform
            your family&apos;s support system.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-bold text-base hover:bg-white/90 transition-colors shadow-lg"
          >
            Explore the App
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-surface-border py-10 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-navy flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <span className="font-display font-bold text-gray-900">
              Common<span className="text-primary"> Ground</span>
            </span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Common Ground. A concept by Texas ABA Centers.
          </p>
        </div>
      </footer>
    </main>
  );
}
