立即执行函数
回调函数
function myFunction(){

    var node=document.createElement("LI");
    var textnode=document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
 $('.lists').append(`<li>${n.title}</li>`);
 　定义主函数的时候，我们让代码先去执行callback()回调函数，但输出结果却是后输出回调函数的内容。这就说明了主函数不用等待回调函数执行完，可以接着执行自己的代码。所以一般回调函数都用在耗时操作上面。比如ajax请求，比如处理文件等