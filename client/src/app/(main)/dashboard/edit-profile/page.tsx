// app/settings/page.tsx
'use client';
import { useState, useEffect, startTransition } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { settingsMenu } from '@/data/settingsMenu';



import ProfileSettings from '@/components/settings/ProfileSettings';
import PersonalInformation from '@/components/settings/PersonalInformation';
import AccountSettings from '@/components/settings/AccountSettings';
import PasswordSettings from '@/components/settings/PasswordSettings';
import PortfolioSettings from '@/components/settings/PortfolioSettings';
import SocialLinks from '@/components/settings/SocialLinks';
import NotificationSettings from '@/components/settings/NotificationSettings';
import PrivacySettings from '@/components/settings/PrivacySettings';
import AppearanceSettings from '@/components/settings/AppearanceSettings';
import SecuritySettings from '@/components/settings/SecuritySettings';
import DangerZone from '@/components/settings/DangerZone';
import SettingsSidebar from '@/components/settings/SettingsSidebar';
import SettingsSkeleton from '@/components/settings/SettingsSkeleton';
import SaveChangesBar from '@/components/settings/SaveChangesBar'; 
import { SettingsTabId } from '@/types';




export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<SettingsTabId>('profile');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const handleTabChange = (tab: SettingsTabId) => {
        setLoading(true);
        startTransition(() => {
            setActiveTab(tab);
        });
    };

    const renderActiveSection = () => {
        switch (activeTab) {
        case 'profile': return <ProfileSettings />;
        case 'personal': return <PersonalInformation />;
        case 'account': return <><AccountSettings /><div className="mt-6"><PasswordSettings /></div></>;
        case 'portfolio': return <PortfolioSettings />;
        case 'socials': return <SocialLinks />;
        case 'notifications': return <NotificationSettings />;
        case 'privacy': return <PrivacySettings />;
        case 'appearance': return <AppearanceSettings />;
        case 'security': return <SecuritySettings />;
        case 'danger': return <DangerZone />;
        default: return <ProfileSettings />;
        }
    };

    const activeMenuTitle = settingsMenu.find(m => m.id === activeTab)?.title || 'Settings';

    return (
        <main className="min-h-screen bg-zinc-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased selection:bg-blue-500/10 transition-colors duration-200">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
                
                <header className="space-y-1.5 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                    <h1 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">Workspace Configuration</h1>
                    <p className="text-xs text-zinc-400 font-light">Manage account access keys, global brand distribution, and operational matrices.</p>
                </header>

                {/* Configuration Split Layout Grid */}
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* Navigation Control Column */}
                    <SettingsSidebar activeTab={activeTab} setActiveTab={handleTabChange} />

                    {/* Dynamic Content Pane Area */}
                    <div className="flex-1 w-full min-w-0">
                        {/* Mobile / Tablet Accordion Title Header Element */}
                        <div className="lg:hidden mb-4 px-1">
                            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{activeMenuTitle}</h2>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab + (loading ? '-loading' : '-ready')}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {loading ? <SettingsSkeleton /> : renderActiveSection()}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div> 

            <SaveChangesBar visible={!loading && activeTab !== 'danger'} />
        </main>
    );
}