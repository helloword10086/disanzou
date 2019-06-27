  函数的节流与访科


  阿里js,面试题
    
搜索建议
   googele suggest
input value => ajax
有问题的， caikun  xu
分词 灭霸 电文液
keyup 没有必要每次都去触发Ajax 太浪费性能
过滤一些无效的请求  打完一个单词再去搜索 world word js 打完一个单词厚再去搜


防抖的关键
   频繁输入时，怎么减少请求呢 
   debounce(ajax,500) 生成一个函数， 控制执行 ，停止输入时执行那么一次 

   setTimout delay 之后一定会执行一次
   在规定时间内 被clear掉 clearTimemout(funcid)
     func.id = setTimeout( function(){
            func(args);
            },delay);
        句柄， 不重复的数次 func 函数是对象 id属性