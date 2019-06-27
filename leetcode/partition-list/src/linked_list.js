import LinkedListNode from './linked_list_node.js'
class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    
  }
  append(val){
    // let node = new LinkedListNode(val);
    const newNode = new LinkedListNode(val)
    if(!this.head){s
      this.head = newNode;
      this.tail = newNode;
      return this
    }
    this.tail.next = newNode;
    this.tail = newNode;
  return this;
  }
  toArray(){
    const nodes = [];
    let currentNode = this.head;
    while (currentNode){
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }
  toString(){
    return this.toArray().map(node => node.val)
  }
}
export default LinkedList;