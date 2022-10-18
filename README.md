# 参考钉钉的审批流组件
> 这是针对打包lib组件模式的文档，[原文档在这里](./README.OLD.md)

## 前置条件
- 要引入 `element-ui` 组件库，最好是全局引入，否则就要把该库中 [index.import.js](./src/components/index.import.js) 的涉及到的组件引入
## 如何使用
- 

## 需要注意的点
- 因为 引入该组件的项目，可能对 `element-ui` 有单独的样式处理，所以为了避免 `element-ui` 样式冲突，并没有打包 `element-ui` css 文件

## 打包lib库的相关改动
- `element-ui` 改为按需引入(指的是`babel`[配置](./babel.config.js))
- `main.js` 注册的自定义组件都[单独抽离](./src/components/index.import.js)
- 功能组件用到 `vuex` 的都改为`prop`参数的形式