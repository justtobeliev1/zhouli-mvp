# 合乎周礼（MVP v1）

黑客松版本，功能优先。

## 功能

- 一句话输入
- 同时生成真引 / 意译 / 戏仿三条结果
- 标签化判词
- 默认图卡预览
- 一键导出 PNG
- 二次调参：再毒一点 / 再温和一点 / 换个出处 / 生成标题版

## 快速运行

```bash
cd /Users/bellon/Documents/zhouli-mvp
python3 -m http.server 4173
```

浏览器打开：

- [http://127.0.0.1:4173](http://127.0.0.1:4173)

## 目录

- `index.html`：页面结构
- `styles.css`：视觉系统与响应式样式
- `app.js`：生成引擎、交互逻辑、图卡导出
- `confucius.jpg`：孔子画像（互联网下载）

## 图片来源

- 孔子燕居像（Wikimedia Commons, Public Domain）
- 文件页：[https://commons.wikimedia.org/wiki/File:%E5%AD%94%E5%AD%90%E7%87%95%E5%B1%85%E5%83%8F.jpg](https://commons.wikimedia.org/wiki/File:%E5%AD%94%E5%AD%90%E7%87%95%E5%B1%85%E5%83%8F.jpg)
- 原图地址：[https://upload.wikimedia.org/wikipedia/commons/f/f2/%E5%AD%94%E5%AD%90%E7%87%95%E5%B1%85%E5%83%8F.jpg](https://upload.wikimedia.org/wikipedia/commons/f/f2/%E5%AD%94%E5%AD%90%E7%87%95%E5%B1%85%E5%83%8F.jpg)

## 说明

真引模式只使用内置真实古籍短句与出处；若检索不到匹配项，会留空并给出提示，避免伪造来源。
