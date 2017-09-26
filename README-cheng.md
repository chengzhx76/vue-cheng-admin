# vue-admin

> 基于VUE搭建的后台管理系统

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

[Demo]
https://git.oschina.net/geek_qi/AG-Admin-v2.0/tree/master/AG-Admin-v2-UI

[tutorial]
https://segmentfault.com/a/1190000009275424

[ES6]
http://es6.ruanyifeng.com/

[AXIOS]
https://www.npmjs.com/package/axios
http://www.cnblogs.com/zhouyangla/p/6753673.html
http://www.ruanyifeng.com/blog/2016/04/cors.html
[vue-router]
https://router.vuejs.org/zh-cn/
https://github.com/vuejs/vue-router/blob/next/examples/redirect/app.js

[Vuex]
https://vuex.vuejs.org/zh-cn/
https://github.com/vuejs/vuex/blob/dev/examples/shopping-cart/store/index.js

## 流程
登录流程：

From表单 -> 本地验证[login/index.vue] -> 提交（再次本地验证）[login/index.vue] -> 本地验证成功[login/index.vue]

-> 网络交互（store/action[store/modules/user.js] -> api/login.js[封装的axios组件[utils/axiosHttp.js]]） -> 返回成功（没有报异常） 

-> Vuex存储信息（action->mutations->state） -> 登录成功 -> 跳转首页页面
