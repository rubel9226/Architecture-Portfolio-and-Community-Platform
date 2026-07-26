'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, LogIn, UserPlus, LogOut, Search } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { handleLogout } from '@/api/LoginAndRegister';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  user?: {
    id?: string | null;
    name: string;
    avatarUrl: string;
  };
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, isLoggedIn, user }) => {
  const pathname = usePathname();
  const [exploreOpen, setExploreOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const mainNav = [
    { name: 'Home', href: '/' },
    { name: 'My Projects', href: '/dashboard/my-projects' },
    { name: 'Create Project', href: '/dashboard/add-projects' },
    { name: 'Public Projects', href: '/projects' },
    { name: 'My Portfolio', href: `/portfolio/${user?.id}` },
    { name: 'Create Portfolio', href: '/dashboard/portfolio' },
  ];
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <div 
      className={`fixed inset-0 z-50 lg:hidden transition-visibility duration-300 ${isOpen ? 'visible' : 'invisible'}`}
      role="dialog" 
      aria-modal="true"
    >
      {/* Backdrop fading overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose} 
      />

      {/* Sliding sheet */}
      <nav className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-slate-900 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header section */}
        <div className="flex h-20 items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Scalable Container for Search and Navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {/* Internal Search bar built for Mobile layouts */}
          {/* <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search platform..." 
              className="w-full h-10 pl-9 pr-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
            />
          </div> */}

          <div className="flex flex-col gap-1">
            <Link 
              href="/" 
              className={`px-3 py-2.5 rounded-xl font-medium text-base transition-colors ${pathname === '/' ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'}`}
            >
              Home
            </Link>

            {mainNav.slice(1).map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className={`px-3 py-2.5 rounded-xl font-medium text-base transition-colors ${pathname === item.href ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Footprint/Account area */}
        <div className="border-t border-slate-100 dark:border-slate-800 p-6 bg-slate-50 dark:bg-slate-900/50">
          {/* <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500">Interface Theme</span>
            <ThemeToggle />
          </div> */}

          {isLoggedIn && user ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {/* <img src={user.avatarUrl} alt={user.name} className="h-10 w-10 rounded-full object-cover" /> */}
                <div className="h-10 w-10 rounded-full object-cover bg-purple-700 text-center content-center text-xl font-semibold">
                  {user?.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{user.name}</h4>
                  <Link href="/portfolio" className="text-xs text-blue-600 hover:underline">View Portfolio</Link>
                </div>
              </div>
              <button 
                type="button"
                className="flex w-full items-center justify-center gap-2 h-11 rounded-full bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400 font-medium text-sm"
                onClick={() => handleLogout(setLoading)}
                disabled={loading}
              >
                {loading ? (
                  <>Please wait...</>
                ) : (
                  <>
                    <LogOut className="h-4 w-4" /> Sign Out
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Link 
                href="/login" 
                className="flex items-center justify-center gap-2 h-11 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <LogIn className="h-4 w-4" /> Login
              </Link>
              <Link 
                href="/register" 
                className="flex items-center justify-center gap-2 h-11 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/10"
              >
                <UserPlus className="h-4 w-4" /> Register
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};