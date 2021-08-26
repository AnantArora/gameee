class Platform{

    constructor(x){
        this.y=height-random([200,400,600,800])
        this.width=150
        this.body=createSprite(x ,this.y , this.width, 20)
        this.body2=createSprite(x ,this.y-30 , 50, 50)
this.body.addImage(platformImg)
this.body.scale=1
this.body.rotation=90
this.body.debug=true
this.body.setCollider("rectangle",100,0)

this.body2.addImage(obstacleImg)
this.body2.scale=0.4
//this.body2.rotation=90
this.body2.debug=true
this.body2.setCollider("rectangle",0,270,20,100)
this.body2.velocityY=2

    }

}