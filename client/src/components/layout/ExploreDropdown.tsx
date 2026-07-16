'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Layers, Home, Building, Paintbrush, Compass, Map, GraduationCap } from 'lucide-react';

const categories = [
  { name: 'All Projects', href: '/explore/all', icon: Layers },
  { name: 'Residential', href: '/explore/residential', icon: Home },
  { name: 'Commercial', href: '/explore/commercial', icon: Building },
  { name: 'Interior', href: '/explore/interior', icon: Paintbrush },
  { name: 'Landscape', href: '/explore/landscape', icon: Compass },
  { name: 'Urban Design', href: '/explore/urban', icon: Map },
  { name: 'Thesis', href: '/explore/thesis', icon: GraduationCap },
];

interface ExploreDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ExploreDropdown: React.FC<ExploreDropdownProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, setIsOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  };

  const isCategoryActive = categories.some(cat => pathname === cat.href);

  return (
    <div className="relative inline-block text-left" ref={containerRef} onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`inline-flex items-center gap-1.5 px-1 py-2 text-sm font-medium transition-colors duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
          isOpen || isCategoryActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        Explore
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 origin-top-center rounded-2xl bg-white dark:bg-slate-900 p-2 shadow-xl ring-1 ring-black/5 dark:ring-white/10 z-50 transform transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid gap-1" role="menu" aria-orientation="vertical" aria-label="Explore Categories">
            {categories.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  role="menuitem"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};