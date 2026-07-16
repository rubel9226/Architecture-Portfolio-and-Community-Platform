// data/settingsMenu.ts
import { SettingsMenuItem } from '@/types/setting';

export const settingsMenu: SettingsMenuItem[] = [
  { id: 'profile', title: 'Profile Settings', iconName: 'User' },
  { id: 'personal', title: 'Personal Information', iconName: 'Building2' },
  { id: 'account', title: 'Account Settings', iconName: 'Settings' },
  { id: 'portfolio', title: 'Portfolio Display', iconName: 'Globe' },
  { id: 'socials', title: 'Social Integration', iconName: 'Link' },
  { id: 'notifications', title: 'Notifications', iconName: 'Bell' },
  { id: 'privacy', title: 'Privacy & Access', iconName: 'Eye' },
  { id: 'appearance', title: 'Appearance & System', iconName: 'Palette' },
  { id: 'security', title: 'Security & Access', iconName: 'Shield' },
  { id: 'danger', title: 'Danger Zone', iconName: 'Trash2' },
];