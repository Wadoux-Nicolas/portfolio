import { useTranslations } from 'next-intl';

export default function ScrollIndicator() {
  const translate = useTranslations('Actions');

  return (
    <button type="button" aria-label={translate('scrollDown')}
            className="cursor-pointer sm:border-4 border-2 border-primary rounded-full sm:w-8 w-4 sm:h-16 h-8 flex items-end justify-center pointer">
      <div
        className="sm:border-4 border-2 border-secondary rounded-full sm:w-3 w-1.5 sm:h-6 h-3 sm:mb-1 mb-0.5 animate-bounce"></div>
    </button>
  );
}