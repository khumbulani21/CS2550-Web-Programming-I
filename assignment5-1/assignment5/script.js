function loadSyncPost() {
    var name = document.getElementById("usernameInput").value;
    var data = "name=" + name;
    var localRequest = new XMLHttpRequest();

    // PASSING false AS THE THIRD PARAMETER TO open SPECIFIES SYNCHRONOUS
    localRequest.open("POST", "data.php", false);
    localRequest.setRequestHeader("Content-Type", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php");
    localRequest.send(data);

    // NOTE THAT THE status WILL NOT BE 200 IF THE REQUEST IS FOR A
    // LOCAL FILE.
    if (localRequest.status == 200) {
	var dataDiv = document.getElementById("data4Div");

	// FOR MORE INFORMATION ABOUT JSON SEE http://json.org
	var responseJson = JSON.parse(localRequest.responseText);
	dataDiv.innerHTML = "Your password is: " + responseJson["password"];
    }
}