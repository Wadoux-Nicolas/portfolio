import { Locale } from '@/i18n/routing';

export interface Skill {
  name: Record<Locale, string>
  level: SkillLevel;
  mainCategory: SkillCategory
}

export type SkillLevel = 'knowledge' | 'intermediate' | 'advanced';
export type SkillCategory = 'web' | 'mobile' | 'database' | 'other';