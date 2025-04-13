### package.json设置
```
"main": "dist/index.cjs", // CommonJS 模块语法导入的入口文件
"module": "dist/index.esm.js", // ES6 模块语法导入的入口文件
"browser": "dist/index.js", // umd 格式通过 scripts 标签导入的入口文件
"typings": "dist/index.d.ts", // ts 文件的类型导出文件
"files": ["dist", "README.md"] // 需要发布到 npm 的文件列表
```