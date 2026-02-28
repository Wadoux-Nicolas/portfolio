import { Locale } from '@/i18n/routing';
import { Skill } from '@/models/skill';

export interface Project {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  subDescription?: Record<Locale, string>;
  imageSrc: string;
  date: string;
  skills: Skill[];
  url?: string;
  figmaUrl?: string;
  githubUrl?: string;
}