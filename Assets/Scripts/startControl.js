#pragma strict

function Start () {
}

var playButton : GUIStyle;
var settingsButton : GUIStyle;
var creditsButton : GUIStyle;
var backgroundImg : GUIStyle;

function OnGUI () {
	GUI.Box(Rect(0, 0, 800, 450), "", backgroundImg);

	//Make the play button
	if (GUI.Button(Rect(533, 188, 235, 74), "", playButton)) {
		Debug.Log("Show Play");
		Application.LoadLevel("working_scene");
	}
	
	//Make the settings button
	if (GUI.Button(Rect(533, 268, 235, 74), "", settingsButton)) {
		Debug.Log("Show Settings");
		Application.LoadLevel("settingsScreen");
	}
	
	//Make the credit button
	if (GUI.Button(Rect(533, 348, 235, 74), "", creditsButton)) {
		Debug.Log("Show Credits");
		Application.LoadLevel("creditScreen");
	}
}

function Update () {
}