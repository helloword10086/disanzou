// 对象 林 gaodeMap
const gaodeMap = {
    show(){
        console.log('开始渲染gaode地图');
    }
}

const gooleMap = {
    show(){
        console.log('开始渲染goole地图');
    }
}
const baiduMap = {
    // 为互换做整备
    show(){
        console.log('开始渲染baidu地图');
    }
}
const sosoMap ={
      
}
const renderMap = (a) =>{
    // gooleMap.show();
    // gooleMap.call(baiduMap.show())
    if(a.show && a.shuow instanceof Function){
     a.show();
    }
}

renderMap(gooleMap)