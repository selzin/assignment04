var canvas;
var ctx;
var width = 1000;
var grass;
var grass_x;
var grass_y;

var fence;
var fence_x;
var fence_y;

var treefor;
var treefor_x;
var treefor_y;
var treefor_z;
var treefor_a;

var treeback;
var treeback_x;
var treeback_y;
var treeback_z;
var treeback_a;

var plane;
var plane_x;
var plane_y;
var cloud;
var cloud_x;
var cloud_y;

var trainAudio;
var planeAudio;
var bird,bird1,bird2;

	canvas = document.getElementById("mycanvas");
	canvas.width = 1000;
	canvas.height = 480;
	ctx = canvas.getContext("2d");   	
	
	//for audio
	 trainAudio = new Audio();
	 trainAudio.src= "trainsound.mp3";
	 trainAudio.controls = false;
	 trainAudio.loop = true;
	 trainAudio.autoplay = true; 
	 
	 planeAudio = new Audio();
	 planeAudio.src= "airplaneSound.mp3";
	 planeAudio.controls = false;
	 planeAudio.loop = true;
	 planeAudio.autoplay = true; 	
	
	
   //load images	
	grass = new Image();//init for grass
	grass.src = 'image/grass.png';	
	bird = new Image();
	bird.src = 'http://rs51.pbsrc.com/albums/f392/no1chickadee/015llisallindsay.gif?w=280&h=210&fit=crop';
	treefor = new Image();
	treefor.src='image/tree_fwd.png';	
	treeback = new Image();
	treeback.src='image/tree_back.png';	
	fence = new Image();
	fence.src='image/fence.png';	
	cloud = new Image();
	cloud.src = 'image/cloud.png';
	plane = new Image();
	plane.src = 'image/plane.png'//	
	
		
	cloud_x = 300;
	cloud_y = 800;

    plane_x = 1000;	
    plane_y = 100;
	treeback_x = -74;
	treeback_y = 200;
	treeback_z = 510;
	treeback_a = 800; 
	
    treefor_x = 0;
	treefor_y = 400;
	treefor_z = 800; 
    
    fence_x = -500;
    fence_y = 500; 
   
    grass_x = -500; 
    grass_y = 500;	
	
	bird1 = 300;
	bird2 = 800;
 
function update(){
	
	plane_x -= 3;
	plane_y -= 0.3;
	
	cloud_x += 0.1;
	cloud_y += 0.1;
	
	treeback_x += 0.5;
	treeback_y += 0.5;
	treeback_z += 0.5;
	treeback_a += 0.5;
	
	treefor_x += 1;
	treefor_y += 1;
    treefor_z += 1;  
	
	fence_x += 1;
	fence_y += 1;
	
	grass_x += 0.5;
	grass_y += 0.5;
	
	bird1 += 2;
	bird2 += 2;
	//checking far tree image	
	
	if(treeback_x > width){ treeback_x = -treeback.width; }
	
	if(treeback_y > width){ treeback_y = -treeback.width;}
	
	if(treeback_z > width){	treeback_z = -treeback.width;}
	
	if(treeback_a > width){ treeback_a = -treeback.width;}
	
	
	if (cloud_x > width) { cloud_x = -cloud.width; }
	
	if (cloud_y > width) { cloud_y = -cloud.width; }
	
	//checking for near tree image
	if (treefor_x > width) { treefor_x = -treefor.width; }
	
	if(treefor_y > width){ treefor_y = -treefor.width; }
	
	if(treefor_z > width){treefor_z = -treefor.width;	}

	var rand=Math.floor((Math.random() * -1000) + -600);
	if(plane_x>=0&&plane_x<=1000){ planeAudio.volume=0.7;}else{ planeAudio.volume=0.0;}
    if(plane_x <= rand){plane_x =1150; plane_y= 100; }	
	
	if(fence_x >= width){fence_x = -fence.width;}
	
	if(fence_y >= width){fence_y = -fence.width;}
	
	if(grass_x >= width){grass_x = -grass.width;}
	
	if(grass_y >= width){grass_y = -grass.width;}
	
	if(bird1 > width) {bird1 = -bird.width;}
	
	if(bird2 > width) {bird2 = -bird.width;}
	
}

function draw() {
	//drawing images
	ctx.fillStyle = '#66ccff';
	ctx.fillRect(0,0,1000,300);
	
	ctx.fillStyle = '#00b300';//for the green color
	ctx.fillRect(0,300,1000,120);
    
	ctx.fillStyle = '#595959';//for the dark gray color
	ctx.fillRect(0,420,1000,60);
	
	ctx.drawImage(grass,grass_x,200);
	ctx.drawImage(grass,grass_y,200);
	
    ctx.drawImage(treeback,treeback_x,144);
	ctx.drawImage(treeback,treeback_y,144);
	ctx.drawImage(treeback, treeback_z,145);
	ctx.drawImage(treeback,treeback_a,145);	
	
	ctx.drawImage(bird,500, 100);
	
	ctx.drawImage(treefor,treefor_x,205);
	ctx.drawImage(treefor,treefor_y, 205);
	ctx.drawImage(treefor,treefor_z,205);	
	
	ctx.drawImage(cloud, cloud_x, 0);
	ctx.drawImage(cloud, cloud_y, 0);
	ctx.drawImage(fence,fence_x,380);
	ctx.drawImage(fence,fence_y,380);	
	
	ctx.drawImage(plane,plane_x,plane_y);
}
 
function main_loop() {
	draw();
	update();
	
	window.requestAnimationFrame(main_loop);
}
main_loop();
main();

