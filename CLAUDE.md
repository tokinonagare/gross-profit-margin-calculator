# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个毛利率计算器应用，使用 React 19 + TypeScript + Vite + Tailwind CSS 4 构建，支持中英文双语。

## 常用命令

```bash
# 开发
npm run dev         # 启动开发服务器

# 构建
npm run build       # TypeScript 类型检查 + Vite 构建
npm run preview     # 预览生产构建
```

## 部署

### Cloudflare Pages
- 构建命令：`npm run build`
- 输出目录：`dist`
- 手动部署：`npx wrangler pages deploy dist --project-name=gross-profit-margin-calculator`

## 代码架构

### 核心组件结构

应用由两个主要计算器组件组成：

1. **MarginCalculator** (`src/components/MarginCalculator.tsx`)
   - 已知销售价格和成本，计算毛利额和毛利率
   - 公式：毛利率 = (销售价格 - 成本) / 销售价格 × 100%
   - 验证：销售价格必须 > 0，成本 >= 0，成本 > 销售价格时显示警告

2. **PriceCalculator** (`src/components/PriceCalculator.tsx`)
   - 已知目标毛利率和成本，反推建议销售价格
   - 公式：销售价格 = 成本 ÷ (1 - 毛利率 ÷ 100)
   - 验证：毛利率范围 0-100%，成本 >= 0

### 国际化 (i18n)

- 配置文件：`src/i18n.ts`
- 翻译文件：`src/locales/en.json` 和 `src/locales/zh-CN.json`
- 使用 i18next + react-i18next + i18next-browser-languagedetector
- 语言检测顺序：localStorage → navigator（浏览器语言）
- 默认语言：英文 (en)
- 语言切换：`LanguageSwitcher` 组件

### 样式规范

- 使用 Tailwind CSS 4（通过 @tailwindcss/postcss）
- 主题色：
  - 粉红到紫色渐变：`from-[#ec4899] to-[#8b5cf6]`（导航栏、页脚）
  - 粉红到红色渐变：`from-[#f093fb] to-[#f5576c]`（按钮）
  - 强调色：`#f5576c`（边框、文字）
- 响应式设计：最大宽度 800px，在移动端和桌面端自适应

### 数字格式化

- 货币显示使用千位分隔符：`toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })`
- 确保长数字正确换行：使用 `break-all` 类防止溢出

### 状态管理

- 使用 React hooks（useState）进行本地状态管理
- 每个计算器组件独立管理状态：输入值、计算结果、错误信息

## 项目特点

- 无服务器端依赖，纯前端静态应用
- 适合部署到 Cloudflare Pages 等静态托管平台
- 支持双语切换，语言偏好持久化到 localStorage
- 渐变色主题，现代化 UI 设计
