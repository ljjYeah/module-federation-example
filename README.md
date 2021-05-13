## webpack5 module federation示例

### main
- 主项目，通过路由控制projectA、projectB页面展示

### projectA
- projectA项目，提供pageA、pageB的功能，并在pageA中使用projectB的button组件

## projectB
- projectB项目，提供pageC、pageD的功能及button组件

### 启动
- **main**
```text
cd main
npm install
npm start
然后在浏览器中打开: http://localhost:3000/
```

- **projectA**
```text
cd projectA
npm install
npm start
然后在浏览器中打开: http://localhost:3001/
```

- **projectB**
```text
cd projectB
npm install
npm start
然后在浏览器中打开: http://localhost:3002/
```
