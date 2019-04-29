# 公共模块使用说明

本模块存放公共变量、公共模型、公共组件等公用内容！

## 权限组件

权限组件根据 api 服务提供的权限码，判断组件所对应的权限码是否存在权限，如不存在，则不显示组件所包含的内容，否则正常展示！

### 使用方式

#### 1. 添加组件所对应的权限码

```ts
// 在 ./consts/permission-rescod.ts 添加如下唯一的权限码

/** 权限码 */
export enum ResourceCodes {
  /** 版本列表查询权限 */
  VersionListSearch = "version-list-search"
}
```

#### 2. 使用权限组件包裹内容组件

```tsx
<PermissionWapper resourceCode={ResourceCodes.VersionListSearch}>
  <Button>保存</Button>
</PermissionWapper>
```
