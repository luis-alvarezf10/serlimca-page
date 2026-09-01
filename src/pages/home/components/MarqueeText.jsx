import { useLanguage } from '../../../context/LanguageContext';

export default function MarqueeText() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white via-transparent to-white py-6 sm:py-8">
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center"><span className="font-[times-new-roman] italic text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mx-8 sm:mx-12">{t('marquee.text')}</span></div>
        ))}
      </div>
    </div>
  );
}
