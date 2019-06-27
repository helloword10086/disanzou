function err(msg){
    throw new Error(msg)
}
function sum(a = err('第一个参数为空'),b= err('第二个参数为空')) {
    return a + b;
}
console.log(sum(1,2))
console.log(sum(undefined,10))
console.log(sum(sum(10)))
// 不允许改写函数体