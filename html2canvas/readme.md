html2canvas  应为移动端页面分享到朋友圈 ， 小程序不能直接分享到朋友圈或一波分页面转换canvas

 html2canvas(document.body,{
                    onrendered: function(canvas){
                        document.body.appendChild(canvas)
                        显示,css
                    }
                })
svag  是图片 
   假如他能它dom 画在它；i面
   foreignObject  svg=> html


- window.getComputedStyle(dom,null)任何节点的css属性值都能拿到