function TreeNode(val){
  this.val = val ;
  this.left = this.right = null;
}


let a1 = new TreeNode(3);
let a2 = new TreeNode(9);
let a3 = new TreeNode(20);
let a4 = new TreeNode(15);
let a5 = new TreeNode(7);

a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

// 102题leetcode
// 从根开始， 以层层来遍历， 7结束 按曾 每个节点把子节点告诉 算法就OK
// items []队列  Queue  

function levelOrderTravesal(root){
     if(!root) return [];
     const items = [];
     const queue = [root,null];
     let levelNodes = [];//每一层的节点
     while(queue.length > 0){
       const t  = queue.shift();
       //root
       if (t) {
      levelNodes.push(t.val);
      
        if(t.left){
          queue.push(t.left)
        }
        if(t.right){
          queue.push(t.right)
        }
       }else{
         // null 层次分隔符
         items.push(levelNodes);
         levelNodes = [];
         console.log(queue)
        //  null 上一层 在队列里的节点 按曾来遍历
         if (queue.length > 0){
           queue.push(null);
           console.log(queue)
         }
       }
     }
     return items;
}

console.log( levelOrderTravesal(a1))

// queue [root,null]
// levelNodes[]
// item[]