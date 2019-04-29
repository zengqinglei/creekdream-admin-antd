# 核心模块使用说明

本模块提供公共基础核心组件。

## 授权组件

组件用于用控制路由是否需要授权认证。

**使用方式如下：**

```tsx
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={createBrowserHistory()}>
      <PageRoutes />
    </ConnectedRouter>
  </Provider>
);
```

## Store 基础模型数据发布订阅

**提供以下信息的订阅发布**

1. 应用信息
2. 内容信息
3. 权限数据
4. 路由信息
5. 用户信息

**使用方式如下(例如 app)：**

1. 声明 actions：`./store/app/action.ts`
2. 实现 state 的更新，编写 reducer:`./store/app/reducer.ts`
3. 通过 connect 传递 props,完成信息订阅：`../layout/default/default.tsx`
