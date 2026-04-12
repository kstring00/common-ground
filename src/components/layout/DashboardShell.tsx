'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Heart,
  LayoutDashboard,
  BookOpen,
  HandHeart,
  Users,
  Compass,
  Link2,
  Menu,
  X,
} from 'lucide-react';
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
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl gradient-navy flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-lg text-gray-900">
            Common<span className="text-primary"> Ground</span>
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== '/dashboard' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-500 hover:bg-surface-subtle hover:text-gray-700',
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
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
      <aside className="hidden lg:flex lg:w-64 flex-col bg-white border-r border-surface-border fixed inset-y-0 left-0 z-30">
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
          'fixed inset-y-0 left-0 z-50 w-64 bg-white flex flex-col transition-transform duration-300 lg:hidden',
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
          <span className="font-display font-bold text-gray-900">
            Common<span className="text-primary"> Ground</span>
          </span>
        </header>

        <main className="p-6 sm:p-8 max-w-5xl">{children}</main>
      </div>
    </div>
  );
}
