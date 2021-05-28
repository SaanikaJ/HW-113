function preload(){

}

function setup(){
    canvas = document.getElementById("myCanvas").innerHTML = createCanvas(740, 580); 
    canvas.position(110, 250); 

    fill(145, 50, 168); 
    stroke(145, 50, 168);

    var rectangle = rect(20, 10, 50, 50); 
    var rectangle = rect(100, 10, 50, 50); 
    var rectangle = rect(180, 10, 50, 50);
    var rectangle = rect(260, 10, 50, 50);
    var rectangle = rect(340, 10, 50, 50);
    var rectangle = rect(420, 10, 50, 50);
    var rectangle = rect(500, 10, 50, 50);
    var rectangle = rect(580, 10, 50, 50);
    var rectangle = rect(660, 10, 50, 50);

    var rectangle = rect(20, 525, 50, 50);
    var rectangle = rect(100, 525, 50, 50);
    var rectangle = rect(180, 525, 50, 50);
    var rectangle = rect(260, 525, 50, 50);
    var rectangle = rect(340, 525, 50, 50);
    var rectangle = rect(420, 525, 50, 50);
    var rectangle = rect(500, 525, 50, 50);
    var rectangle = rect(580, 525, 50, 50);
    var rectangle = rect(660, 525, 50, 50);

    var rectangle = rect(20, 100, 50, 50);
    var rectangle = rect(20, 170, 50, 50);
    var rectangle = rect(20, 250, 50, 50);
    var rectangle = rect(20, 330, 50, 50);
    var rectangle = rect(20, 410, 50, 50);

    var rectangle = rect(660, 100, 50, 50);
    var rectangle = rect(660, 170, 50, 50);
    var rectangle = rect(660, 250, 50, 50);
    var rectangle = rect(660, 330, 50, 50);
    var rectangle = rect(660, 410, 50, 50);

    video = createCapture(VIDEO);
    video.hide(); 

    tint_color = " ";
}

function draw(){
    image(video, 70, 70, 600, 440); 
    tint(tint_color); 
}

function take_snapshot(){
    save("filtered_image.png"); 
}

function apply_filter(){
    tint_color = document.getElementById("filter_colour").value; 
}