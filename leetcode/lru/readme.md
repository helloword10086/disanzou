LRU Least Recently Used 

操作系统的内存中
node fs 
硬盘  内存 CPU 小 快， N 

内存中容量多少  超过容量后淘汰的机制
最近最少使用

meet 缓存 
LRUCache
   2 
1   put(1) 存入 [下标 值] {key:val}
2   put(2,2)  
3 put(3,3)  1先拿走， 3放进来
4 put(4,4) 2先移除 4放入
5 get(3,3) o(1)

对象字面量  存取的数据解构

