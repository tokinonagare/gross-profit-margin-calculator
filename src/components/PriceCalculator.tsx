import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function PriceCalculator() {
  const { t } = useTranslation()
  const [targetMargin, setTargetMargin] = useState('')
  const [cost, setCost] = useState('')
  const [result, setResult] = useState<{
    suggestedPrice: number
    expectedProfit: number
  } | null>(null)
  const [error, setError] = useState('')

  const calculate = () => {
    setError('')
    const margin = parseFloat(targetMargin)
    const productCost = parseFloat(cost)

    if (isNaN(margin) || margin < 0 || margin >= 100) {
      setError(t('validation.marginRange'))
      return
    }

    if (isNaN(productCost) || productCost < 0) {
      setError(t('validation.costNonNegative'))
      return
    }

    const suggestedPrice = productCost / (1 - margin / 100)
    const expectedProfit = suggestedPrice - productCost

    setResult({
      suggestedPrice: Math.round(suggestedPrice),
      expectedProfit: Math.round(expectedProfit),
    })
  }

  const reset = () => {
    setTargetMargin('')
    setCost('')
    setResult(null)
    setError('')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        {t('calculator.priceCalculator.title')}
      </h2>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('calculator.priceCalculator.targetMargin')}
          </label>
          <div className="relative">
            <input
              type="number"
              value={targetMargin}
              onChange={(e) => setTargetMargin(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="0"
              min="0"
              max="99.99"
              step="0.01"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              {t('calculator.priceCalculator.unit.percent')}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('calculator.priceCalculator.productCost')}
          </label>
          <div className="relative">
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="0"
              min="0"
              step="0.01"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              {t('calculator.priceCalculator.unit.currency')}
            </span>
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
          {error}
        </div>
      )}

      {result && (
        <div className="mb-6 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600 mb-1">
                {t('calculator.priceCalculator.suggestedPrice')}
              </div>
              <div className="text-2xl font-bold text-purple-600">
                {result.suggestedPrice}{' '}
                {t('calculator.priceCalculator.unit.currency')}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">
                {t('calculator.priceCalculator.expectedProfit')}
              </div>
              <div className="text-2xl font-bold text-pink-600">
                {result.expectedProfit}{' '}
                {t('calculator.priceCalculator.unit.currency')}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={calculate}
          className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {t('calculator.priceCalculator.calculate')}
        </button>
        <button
          onClick={reset}
          className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
        >
          {t('calculator.priceCalculator.reset')}
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="text-sm font-medium text-blue-900 mb-1">
          {t('concept.title')}
        </div>
        <div className="text-sm text-blue-700">
          {t('formula.price')}
        </div>
      </div>
    </div>
  )
}
