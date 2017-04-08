/**
 * Created by asusa on 2017/3/27.
 */
//大鱼与果实距离
function momFruitsCollision(){
    if(!data.gameOver){
        for(var i=0;i<fruit.num;i++){
            if(fruit.alive[i]){
                var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
                if(l<900){
                    fruit.dead(i);
                    data.fruitNum++;
                   // mom.momBodyCount++;
                    //if(mom.momBodyCount>7){
                    //    mom.momBodyCount=7;
                    //}
                    //mom.momBodyCount=mom.momBodyCount>7?7:mom.momBodyCount;
                    //判断是否吃了死亡之果
                    if(fruit.fruitType[i]=="black"){
                        data.life-=1;
                        data.lifeAlpha=1;
                        if(data.life==0){
                            data.gameOver=true;
                        }
                    }
                    if(fruit.fruitType[i]=="blue"){
                        data.double=2;
                    }
                    if(data.double==2){
                        mom.momBodyBlueCount++;
                        mom.momBodyBlueCount=mom.momBodyBlueCount>7?7:mom.momBodyBlueCount;
                    }else{
                        mom.momBodyOraCount++;
                        mom.momBodyOraCount=mom.momBodyOraCount>7?7:mom.momBodyOraCount;
                    }
                    wave.born(fruit.x[i],fruit.y[i]);
                }
            }
        }
    }
}
//大鱼与小鱼距离
function momBabyCollision(){
    if(data.fruitNum>0&&!data.gameOver){
        var l=calLength2(mom.x,mom.y,baby.x,baby.y);
        if(l<900){
            //baby recover
            baby.babyBodyCount=0;
            //data=>0
            //data.reset();
            //mom.momBodyCount=0;
            mom.momBodyOraCount=0;
            mom.momBodyBlueCount=0;
            //score updata
            data.addScore();
            halo.born(baby.x,baby.y);
        }
    }
}