// 全局变量太多, cachezhi为mult服务,
// 空间的污染
// const cache = {};
// 函数里的变量会运行的时候消失
const mult = (function(){
     
    const cache = {};
     return function(...args){
         let a = 1;
     let key = Array.prototype.join.call(arguments,',');
     
     if(key in cache){
        //  return a= 1;
        return cache[key];
     }
         for(let i =0,l = arguments.length; i<l;i++){
             a = a *args[i];
         }
         cache[key] = a;
         return a ;
     
    }
})()


console.log(mult(1,2,3));