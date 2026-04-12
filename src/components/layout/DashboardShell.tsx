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
  { href: '/dashboard/next-steps', label: 'Next Steps', icon: Compass },
  { href: '/dashboard/connect', label: 'Connect', icon: Link2 },
  { href: '/dashboard/support', label: 'Support', icon: HandHeart },
  { href: '/dashboard/community', label: 'Community', icon: Users },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="px-6 py-5 border-b border-surface-border">
        <Link
          href="/"
          aria-label="Common Ground — Texas ABA Centers, home"
          className="block min-w-0 space-y-2"
        >
          <TexasAbaLogo decorative className="h-8 w-auto" />
          <span className="block font-display font-bold text-sm text-brand-muted-900 leading-tight">
            Common<span className="text-primary"> Ground</span>
          </span>
        </Link>
      </div>

      {/* Nav — list markup keeps items stacked even if flex/spacing utilities fail */}
      <nav className="flex-1 px-3 py-4 min-h-0 overflow-y-auto" aria-label="Dashboard">
        <ul className="list-none m-0 p-0 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/dashboard' && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors w-full',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-500 hover:bg-surface-subtle hover:text-gray-700',
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Demo badge */}
      <div className="px-4 py-4 border-t border-surface-border">
        <div className="px-3 py-3 rounded-2xl bg-accent/10 text-center">
          <p className="text-xs font-semibold text-accent">Demo Mode</p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            Exploring as a parent
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-surface-muted">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-surface-border fixed inset-y-0 left-0 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-white flex flex-col min-h-0 transition-transform duration-300 lg:hidden',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-surface-subtle"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <SidebarContent />
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-surface-border px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl hover:bg-surface-subtle"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <TexasAbaLogo decorative className="h-7 w-auto shrink-0" />
            <span className="font-display font-bold text-brand-muted-900 truncate min-w-0">
              Common<span className="text-primary"> Ground</span>
            </span>
          </div>
        </header>

        <main className="p-6 sm:p-8 max-w-5xl">{children}</main>
      </div>
    </div>
  );
}
