import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-gray-700 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">{t('notFound.title')}</h2>
        <p className="text-xl text-gray-400 mb-8">{t('notFound.description')}</p>
        <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">{t('notFound.action')}</Link>
      </div>
    </div>
  );
}
