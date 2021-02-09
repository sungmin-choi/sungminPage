
export  class Point{
    constructor(index,x,y){
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.02;
        this.cur = index;
        this.max = Math.random() * 100 + 850;
    }

    update(){
        this.cur +=this.speed;
        this.y = this.fixedY +(Math.sin(this.cur)*this.max);
    }
}
export class Wave{
    constructor(index,totalPoints,color){
        this.index = index;
        this.totalPoints=totalPoints;
        this.color=color;
        this.points = [];

    }
    resize(stageWidth,stageHeight){
        this.stageHeight=stageHeight;
        this.stageWidth=stageWidth;

        this.centerX = stageWidth/2;
        this.centerY = stageHeight/2;

        this.pointGap = this.stageWidth/(this.totalPoints - 1);

        this.init();

    }
    init(){
        this.points=[];

        for (let i = 0; i <this.totalPoints; i++) {
            const point = new Point(
                this.index+i,
                this.pointGap *i,
                this.centerY,

            );
            this.points[i] = point;
            
        }
    }

    draw(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;
        ctx.moveTo(prevX,prevY);
        for (let i = 1; i <this.totalPoints; i++) {
         if(i<this.totalPoints-1){
                this.points[i].update();
         }
         const cx = (prevX + this.points[i].x)/2;
         const cy = (prevY + this.points[i].y)/2;
         ctx.quadraticCurveTo(prevX,prevY,cx,cy);
         prevX = this.points[i].x;
         prevY = this.points[i].y;
        }
        ctx.lineTo(prevX,prevY);
        ctx.lineTo(this.stageWidth,this.stageHeight);
        ctx.lineTo(this.points[0].x,this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}
export class WaveGroup{
    constructor(){
        this.totalWaves = 3;
        this.totalPoints = 6;
        this.color = ['rgba(247,148,31,0.4)','rgba(252, 181, 2,0.4)','rgba(229, 208, 22,0.4)'];
        this.waves = [];

        for(let i =0;i<this.totalWaves; i++){
            const wave = new Wave(
              i,
              this.totalPoints,
              this.color[i],
            );
            this.waves[i] = wave;
        }
    }
        resize(stageWidth,stageHeight){
            for(let i=0;i<this.totalWaves;i++){
              const wave = this.waves[i];
              wave.resize(stageWidth,stageHeight);
            }
        
    }
    draw(ctx){
        for(let i=0;i<this.totalWaves;i++){
            const wave = this.waves[i];
            wave.draw(ctx);
          }

    }
}
class App{
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.waveGroup = new WaveGroup();

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

        this.waveGroup.resize(this.stageWidth,this.stageHeight)
    }
    animate(t){
        this.ctx.clearRect(0,0,this.stageWidth,this.stageHeight);
        this.waveGroup.draw(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () =>{
    new App();
};