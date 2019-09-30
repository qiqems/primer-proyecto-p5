let w = 400;
let h = 600;
let bolaBaixa = true;
let bolaCostat =  true;

function setup() {
    //    createCanvas(800, 800);
    //    createCanvas(w,h);

    createCanvas(windowWidth, windowHeight);
    //    background('black');

    xCercle = 300;
    yCercle = 0;


}

function draw() {
    background(45, 74, mouseY);
    ////    
    ////    fill('aqua');
    ////    noStroke();
    ////    rect(30, 50, 100, 100);
    ////
    ////    fill('aqua');
    ////    rect(500, 50, 100, 100);
    //
    ////    fill('black');
    ////    stroke('lightpink');
    ////    strokeWeight(5);
    ////    ellipse(mouseX, mouseY, 50);
    //    
    //    noFill();
    //    stroke( mouseX, mouseY, 252);
    //    strokeWeight(1);
    //    ellipse(mouseX, mouseY, 50);
    //    
    //    fill('aqua');
    //    strokeWeight(100);
    //    ellipse(width/2, height/2, 50);
    //    
    //    
    //    noFill();
    //    stroke(mouseX, 232, mouseY);
    //    strokeWeight(2);
    //    triangle( mouseX, mouseY, 300,300, 100, 300  );
    //

    circle(mouseX, mouseY, 2);
    fill(mouseX, 232, mouseY);
    noStroke;
    circle(xCercle, yCercle, 75);



//    if (xCercle < width - 25) {
//        xCercle = xCercle + 5;
//    }
    
    if (bolaCostat) {
        if (xCercle < width - 0) {
            xCercle = xCercle + 5;
        } else {
            bolaCostat = false;
        }

    } else {
        if (xCercle > 0) {
            xCercle = xCercle - 5;
        } else {
            bolaCostat = true;
        }
    }


    
    
    


    if (bolaBaixa) {
        if (yCercle < height - 0) {
            yCercle = yCercle + 5;
        } else {
            bolaBaixa = false;
        }

    } else {
        if (yCercle > 0) {
            yCercle = yCercle - 5;
        } else {
            bolaBaixa = true;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
