 new js 关键字
 运算创建一个用户定义的对象类的实例
 1.构造函数上有prototype 属性，值为对象
 2. 类 可以由构造函数 + prototype原型对象
 3. typeof 类型 instanceof 实例
 new 结果是一个新的对象，具有构造函数里的属性
 2.对象要有原型对象，是定构造函数的原型对象
 1.空对象来啦 new Object()
 将构造函数里的属性交给空对象呢？
 constructor 本身就是为他人服务的
 实例服务？ 还是为任何对象服务
 函数内部的this 是由函数运行时的运行方式决定的
 new Otaku()
 Otaku.call(obj,.....);作为普通函数被运行
 call apply 可以指定函数运行时的this ，收到指向obj


 3. constructor构造函数 拥有 prototype属性，
 在上面添加属性和方法，可以被实例引用到。
 对象上有-proto-属性 这个对象 的原型对象是谁
 对象也可以拿到原型对象上的属性或方法
 js 的面向对象是基于原型的
 对象？   属性和方法的集合
 构造函数可以给些属性，
 其他的通过原型对象来拿到
 obj._proto_ =Otaku.prototype
 Object顶端
 call 和 apply 的区别
 apply：最多只能有两个参数——新this对象和一个数组argArray。如果给该方法传递多个参数，则把参数都写进这个数组里面，当然，即使只有一个参数，也要写进数组里。如果argArray不是一个有效的数组或arguments对象，那么将导致一个TypeError。如果没有提供argArray和thisObj任何一个参数，那么Global对象将被用作thisObj，并且无法被传递任何参数。

call：它可以接受多个参数，第一个参数与apply一样，后面则是一串参数列表。这个方法主要用在js对象各方法相互调用的时候，使当前this实例指针保持一致，或者在特殊情况下需要改变this指针。如果没有提供thisObj参数，那么 Global 对象被用作thisObj。 

实际上，apply和call的功能是一样的，只是传入的参数列表形式不同。
一般使用他们实现继承
多重继承正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本