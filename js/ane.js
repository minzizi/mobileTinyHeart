/**
 * Created by asusa on 2017/3/26.
 */
var aneObj=function(){
    //startpoint control endpoint(sin)
    this.rootx=[];
    this.headx=[];
    this.heady=[];
    this.amp=[];//振幅
    this.alpha=0;
    //this.len=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+Math.random()*20;
        this.headx[i]=this.rootx[i];
        this.heady[i]=canvasHeight-(200+Math.random()*50);
        this.amp[i]=Math.random()*50+40;//振幅50
        //this.len[i]=200+Math.random()*50;
    }
    console.log("ane");
}
aneObj.prototype.draw=function(){
    this.alpha+=deltaTime*0.0005;//小-快8
    var l=Math.sin(this.alpha);//[-1,1]
    ctx2.save();
    ctx2.globalAlpha=0.6;
    ctx2.lineWidth=20;
    ctx2.lineCap="round";
    ctx2.strokeStyle="#3b154e";
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canvasHeight);
        this.headx[i]=this.rootx[i]+l*this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i],canvasHeight-80,this.headx[i],this.heady[i]);
        ctx2.stroke();
    }
    ctx2.restore();
}