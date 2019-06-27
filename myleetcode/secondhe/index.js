class ListNode{
  constructor(val){
    this.val = val;
    this.next = null
  }
}
var addTwoNumbers = function(l1, l2) {
  var carry = 0;
    var flag;
    var l3;
    while(l1 || l2 || carry){
      var v1 = 0;
      var v2 = 0;
      var v3 = 0;
        if(l1){
         v1 = l1.val
         l1 = l1.next
        }
        if(l2){
          v2 = l2.val
          l2 = l2.next
         }
         v3 = (v1 + v2 +carry) % 10
        carry = Math.floor((v1+v2 +carry)/10)
      // console.log(v3)
      if(!flag){
        l3 = new ListNode(v3)
        flag = l3;
      }else{
        flag.next = new ListNode(v3)
        flag=flag.next;
      }
    }
    // console.log(l3)
    return l3
};

var a1 = new ListNode(1);
var a2 = new ListNode(2);
a1.next = a2 ;
var a3 = new ListNode(4);
a2.next = a3;

var b1 = new ListNode(1);
var b2 = new ListNode(3);
b1.next = b2;
var b3 = new ListNode(4);
b2.next = b3;
var l3 = addTwoNumbers(a1, b1);