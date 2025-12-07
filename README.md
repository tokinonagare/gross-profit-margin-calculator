# Gross Profit Margin Calculator

毛利率计算器 - React + TypeScript + Tailwind CSS

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署到 Cloudflare Pages

### Git 自动部署（推荐）

1. 推送代码到 GitHub
2. Cloudflare Dashboard > Workers & Pages > Create application > Connect to Git
3. 配置构建：
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

之后每次 push 自动部署。

### 手动部署

```bash
npm run build
npx wrangler pages deploy dist --project-name=gross-profit-margin-calculator
```

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- i18next (英文/简体中文)
