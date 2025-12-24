import { LucideIcon } from 'lucide-react';

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
}

export interface ActionLink {
  id: string;
  label: string;
  icon: LucideIcon;
  url: string;
  color?: string;
  primary?: boolean;
}

export interface PropertyData {
  id: string;
  title: string;
  price: string;
  location: string;
  imageUrl: string;
}