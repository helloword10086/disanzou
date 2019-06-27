function Linknode(val){
    this.val = val;
    this.next = null;
}
/**
 * 
 * @param {*} l1 
 * @param {*} l2 
 */
var addTwoNumber = function (l1, l2){
        let a = [],
          b = [],
          new1= l1,   /* 引用*/
          new2= l2;
          while(new1){
              a.push(new1.val);
              new1 = new1.next;
          }
          while(new2){
            b.push(new2.val);
            new2 = new2.next;
        }

        a.reverse();
        b.reverse();

        let ans = [];
        let carry = 0;
        while(a.length || b.length){
         let c=a.length?a.shift():0;
         let d =b.length?b.shift():0;
         let sum = c + d + carry;
         ans.push(sum % 10);
         if(sum >= 10){
            carry = 1;
         }else{
             carry = 0;
         }
        //  carry && (ans.push(arry));
        //  ans.reverse();
        //  return ans.join('');
        }
        carry && (ans.push(arry));
         ans.reverse();
        // return ans.join('');
        //   返回的应该也是一个节点
        let ret = [];
        for(let i =0, len = ans.length; i < len; i++){
            ret[i] = new Linknode(ans[i]);
        }
                for(let i = 0,len = ans.length;i <len -1;i++){
                    ret[i].next = ret[i+1];
                }
                return ret[0]
                console.log(ret[1])
}

let a1 = new Linknode(1),
     a2 = new Linknode(2),
  a3 = new Linknode(3);
  a1.next = a2;
  a2.next = a3;

  let b1 = new Linknode(1),
     b2 = new Linknode(2),
    b3 = new Linknode(3);
  b1.next = b2;
  b2.next = b3;


//   let node = a1;
//   while(node){
//       console.log(node.val)
//       node = node.next;
//   }

//  addTwoNumber(a1,b1);
let ret = addTwoNumber(a1,b1)
while(ret){
    console.log(ret.val)
    ret = ret.next;
}
 console.log(addTwoNumber(a1,b1))