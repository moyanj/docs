---
title: API文档
---
# MYA的API
::: info
本API的服务器地址为下：
- 官方(有Cloudflare)：`https://act.moyanjdc.top`
:::
## 注册

### 端点
`/api/reg`

### 请求方法
`POST`

### 参数

#### POST的json参数
|  参数   | 类型  | 作用 | 是否必须 | 示例 | 备注 |
|  ----  | ----  | ---- | ---- | ---- | ---- | 
| name   | str   | 用户名|  是  | moyan | 需唯一 |
| email  | str   | 邮箱  |  是  | moyanjdc@163.com  | 需唯一 |
| password | str | 密码 | 是 | hsuhs |  |
| code | str | 图形验证码 | 是 | sjF4 | 于`/api/code`获取 |
| uid | str | 图形验证码uid | 是 | sjiwvGIW573sjqhs | 于`/api/code`获取 |

### 返回数据
#### `data`
无
### 返回示例
#### 正常
```json
{
    "msg":"注册成功"
    "code":200,
    "data":null
}
```

### 备注
无

## 登录

### 端点
`/api/login`

### 请求方法
`POST`
### 参数
#### POST的json参数
|  参数   | 类型  | 作用 | 是否必须 | 示例 | 备注 |
|  ----  | ----  | ---- | ---- | ---- | ---- | 
| name | str | 用户名 | 是 | moyan | 邮箱用户名任选其一 |
| email | str | 邮箱 | 是 | moyanact@163.com | 邮箱用户名任选其一 |
| password | str | 密码 | 是 | auhv | |