import { LucideIcon } from "lucide-react";

export interface TimelineItem {
  id: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  status: 'completed' | 'active' | 'future';
  image?: string;
}

export interface TechSpec {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
}