#pragma strict

function Start () {

}

var win = false;
var score = 0;
function OnCollisionEnter(collision: Collision){
	Debug.Log("collided");
	if (collision.gameObject.tag == 'fruit'){
		score += 1;
		win = true;
		//GUI.Label(Rect(500,500,100,100), "Yummy");
	}
}

function Update () {

}

function onGUI(){
	if (win){
		GUI.Label(Rect(500,500,100,100), "Yummy");
	}
}