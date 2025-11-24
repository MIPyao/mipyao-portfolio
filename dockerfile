# ========= 1. 构建阶段 =========
FROM node:20-alpine AS builder

# 必要的构建工具（sharp、canvas 等需要）
RUN apk add --no-cache libc6-compat
# ← 关键：给 Node 分配 6GB 内存
ENV NODE_OPTIONS="--max-old-space-size=6096"

WORKDIR /app

# 使用核心包管理器（推荐 pnpm，速度快体积小）
# 如果你用 npm/yarn，直接改成对应的命令即可
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm i --frozen-lockfile

# 复制所有源码
COPY . .

# Nuxt 4 必须设置 BASE_URL（重要！）
# 如果你用的是 nitro.publicBaseURL，也可以不设置
ENV NUXT_PUBLIC_BASE_URL=/

# 生产构建
RUN pnpm run build

# ========= 2. 运行阶段（超小镜像）=========
FROM node:20-alpine AS runner

RUN apk add --no-cache libc6-compat
WORKDIR /app

# 只复制 .output 目录（Nuxt 4 构建产物就在这里）
COPY --from=builder /app/.output ./

# 创建非 root 用户（安全）
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nuxtjs -u 1001
USER nuxtjs

# Nuxt 4 默认端口仍然是 3000
EXPOSE 3000

# 必须监听 0.0.0.0（容器外才能访问）
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# 启动命令（固定不变）
CMD ["node", "server/index.mjs"]