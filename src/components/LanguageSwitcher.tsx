import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const currentLang = i18n.language
    const isEnglish = currentLang === 'en' || currentLang.startsWith('en-')
    const newLang = isEnglish ? 'zh-CN' : 'en'
    i18n.changeLanguage(newLang)
  }

  const currentLang = i18n.language
  const isEnglish = currentLang === 'en' || currentLang.startsWith('en-')

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-1 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 font-medium"
      aria-label={t('language.switch')}
    >
      🌐 {isEnglish ? '中文' : 'En'}
    </button>
  )
}
