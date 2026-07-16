export interface StatItem {
    value: string;
    label: string;
}

export interface SocialProvider {
    id: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
} 

export interface OptionItem {
  value: string;
  label: string;
}