<p align="center">
  <a href="https://github.com/babanbang/Genshin/commits/main" style="text-decoration: none;">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/babanbang/Genshin?color=%23114514&style=flat-square">
  </a>
  <a href="https://github.com/babanbang/Genshin/stargazers" style="text-decoration: none;">
    <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/babanbang/Genshin?color=%23aa4499&style=flat-square">
  </a>
  <a href="https://github.com/babanbang/Genshin/forks" style="text-decoration: none;">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/babanbang/Genshin?color=%23456789&style=flat-square">
  </a>
  <br>
  <a href="https://github.com/babanbang/Genshin" style="text-decoration: none;">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/babanbang/Genshin?style=flat-square">
  </a>
  <a href="https://github.com/babanbang/Genshin/issues" style="text-decoration: none;">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/babanbang/Genshin?style=flat-square">
  </a>
  <a href="https://github.com/babanbang/Genshin/graphs/contributors" style="text-decoration: none;">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/babanbang/Genshin?color=%23c0c0c0&style=flat-square">
  </a>
</p>

> 请先确保你已经安装了[Karin](https://github.com/KarinJS/Karin)、[karin-plugin-MysTool](https://github.com/babanbang/karin-plugin-MysTool)

#### 克隆仓库
karin-plugin-MysTool目录执行以下命令克隆仓库到本地
>根据你的网络选择使用GitHub或Gitee
1. 使用GitHub
```bash
git submodule add -f  https://github.com/babanbang/Genshin.git ./components/Genshin
```
2. 使用Gitee
```bash
git submodule add -f  https://gitee.com/bbaban/Genshin.git ./components/Genshin
```

#### 如何使用
在karin-plugin-MysTool/components/index.js中添加以下内容(无此文件可无视)
```javascript
export * from './Genshin/index.js'
```
---
