import Title from '@/components/atoms/title/title';
import { useLocale, useTranslations } from 'next-intl';
import { ProjectService } from '@/services/project';
import Tag from '@/components/atoms/tag/tag';

export default function Skills() {
  const translate = useTranslations();
  const locale = useLocale();

  // todo composant
  // todo img + refaire les screens sans bords ronds
  // todo should description handle html rendered here ?
  const projects = ProjectService.getAll();

  return (
    <section
      id={translate('Navigation.Slugs.skills')}
      aria-label={translate('Navigation.skills')}
      className="min-h-dvh p-4 md:p-8 gap-8 md:gap-16 flex flex-col max-w-7xl mx-auto"
    >
      <Title
        as='h2'
      >
        {translate('Navigation.skills')}
      </Title>

      {projects.map((project) => (
        <div
          key={project.title[locale]}
          className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
        >
          <img
            src={project.imageSrc}
            alt={project.title[locale]}
            className="w-full md:w-48 h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">
              {project.title[locale]}
            </h3>
            {project.description[locale].split('\n').map((line, index) => (
              line ? <p key={index}>{line}</p> : null
            ))}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.skills.map((skill, skillIndex) => (
                <Tag
                  key={skillIndex}
                >
                  {skill.name[locale]}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}