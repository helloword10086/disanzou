 类型 typeof 
复杂数据类型 object
Array 数组是可遍历的对象
Function 是可运行的对象
JSON Object 对象字面量是可枚举for （key in)
typeof  半掉子 typeof 难以区分【】 {}
希望有一个方法区分Array  JSON Object
用对象字面量来做面向对象 区别于原型的 它没有被实例化的需求 Type 将在程序中做类型检查
var Type ={}； 组织代码
for 来一次性加完 同步异步问题
使用闭包来将Type 作用域封闭起来
立即执行函数，同步执行 类型检测函数的定义 应为函数箱套 
Object。prototype。String.call(obj)
object 祖先 顶级对象 函数才有prototype属性原型 上有这样的to String方法，解决typeof 的尴尬“objecbject”
方法的执行可以被改变
Object。prototype。String.call(obj)