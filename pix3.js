var output;
var video;
var outputScale = 10;

var r;
var g;
var b;
var a;

var c = true;

var outputMax = 11;
var outputMin = 9;



function setup() {
    createCanvas(windowWidth, windowHeight);
    video = createCapture(VIDEO);
    video.loadPixels();
    


}

function draw() {

    background(0);
    video.loadPixels();
    
    
    
    for (var y =0; y <video.height; y += outputScale) {
        for (var x =0; x <video.width; x += outputScale) {
        
                var loc = (x + y * video.width) * 4;
                
                r = video.pixels[loc ];
                g = video.pixels[loc +1];
                b = video.pixels[loc +2];
                a = video.pixels[loc +3];
                
                
                
                
                if ( r > g && r > b ) {
                    fill (255, 0, 0);
                    
                }
                else if ( g > b ) {
                    fill (0,255,0);  
                }
                else {
                    fill (0,0,255);
                }
                
                var brightness = ( r + g + b ) / 3; 
            
                                        
                var outsize = map( brightness, 0, 255, 0, outputScale);
                
                
                
            
                
                if (keyIsPressed){
                    keyPressed();
            
                    
                }
                
                else {
                    if ( c == true ) {
                        outputScale ++;
                    }
                    else {
                        outputScale --;
                    }
                    if ( outputScale >= outputMax ) {
                        c = false;
                    }
                    if ( outputScale <= outputMin ) {
                        c = true;
                    }
                }
            
            
            
            
                
            
                ellipse (x,y, outsize-2, outsize-2);
            
            
        }
        
    }
    
}

function keyPressed() {
    
    outputScale = 20;
    fill (255);
    
    
}






