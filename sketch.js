

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(166, 55, 55);
    fill('LightSalmon');
    stroke('white');
    for(var i = 0; i < 10000; i++){
        rect((i*10)%width,(i*10)%height,10,10);
    }
    
    fill('darkred');
    stroke('Chocolate');
    if(mouseX < 200){
        rect(mouseX,mouseY,122,122
        );
    }else{
        rect(mouseX,mouseY,223,122,517);
    }
}