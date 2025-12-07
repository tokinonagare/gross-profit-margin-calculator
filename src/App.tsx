import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { MarginCalculator } from './components/MarginCalculator'
import { PriceCalculator } from './components/PriceCalculator'

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2e2e2e] to-[#e0e0e0]">
      <header className="bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] shadow-md sticky top-0 z-50">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              💰 {t('app.title')}
            </h1>
            <LanguageSwitcher />
          </div>
          <p className="text-white/90 mt-2 text-sm md:text-base">{t('app.description')}</p>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8 md:py-12">
        <div className="space-y-6 md:space-y-8">
          <MarginCalculator />
          <PriceCalculator />
        </div>

        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800 border-b-2 border-[#f5576c] pb-2">
              📚 {t('concept.title')}
            </h3>
            <p className="mb-2 text-gray-700">
              <strong>{t('concept.definition')}</strong>
            </p>
            <p className="text-gray-600">{t('concept.purpose')}</p>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-[#ec4899] to-[#8b5cf6] mt-12">
        <div className="max-w-[800px] mx-auto px-6 md:px-10 py-6">
          <div className="text-center text-white text-sm">
            © 2024 Gross Profit Margin Calculator
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
