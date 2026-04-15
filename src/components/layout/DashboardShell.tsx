'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  HandHeart,
  Users,
  Compass,
  Link2,
  Menu,
  X,
} from 'lucide-react';
import { TexasAbaLogo } from '@/components/brand/TexasAbaLogo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', label: 'Home', icon: LayoutDashboard },
  { href: '/dashboard/resources', label: 'Resources', icon: BookOpen },
  { href: '/dashboard/next-steps', label: 'Guided Next Steps', icon: Compass },
  { href: '/dashboard/connect', label: 'Connect', icon: Link2 },
  { href: '/dashboard/support', label: 'Support', icon: HandHeart },
  { href: '/dashboard/community', label: 'Community', icon: Users },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="border-b border-surface-border px-6 py-5">
        <Link href="/" aria-label="Common Ground home" className="block min-w-0 space-y-2">
          <TexasAbaLogo decorative className="h-8 w-auto" />
          <span className="block font-display text-sm font-bold leading-tight text-brand-muted-900">
            Common<span className="text-primary"> Ground</span>
          </span>
        </Link>
      </div>

      <nav className="min-h-0 flex-1 overflow-y-auto px-3 py-4" aria-label="Dashboard">
        <ul className="m-0 flex list-none flex-col gap-1 p-0">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                    isActive
                      ? 'bg-primary text-white shadow-soft'
                      : 'text-brand-muted-600 hover:bg-surface-subtle hover:text-brand-muted-900',
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-surface-border px-4 py-4">
        <div className="rounded-2xl border border-primary/15 bg-primary/5 px-3 py-3 text-center">
          <p className="text-xs font-semibold text-primary">Start with Guided Next Steps</p>
          <p className="mt-0.5 text-[11px] text-brand-muted-500">Keep the next move simple</p>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-brand-warm-50 via-surface-muted to-surface-muted">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-surface-border bg-white lg:flex">
        <SidebarContent />
      </aside>

      {sidebarOpen && <div className="fixed inset-0 z-40 bg-black/35 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex min-h-0 w-64 flex-col bg-white transition-transform duration-300 lg:hidden',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <button onClick={() => setSidebarOpen(false)} className="absolute right-4 top-4 rounded-lg p-1 hover:bg-surface-subtle">
          <X className="h-5 w-5 text-brand-muted-500" />
        </button>
        <SidebarContent />
      </aside>

      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-20 border-b border-surface-border/70 bg-white/85 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <button onClick={() => setSidebarOpen(true)} className="rounded-xl p-2 hover:bg-surface-subtle lg:hidden">
              <Menu className="h-5 w-5 text-brand-muted-600" />
            </button>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted-400">Common Ground</p>
              <p className="truncate text-sm text-brand-muted-700">Parent Navigation System</p>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
