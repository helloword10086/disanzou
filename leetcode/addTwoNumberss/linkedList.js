//   将数字的每一位变成一个listnode的实例
// 既不是字符串，也不是数值
 function  ListNode(val){
       this.val = val;
       this.next = null;
  }
  let number = 1234567890;
  let n1 = new ListNode(1)
  
  let n2 = new ListNode(2);
  n1.next = n2;
  let n3 = new ListNode(3);
  n2.next = n3;
//   便利链表， travel 一下 
 let node = n1;

while(node){
    console.log(node.val);
    node = node.netx;

}

