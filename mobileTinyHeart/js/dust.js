/**
 * Created by asusa on 2017/3/28.
 */
var dustObj=function(){
    this.x=[];
    this.y=[];
    this.amp=[];
    this.No=[];
    this.alpha;//振幅
}
dustObj.prototype.num=30;
dustObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.x[i]=Math.random()*canvasWidth;
        this.y[i]=Math.random()*canvasHeight;
        this.amp[i]=20+Math.random()*25;
        this.No[i]=Math.floor(Math.random()*7);//[0,7),floor舍去小数点
    }
    this.alpha=0;
}
dustObj.prototype.draw=function(){
    this.alpha+=deltaTime*0.0005;//小-快8
    var l=Math.sin(this.alpha);
    for(var i=0;i<this.num;i++){
        var no=this.No[i];
        ctx1.drawImage(dustPic[no],this.x[i]+this.amp[i]*l,this.y[i]);
    }
}