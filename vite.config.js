import { defineConfig } from "vite";

export default defineConfig({
  // 可选配置项
  build: {
    // 指定构建模式（默认 'production'）
    mode: "production",
    // 指定构建入口文件（默认 'index.html'）
    // entry: 'src/main.js',
    // 指定构建输出目录（默认 'dist'）
    // 这里可以指定多个入口文件
    // 例如：entry: { main: 'src/main.js', admin: 'src/admin.js' },
    // 入口文件可以是单个文件或多个文件
    // entry: 'src/main.js',
    // entry: { main: 'src/main.js', admin: 'src/admin.js' },

    outDir: "dist", // 构建输出目录，默认是 dist
    assetsDir: "assets", // 静态资源存放目录，默认是 dist/assets
    minify: "esbuild", // 使用 esbuild 压缩（速度快）
    emptyOutDir: true, // 构建前清空 dist 目录
    // 构建目标环境（默认 ['es2020', 'edge88', 'firefox89', 'chrome89', 'safari14']）
    target: "modules",
    // 手动控制 rollupOptions（可选）
    rollupOptions: {
      // 可以在这里添加 input 多页面支持等
    },
    // 是否启用 sourcemaps（默认 false）
    sourcemap: false,
  },
  // 服务器配置（开发模式）
  server: {
    port: 3000,
    open: true, // 自动打开浏览器
  },
  // 强制使能/禁用依赖预构建
  optimizeDeps: {
    force: false,
  },
});
