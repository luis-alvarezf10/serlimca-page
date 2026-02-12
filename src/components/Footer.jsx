import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 SERLIMCA - {t('footer.rights')}</p>
      </div>
    </footer>
  )
}
