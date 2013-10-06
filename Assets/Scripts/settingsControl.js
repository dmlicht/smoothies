#pragma strict

function Start () {

}

var backButton : GUIStyle;
var backgroundImg : GUIStyle;

function OnGUI () {
	GUI.Box(Rect(0, 0, 800, 450), "", backgroundImg);
	
	//Make the back button
	if (GUI.Button(Rect(533, 10, 235, 74), "", backButton)) {
		Debug.Log("Show Start Page");
		Application.LoadLevel("startScreen");
	}
}

function Update () {

}