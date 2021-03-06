import Vue from 'vue'
import Router from 'vue-router'
import { Indicator } from 'mint-ui';

Vue.use(Router);

/**-----------------将模块分开配置路由，有效避免多人开发路由文件冲突------------- */


//文档
import Doc from "./Doc/index.js"; 

//公共模块演示demo
import Demo from "./Demo/index.js"; 

const router =  new Router({
  routes: [...Demo,...Doc],
  //每次切换自动切换到目标位置，可自行打印参数
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})


//进入任意路由，清除loading
router.beforeEach((to , from, next) =>{
    Indicator.close();
    next();
});


export default router;