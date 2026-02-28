import { PROJECTS } from '@/data/projects';
import { Project } from '@/models/project';
import { Skill, SkillCategory } from '@/models/skill';

export const ProjectService = {
  getAll: (): Project[] => {
    return PROJECTS;
  },
  getAllByCategory: (category: SkillCategory): Project[] => {
    return PROJECTS.filter((project: Project): boolean => {
      return project.skills.some((skill: Skill): boolean => skill.mainCategory === category);
    });
  },
};