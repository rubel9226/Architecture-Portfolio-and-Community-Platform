'use client';

import React from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

export const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Subscribing email:', formData.get('email'));
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Top 5-Column Content Hub */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Info Branding Summary */}
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              The premier showcase platform designed exclusively for architecture students and professionals to design, build, and share interactive portfolios.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebook, label: 'Facebook', href: '#' },
                { icon: FaTwitter, label: 'Twitter', href: '#' },
                { icon: FaInstagram, label: 'Instagram', href: '#' },
                { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
                { icon: FaGithub, label: 'GitHub', href: '#' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Explore Mapping Layout */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase">Explore</h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: 'Home', href: '/' },
                { label: 'Projects', href: '/explore/all' },
                { label: 'Students', href: '/students' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Category Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase">Categories</h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: 'Residential', href: '/explore/residential' },
                { label: 'Commercial', href: '/explore/commercial' },
                { label: 'Interior', href: '/explore/interior' },
                { label: 'Landscape', href: '/explore/landscape' },
                { label: 'Thesis', href: '/explore/thesis' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Document and Support Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase">Resources</h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: 'Help Center', href: '/support' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms & Conditions', href: '/terms' },
                { label: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter Input Panel Layout */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wider uppercase">Newsletter</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Stay ahead with design deep dives and trending academic design portfolios.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2 flex flex-col gap-2">
              <div className="relative">
                <label htmlFor="footer-email" className="sr-only">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="footer-email"
                  required
                  placeholder="Enter your email"
                  className="w-full h-10 pl-3.5 pr-10 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} ArchiFolio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-orange-500 text-sm animate-pulse">❤️</span> for Architecture Students
          </p>
        </div>
      </div>
    </footer>
  );
};