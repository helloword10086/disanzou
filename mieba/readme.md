 - 小程序 react 大红之后
 MVVM 组件  vant 
 数据驱动界面
 Vue  语法简洁



 - Vue 语法与小程序共已
 1. 思想
     网页， new Vue({
         el: "#app"
     })
 2. 组件
    Vue.component({
        template:'',
        data(){
            return{
                
            }
        }
    })
    - MVVM 不需要dom  因为 DOM很低效
      但是要找到元素   ref  属性相当于id

      Vue.component("Heroes",{
     props:{
        heroes:{
          type:Array,
          default:function(){
            return [];
          }
        },
        主键化思维