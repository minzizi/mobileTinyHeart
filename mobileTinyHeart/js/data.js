/**
 * Created by asusa on 2017/3/27.
 */
var dataObj=function(){
    this.fruitNum=0;
    this.double=1;
    this.score=0;
    this.gameOver=false;
    this.alpha=0;
    this.life=3;
    this.lifeAlpha=1;
}
//dataObj.prototype.reset=function(){
//    this.fruitNum=0;
//    this.double=1;
//}
dataObj.prototype.draw=function(){
    var w=can1.width;
    var h=can1.height;
    ctx1.save();
    ctx1.shadowBlur=10;
    ctx1.shadowColor="white";
    ctx1.fillStyle="white";
    //ctx1.font="20px Verdana";
    //ctx1.textAlign="center";
    //ctx1.fillText("num: "+this.fruitNum,w*0.5,h-50);
    //ctx1.fillText("double: "+this.double,w*0.5,h-80);

    //cut life
    if(this.life!=3){
        this.lifeAlpha-=deltaTime*0.0005;
        if(this.lifeAlpha<0){this.lifeAlpha=0}
        ctx1.save();
        ctx1.fillStyle="rgba(255,255,255,"+this.lifeAlpha+")";
        ctx1.fillText("LIFE -1",can1.width*0.5,can1.height*0.75);
        ctx1.restore();
    }
    ctx1.fillText("SCORE: "+this.score,w*0.25,h-20);
    ctx1.fillText("LIFE: "+this.life,w*0.75,h-20);
    if(this.gameOver){
        this.alpha+=deltaTime*0.0001;
        if(this.alpha>1){this.alpha=1}
        ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")";
        ctx1.fillText("GAMEOVER",w*0.5,h*0.5);
        start.style.display="block";
    }
    ctx1.restore();
}
dataObj.prototype.addScore=function(){
    this.score+=this.fruitNum*100*this.double;
    this.fruitNum=0;
    this.double=1;
}

