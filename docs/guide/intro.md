---
title: 快速开始
order: 2
toc: content

nav:
  title: 文档1
  path: /guide
---

## 📦 安装

```bash
$ pnpm install --save encode-hooks
# or
$ yarn add encode-hooks
```

## 🔨 使用

```ts
import {useToggle} from 'encode-hooks';
```

## 生成`CHANGELOG`

参考[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)，全局安装`conventional-changelog-cli`：

```bash
npm install -g conventional-changelog-cli
pnpm run changelog
```
