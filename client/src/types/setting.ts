// types/setting.ts
import { ComponentType } from 'react';

export type SettingsTabId =
  | 'profile'
  | 'personal'
  | 'account'
  | 'portfolio'
  | 'socials'
  | 'notifications'
  | 'privacy'
  | 'appearance'
  | 'security'
  | 'danger';

export interface SettingsMenuItem {
  id: SettingsTabId;
  title: string;
  iconName: string;
}

export interface SessionDevice {
  id: string;
  device: string;
  location: string;
  ip: string;
  current: boolean;
  lastActive: string;
}