var LRUCache = function(capacity){
     this.capacity = capacity //容量
     this.obj = {};
    //  obj 存取， 数组来存重要性
    //  最近最少使用？
    // 开头[0]     结尾[length-1]
    // unshifit pop()
    this.arr = [];
}
LRUCache.prototype.get = function(key){
     var val = this.obj[key];
     if (val > 0){
         var index = this.arr.indexOf(key);
         this.arr.splice(index,1);
         this.arr.unshift(key);
         return val;
     }else{
         return -1;
     }
}
LRUCache.prototype.set = function(key,val){
// 1 1
// 之前已存在
if (this.obj[key]){
    this.obj[key] = value;//
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);
    return;
}
if (this.capacity === this.arr.length){
    var k = this.arr.pop();
    this.obj[k] = undefined;
}
this.obj[key] = val;
this.arr.unshift(key);
}

var cache = new LRUCache(2);
cache.set(1,1);
cache.set(2,2);
console.log(cache.get(1));
// cache.set(3,3);
// console.log(cache.get(2));
// cache.set(4,4);