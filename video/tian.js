let data = [
    {
        value: '周杰伦的听妈妈的话，好好听！',
        time: 5,
        color: 'red',
        speed: 1,
        fontSize: 22,
    },
    {
        value: '周杰伦的青花瓷，好好听！',
        time: 10,
        color: 'green',
        speed: 1,
        fontSize: 30,
    },
    {
        value: '天青色的烟雨，而我在等你！',
        time: 12,
        // color:'red',默认颜色黑色
        speed: 1,
        fontSize: 16,
    }
]
// 获取到所有的dom 元素
let doc = document;
let canvas = doc.getElementById('canvas')
let video = doc.getElementById('video')
let $txt = doc.getElementById('text')
let $btn = doc.getElementById('btn')
let $color = doc.getElementById('color')
let $range = doc.getElementById('range')

class CanvasBarrage {
    constructor(canvas, video, opts = {}) {
        if (!canvas || !video) {
            return;
        }
        console.log(this)

        // 挂载到this 上
        this.video = video;
        this.canvas = canvas;
        this.canvas.width = video.width;
        this.canvas.height = video.height;

        this.ctx = canvas.getContext('2d') //创建一个2d 的画布

        //设置默认值，如果没有传入参数就使用改值
        let defOpts = {
            color: '#e91e63',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }

        //合并对象(assign) 全部挂载到this实例上
        Object.assign(this, defOpts, opts);

        //添加一个属性，用来判断播放状态，默认true 是暂停
        this.isPaused = true;
        //得到所有的弹幕消息
        this.barrages = this.data.map(item => new Barrage(item, this))
        // 渲染
        this.render();
    }
    // function render() {}
    render() {
        //清理画布
        this.clear()
        //渲染弹幕
        this.renderBarrage()
        //如果没有暂停的话就继续渲染
        if(this.isPaused === false){
            //通过raf渲染动画，递归进行渲染
            requestAnimationFrame(this.render.bind(this))
        }
    }
    clear() {
        //清除整个画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
    renderBarrage() {
        //根据该时间来和弹幕要展示的时间做比较，判断是否展示弹幕
        let time = this.video.currentTime

        //遍历所有弹幕，每一个barrage都是Barrage的实例
        this.barrages.forEach(barrage => {
            //只有在视频播放的时间大于等于当前 弹幕的展示时间才做处理
            if (!barrage.flag && time >= barrage.time) {
                // 判断当前弹幕是否已经初始化过
                if (!barrage.isInit) {
                    barrage.init()
                    barrage.isInit = true;
                }
                //弹幕需要从右往左渲染，所以 X 坐标减去当前弹幕的speed 即可
                barrage.x -= barrage.speed;
                barrage.render()
                //如果弹幕的X轴坐标小于自身的宽度，表示渲染结束
                if (barrage.x < -barrage.width) {
                    barrage.flag = true;
                }
            }
        });
    }
}
