# Gross Profit Margin Calculator | 毛利率計算機

A bilingual (English & Traditional Chinese) profit margin calculator built with React, TypeScript, and Tailwind CSS.

## Features | 功能特點

- **Profit Margin Calculator** | **毛利率計算機** - Calculate gross profit and profit margin from sales price and cost
- **Sales Price Calculator** | **銷售價格計算機** - Calculate sales price from target profit margin and cost
- **Bilingual Support** | **雙語支持** - Switch between English and Traditional Chinese
- **Responsive Design** | **響應式設計** - Works perfectly on desktop and mobile devices
- **Modern UI** | **現代化界面** - Beautiful gradient design with smooth animations

## Technology Stack | 技術棧

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **i18next** - Internationalization framework
- **Cloudflare Pages** - Deployment platform

## Development | 開發

### Prerequisites | 前置要求

- Node.js 18+
- npm, yarn, or pnpm

### Installation | 安裝

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server | 開發服務器

The application will be available at `http://localhost:5173/`

## Deployment to Cloudflare Pages | 部署到 Cloudflare Pages

### Method 1: Git Integration (Recommended) | 方法 1：Git 集成（推薦）

1. Push your code to GitHub/GitLab

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > Pages

3. Click "Create a project" > "Connect to Git"

4. Select your repository

5. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

6. Click "Save and Deploy"

Your site will be deployed automatically whenever you push to your repository.

### Method 2: Direct Upload | 方法 2: 直接上傳

```bash
# Build the project
npm run build

# Install Wrangler CLI (if not installed)
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy to Cloudflare Pages
wrangler pages deploy dist
```

## Project Structure | 項目結構

```
gross-profit-margin-calculator/
├── src/
│   ├── components/
│   │   ├── LanguageSwitcher.tsx    # Language switcher component
│   │   ├── MarginCalculator.tsx    # Profit margin calculator
│   │   └── PriceCalculator.tsx     # Sales price calculator
│   ├── locales/
│   │   ├── en.json                 # English translations
│   │   └── zh-TW.json              # Chinese translations
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   ├── i18n.ts                     # i18n configuration
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite configuration
└── tailwind.config.js              # Tailwind configuration
```

## Formulas | 計算公式

### Profit Margin | 毛利率
```
Profit Margin = (Sales Revenue - Cost) / Sales Revenue × 100%
毛利率 = (銷售收入 - 銷售成本) / 銷售收入 × 100%
```

### Sales Price | 銷售價格
```
Sales Price = Cost ÷ (1 - Profit Margin ÷ 100)
銷售價格 = 成本 ÷ (1 - 毛利率 ÷ 100)
```

## License | 許可證

ISC

## Author | 作者

Your Name

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
