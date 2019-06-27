兼容性  不行
scroll-behavior:smooth

chrome 支持css 但是其他的主流浏览器怎么办 scroll-behavior失效
js写


scroll-behavior ie不兼容
兼容 hack ie js window.srollTo(0,1/8);
requestAnimationFrame(悌归函数)

navigator.userAgent判断浏览器

navigator.userAgent.indexOf('Chrome')