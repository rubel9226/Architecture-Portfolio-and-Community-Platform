'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Menu, Plus } from 'lucide-react';

import { Logo } from '../ui/Logo'; 
import { ProfileDropdown } from './ProfileDropdown';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  session: {
    session: any;
    user: {
      name: string;
      email: string;
      image?: string | null;
      id?: string | null
      [key: string]: any;
    };
  } | null;
}

export const Navbar: React.FC<NavbarProps> = ({session}) => {

  const pathname = usePathname();  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock Authentication State
  const isLoggedIn = !!session?.user;
  const mockUser = {
    name: session?.user?.name || '',
    email: session?.user?.email || '',
    avatarUrl: session?.user?.image || '',
    id: session?.user?.id
  }; 

  const isLinkActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-20 flex items-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b transition-all duration-300 border-transparent
        `}
      >
        <div className="w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left Area */}
          <div className="flex items-center gap-8">
            <Logo />
            <nav className="hidden lg:flex items-center gap-6" aria-label="Global Desktop Navigation">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5 ${
                  isLinkActive('/') ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link
                href="/dashboard/my-projects"
                className={`text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5 ${
                  isLinkActive('/dashboard/my-projects') ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                My Projects
              </Link>
              <Link
                href="/projects"
                className={`text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5 ${
                  isLinkActive('/dashboard/public-projects') ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Public Projects
              </Link>
              <Link
                href="/dashboard/add-projects"
                className={`text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5 ${
                  isLinkActive('/dashboard/add-projects') ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Add Projects
              </Link>
            </nav>
          </div>

          {/* Right Action Stack */}
          <div className="hidden lg:flex items-center gap-4">
            {/* <SearchInput />
            <ThemeToggle />
             */}
            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
                  aria-label="View notifications"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2.5 right-2.5 d-block h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white dark:ring-slate-900" />
                </button>
                <Link
                  href="/dashboard/add-projects"
                  className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-sm hover:shadow-md hover:shadow-blue-600/10 active:scale-95 transition-all duration-300"
                >
                  <Plus className="h-4 w-4" />
                  <span className='whitespace-nowrap'>Create Project</span>
                </Link>
                <ProfileDropdown user={mockUser} />
              </>
            ) : (
              <div className="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-800">
                <Link 
                  href="/login" 
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 transition-colors"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="h-10 px-5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-sm transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Right Block controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Open global mobile panel navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </header>
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        isLoggedIn={isLoggedIn}
        user={mockUser}
      />

    </>
  );
};