import React from 'react';
import Link from 'next/link';
import { Building2 } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 transition-transform active:scale-95 ${className}`}
      aria-label="ArchiFolio Home"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
        <Building2 className="h-5 w-5" aria-hidden="true" />
      </div>
      <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        Archi<span className="text-blue-600">Folio</span>
      </span>
    </Link>
  );
};