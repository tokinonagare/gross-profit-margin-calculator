# Cloudflare Pages 部署指南 | Deployment Guide

## 方法 1: 通过 Git 集成部署（推荐）| Method 1: Git Integration (Recommended)

### 步骤 | Steps:

1. **推送代码到 GitHub**
   ```bash
   # 如果还没有远程仓库，先创建一个 GitHub 仓库
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com/
   - 如果没有账号，需要先注册

3. **创建 Cloudflare Pages 项目**
   - 点击左侧菜单的 "Workers & Pages"
   - 点击 "Create application" 按钮
   - 选择 "Pages" 标签
   - 点击 "Connect to Git"

4. **连接 Git 仓库**
   - 选择 GitHub 或 GitLab
   - 授权 Cloudflare 访问您的仓库
   - 选择您刚才推送的仓库

5. **配置构建设置**
   - **Project name**: 选择一个项目名称（将成为您的域名前缀）
   - **Production branch**: `main`
   - **Framework preset**: 选择 "Vite"
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: 无需配置

6. **部署**
   - 点击 "Save and Deploy"
   - 等待构建完成（通常需要 1-2 分钟）
   - 部署成功后，您将获得一个 `*.pages.dev` 域名

### 自动部署 | Auto Deployment

配置完成后，每次推送到 `main` 分支时，Cloudflare Pages 都会自动重新部署您的网站。

---

## 方法 2: 使用 Wrangler CLI 部署 | Method 2: Wrangler CLI

### 步骤 | Steps:

1. **安装 Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **构建项目**
   ```bash
   npm run build
   ```

4. **部署到 Cloudflare Pages**
   ```bash
   wrangler pages deploy dist --project-name=gross-profit-calculator
   ```

5. **后续更新**
   每次更新后，只需运行：
   ```bash
   npm run build
   wrangler pages deploy dist --project-name=gross-profit-calculator
   ```

---

## 自定义域名 | Custom Domain

部署完成后，您可以配置自定义域名：

1. 在 Cloudflare Pages 项目页面，点击 "Custom domains"
2. 点击 "Set up a custom domain"
3. 输入您的域名
4. 按照提示配置 DNS 记录

---

## 环境变量 | Environment Variables

目前项目不需要任何环境变量。如果将来需要添加，可以在 Cloudflare Pages 项目设置中配置。

---

## 性能优化 | Performance Optimization

Cloudflare Pages 自动提供以下优化：
- 全球 CDN 分发
- 自动 HTTPS
- HTTP/3 支持
- 自动资源压缩
- 边缘缓存

---

## 监控和日志 | Monitoring and Logs

在 Cloudflare Dashboard 中，您可以：
- 查看部署历史
- 查看构建日志
- 监控访问统计
- 查看错误日志

---

## 故障排除 | Troubleshooting

### 构建失败 | Build Failed

如果构建失败，请检查：
1. Node.js 版本（推荐 18+）
2. 构建命令是否正确：`npm run build`
3. 输出目录是否正确：`dist`
4. 查看构建日志获取详细错误信息

### 页面无法访问 | Page Not Accessible

1. 确认部署状态为 "Active"
2. 清除浏览器缓存
3. 检查 Cloudflare 的 DNS 设置
4. 等待 DNS 传播（可能需要几分钟）

---

## 回滚部署 | Rollback

如果新版本有问题，可以快速回滚：

1. 进入 Cloudflare Pages 项目页面
2. 点击 "Deployments"
3. 找到之前的成功部署
4. 点击 "Rollback to this deployment"

---

## 联系支持 | Support

如有问题，可以：
- 查看 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- 访问 [Cloudflare 社区](https://community.cloudflare.com/)
- 提交工单给 Cloudflare 支持团队
