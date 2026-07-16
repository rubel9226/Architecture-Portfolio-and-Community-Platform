'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, User, FolderHeart, UserPen , Bookmark, Settings, LogOut } from 'lucide-react';
import { handleLogout } from '@/api/LoginAndRegister';

const menuItems = [
  { name: 'My Profile', href: '/dashboard/profile', icon: LayoutDashboard },
  { name: 'My Portfolio', href: '/portfolio', icon: User },
  { name: 'My Projects', href: '/dashboard/my-projects', icon: FolderHeart },
  { name: 'Saved Projects', href: '/dashboard/saved', icon: Bookmark },
  { name: 'Edit Profile', href: '/dashboard/edit-profile', icon: UserPen },
  // { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

interface ProfileDropdownProps {
  user: {
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="w-10 aspect-square flex rounded-full  bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 transition-transform active:scale-95"
        aria-label="User Account Menu"
      >
        <img className="h-10 w-10 rounded-full object-cover border border-slate-200 dark:border-slate-700 aspect-square" src={user.avatarUrl} alt={user.name} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-2xl bg-white dark:bg-slate-900 p-2 shadow-xl ring-1 ring-black/5 dark:ring-white/10 z-50 transform transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2.5 border-b border-slate-100 dark:border-slate-800 mb-1">
            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
          </div>
          <div role="menu" aria-orientation="vertical" aria-label="User profile options">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  role="menuitem"
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
                >
                  <Icon className="h-4 w-4 text-slate-400 group-hover:text-slate-600" />
                  {item.name}
                </Link>
              );
            })}
            <hr className="my-1 border-slate-100 dark:border-slate-800" />
            <button
              type="button"
              role="menuitem"
              onClick={() => handleLogout(setLoading)}
              className="flex w-full items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all duration-200"
            >
              
              {
                loading ? <>Please wait...</> : <><LogOut className="h-4 w-4" /> Logout</>
              }
            </button>
          </div>
        </div>
      )}
    </div>
  );
};