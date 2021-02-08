
export  class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = 0;
        this.max = Math.random() * 100+150;
    }

    update(){
        this.cur +=this.speed;
        this.y = this.fixedY +(Math.sin(this.cur)*this.max);
    }
}
export class Wave{
    constructor(){

    }
    resize(stageWidth,stageHeight){
        this.stageHeight=stageHeight;
        this.stageWidth=stageWidth;

        this.centerX = stageWidth/2;
        this.centerY = stageHeight/2;

        this.init();

    }
    init(){
        this.point = new Point(
            this.centerX,
            this.centerY
        );
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = '#ff0000';

        this.point.update();

        ctx.arc(this.point.x,this.point.y,30,0,2*Math.PI);
        ctx.fill();
    }
}
class App{
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.wave = new Wave();

        window.addEventListener('resize',this.resize.bind(this),false);
        this.resize();
        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth*2;
        this.canvas.height = this.stageHeight*2;
        this.ctx.scale(2,2);

        this.wave.resize(this.stageWidth,this.stageHeight)
    }
    animate(t){
        this.ctx.clearRect(0,0,this.stageHeight,this.stageWidth);
        this.wave.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () =>{
    new App();
};