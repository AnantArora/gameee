class Player {

    constructor(){
        this.body=createSprite(height-50,50)
        this.body.addAnimation("play",playerImg)
        this.body.scale=0.5

    }
    moveRight(){
        this.body.velocityX=5
    }

    moveLeft(){
        this.body.velocityX=-5
    }
    moveUp(){
        this.body.velocityY=-20
    }
    gravity(){
        this.body.velocityY+=0.7
    }
}