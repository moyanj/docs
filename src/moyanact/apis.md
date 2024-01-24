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
无返回数据

### 返回示例
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
### 返回数据

`data`字典->`token`

Token，用于身份验证，有效期30天。

### 返回示例

```json
{
    "msg":"登录成功"
    "code":200,
    "data":{
        "token":"shhahagdd"
    }
}
```

### 备注
无

## 获取验证码

### 端点
`/api/code`
### 请求方法
`GET`
### 请求参数
#### 查询参数
|  参数   | 类型  | 作用 | 是否必须 | 示例 | 备注 |
|  ----  | ----  | ---- | ---- | ---- | ---- | 
| type | str | 指定api的类型 | 是 | gen | gen或img |
| uid | str | 验证码id | 否 | 略 | type等于gen时返回，type等于gen不需要 |

### 返回数据
type等于gen时：
`data`字典->`uid`
验证码id，为一个16位随机字符串

type等于img:
返回一张图片，为验证码。
### 返回示例
略
### 备注
无

## 获取用户信息
::: warning
需要验证(只能在在查询参数中)
:::
### 端点
`/api/info`
### 请求方法
`GET`
### 请求参数
略
### 返回数据
略