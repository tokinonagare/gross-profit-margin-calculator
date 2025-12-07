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
      suggestedPrice,
      expectedProfit,
    })
  }

  const reset = () => {
    setTargetMargin('')
    setCost('')
    setResult(null)
    setError('')
  }

  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] p-8 md:p-12 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-3 border-b-2 border-[#f5576c] text-center">
        💡 {t('calculator.priceCalculator.title')}
      </h2>

      <div className="space-y-5 mb-6">
        <div>
          <label className="block text-sm font-medium text-[#374151] mb-3">
            {t('calculator.priceCalculator.targetMargin')}
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              value={targetMargin}
              onChange={(e) => setTargetMargin(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-[#f5576c] focus:outline-none focus:ring-2 focus:ring-[#f5576c]/20 hover:border-gray-400 transition-all duration-300"
              placeholder="0"
              min="0"
              max="99.99"
              step="0.01"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
              {t('calculator.priceCalculator.unit.percent')}
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#374151] mb-3">
            {t('calculator.priceCalculator.productCost')}
          </label>
          <div className="relative">
            <input
              type="number"
              inputMode="decimal"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-[#f5576c] focus:outline-none focus:ring-2 focus:ring-[#f5576c]/20 hover:border-gray-400 transition-all duration-300"
              placeholder="0"
              min="0"
              step="0.01"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
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
        <div className="mb-6 p-5 bg-gradient-to-r from-[#fef3c7] to-[#fde68a] rounded-xl border border-yellow-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-700 mb-1 font-medium">
                💰 {t('calculator.priceCalculator.suggestedPrice')}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                {result.suggestedPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                <span className="text-lg text-gray-600">
                  {t('calculator.priceCalculator.unit.currency')}
                </span>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-700 mb-1 font-medium">
                💵 {t('calculator.priceCalculator.expectedProfit')}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[#f5576c]">
                {result.expectedProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                <span className="text-lg text-gray-600">
                  {t('calculator.priceCalculator.unit.currency')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={calculate}
          className="flex-1 bg-gradient-to-r from-[#f093fb] to-[#f5576c] text-white py-3 px-6 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(245,87,108,0.4)] transition-all duration-300 shadow-md"
        >
          {t('calculator.priceCalculator.calculate')}
        </button>
        <button
          onClick={reset}
          className="flex-1 bg-[#f3f4f6] text-[#374151] py-3 px-6 rounded-lg font-semibold hover:bg-[#e5e7eb] transition-all duration-300"
        >
          {t('calculator.priceCalculator.reset')}
        </button>
      </div>
    </div>
  )
}
