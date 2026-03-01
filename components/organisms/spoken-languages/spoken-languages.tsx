import SpokenLanguageFlag from '@/components/molecules/spoken-language-flag/spoken-language-flag';

export interface SpokenLanguage {
  flag: 'fr' | 'gb' | 'es';
  languageName: string;
  level: string;
  extraInfo?: string;
}

export interface SpokenLanguagesProps {
  sectionTitle: string;
  languages: SpokenLanguage[];
}

export default function SpokenLanguages({
  sectionTitle,
  languages,
}: SpokenLanguagesProps) {
  return (
    <section className="w-fit">
      <h3 className='text-center mb-2 text-secondary'>
        {sectionTitle}
      </h3>
      <ul className='flex flex-wrap sm:flex-nowrap justify-center gap-8 md:gap-16'>
        {languages.map((lang) => (
          <li key={lang.flag}>
            <SpokenLanguageFlag alt={lang.languageName} flag={lang.flag}>
              <span>{lang.level}</span>
              {lang.extraInfo && (
                <>
                  <br/>
                  <span>{lang.extraInfo}</span>
                </>
              )}
            </SpokenLanguageFlag>
          </li>
        ))}
      </ul>
    </section>
  );
}