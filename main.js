var canvas= new fabric.Canvas('myCanvas');
// Create canvas variable
ball_x=0;
ball_y=0;
hole_y=400;
hole_x=800;
//Set initial positions for ball and hole images.


block_image_width = 60;
block_image_height = 60;

hole_object="";
ball_object="";

function load_img(){
	fabric.Image.fromURL("golf-h.png",function (Img){
        hole_object=Img
        hole_object.scaleToWidth(100);
        hole_object.scaleToHeight(100);
       hole_object.set({
            top:hole_y,
            left:hole_x
        })
        canvas.add(hole_object)
    })

	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function (Img){
        ball_object=Img
        ball_object.scaleToWidth(block_image_width);
        ball_object.scaleToHeight(block_image_height);
       ball_object.set({
            top:ball_y,
            left:ball_x
        })
        canvas.add(ball_object)
    })
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}

	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >0){
			ball_y=ball_y-10;
			console.log("block image width= " - block_image_width);
			console.log("When Down arrow key is pressed, X = " +ball_x+ ", Y = " + ball_y );
			canvas.remove(ball_object);
			new_image();
		}
		// Write a code to move ball upward.
	}

	function down()
	{ 
		if(ball_y <=450){
			ball_y=ball_y+10;
			console.log("block image height= " + block_image_height);
			console.log("When Down arrow key is pressed, X = " +ball_x+ ", Y = " + ball_y );
			canvas.remove(ball_object);
			new_image();
		}

		 // Write a code to move ball downward.
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-10;
			console.log("block image height= " + block_image_height);
			console.log("When Down arrow key is pressed, X = " +ball_x+ ", Y = " + ball_y );
			canvas.remove(ball_object);
			new_image();
		}

			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+10;
			console.log("block image height= " + block_image_height);
			console.log("When Down arrow key is pressed, X = " +ball_x+ ", Y = " + ball_y );
			canvas.remove(ball_object);
			new_image();
		}
			// Write a code to move ball right side.
		}
	
	


