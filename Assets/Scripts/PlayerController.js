#pragma strict

var lastX = 0.0;
var lastY = 0.0;
var lastZ = 0.0;
var deltaX = 0.0;
var deltaY = 0.0;
var deltaZ = 0.0;
var speed = 5;
var distance = 10;
var line = -7;

var thrown = false;
var showControls = false;
var playAgainButton : GUIStyle;
var continueButton : GUIStyle;

function Start() {
	GameObject.FindGameObjectWithTag("Finish").guiText.text = "";
}

function FixedUpdate(){
}

function LateUpdate(){
	if (rigidbody.position.x > line){
	}
}

function beenThrown(){
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
	thrown = true;

	var clamp = 100;
	var deltaVector3 = new Vector3(Mathf.Min(deltaX * 8 * speed, clamp), Mathf.Min(deltaX * 2, clamp), Mathf.Min(deltaZ * 2 * speed, clamp));
	rigidbody.velocity = deltaVector3;
	CheckEndGame();
	
}

function OnGUI() {
	if (showControls === true) {
		//Make the continue button
		if (GUI.Button(Rect((Screen.width - 235)/2, (Screen.height - 14)/2, 235, 74), "", playAgainButton)) {
			Debug.Log("Show Play");
			Application.LoadLevel("startScreen");
		}
		
		//Make the play again button
		if (GUI.Button(Rect((Screen.width - 235)/2, (Screen.height - 184)/2, 235, 74), "", continueButton)) {
			Debug.Log("Show Settings");
			Application.LoadLevel("startScreen");
		}
	}
}

function EndGame() {
	Debug.Log("game end");
	GameObject.FindGameObjectWithTag("Finish").guiText.text = "Yay, good job!";
	showControls = true;
}

function CheckEndGame() {
	//if(itemsRemaining == 0){
	//	Invoke("EndGame", 2);	
	//}
	
	var remaining = GameObject.FindGameObjectsWithTag("fruit");
	
	
	for (var i = 0; i < remaining.length; i++) {
		if (remaining[i].GetComponent(PlayerController) && remaining[i].GetComponent(PlayerController).thrown == false) {
			return;
		}
	}
	EndGame();
	
}