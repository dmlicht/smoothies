#pragma strict

function Start () {

}

function Update () {

}

var lastX = 0.0;
var lastY = 0.0;
var lastZ = 0.0;
var deltaX = 0.0;
var deltaY = 0.0;
var deltaZ = 0.0;
var speed = 5;
var distance = 20;
var line = -7;

function FixedUpdate(){
}

function OnMouseDrag(){
		//Init lasts. THIS IS ABSOLUTELY NOT THE RIGHT WAY TO DO THIS
		if (lastX == 0 && lastY == 0){
			lastX = rigidbody.position.x;
			lastY = rigidbody.position.y;
			lastZ = rigidbody.position.z;
		}

		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var dest = ray.GetPoint(distance);
		
		if (dest.x > line){
			dest.x = line;
			return;
		} 
		
		//set deltas
		deltaX = dest.x - lastX;
		deltaY = dest.y - lastY;
		deltaZ = dest.z - lastZ;
		
		//update last pos
		lastX = rigidbody.position.x;
		lastY = rigidbody.position.y;
		lastZ = rigidbody.position.z;
		rigidbody.position = dest;
}

function OnMouseUp(){
	if (rigidbody.position.x > line){
		return;
	}
	var deltaVector3 = new Vector3(deltaX * 8, deltaX * 2, deltaZ * 2);
	rigidbody.velocity = deltaVector3;
}
