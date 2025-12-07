import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { MarginCalculator } from './components/MarginCalculator'
import { PriceCalculator } from './components/PriceCalculator'

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-600">
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {t('app.title')}
          </h1>
          <LanguageSwitcher />
        </div>
        <p className="text-white/90 mt-2">{t('app.description')}</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          <MarginCalculator />
          <PriceCalculator />
        </div>

        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3">{t('concept.title')}</h3>
            <p className="mb-2">
              <strong>{t('concept.definition')}</strong>
            </p>
            <p className="text-white/90">{t('concept.purpose')}</p>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 mt-8">
        <div className="text-center text-white/70 text-sm">
          © 2024 Gross Profit Margin Calculator
        </div>
      </footer>
    </div>
  )
}

export default App
