import { SKILLS } from '@/data/skills';
import { Skill } from '@/models/skill';

export const SkillService = {
  getAll: (): Skill[] => {
    return Object.values(SKILLS);
  },
};