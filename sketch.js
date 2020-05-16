var ball,position,database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(50,50,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ballposition = database.ref("ball/position");
    ballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;

//to write data into the database    
database.ref("ball/position").set({

    "x" : position.x+x,
    "y" : position.y+y
})





}

function readposition(data){

position = data.val();                                              
ball.x = position.x;
ball.y = position.y;

}

function showerror(){

console.log("error");

}


