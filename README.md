# coursedemo

##introduce
* 基于vuex的用户课程权限管理
* 项目演示
<img src="http://wavedanger.gitee.io/vue-music-online/images/vuex.gif" alt="纳尼，图没了？" width="200"/>
* 登录页
主要利用mutation保存帐号信息，以及初始化权限
* 课程页
主要利用mapGetters返回封装后的账号信息，v-for遍历课程列表，通过对比每门课程与帐号权限大小来决定是否进入详情页
* 课程详情页(权限限制进入)
主要利用分享(actions)将普通用户提升为vip用户
* 用户中心页(充值提升权限)
主要利用充值(actions)将用户提升至不同权限，v-for充值列表，需传参，即充值项的权限参数

## warnning
* 定义路由时注意不要把routes写成routers

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
