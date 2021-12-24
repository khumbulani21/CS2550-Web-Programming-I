
function checkLogin() {
userName = document.getElementById("usernameInput").value;
   
 password=document.getElementById("passwordInput").value;
 var data = "userName=" +  userName +"&"+"password="+password;
 var request = new XMLHttpRequest();

	
	request.open("POST", "http://universe.tc.uvu.edu/cs2550/assignments/PasswordCheck/check.php", false);

	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(data);


   
	if (request.status == 200) {

   //get response text from server and store in variable
   var responseJson = JSON.parse(request.responseText);
   var dataDiv = document.getElementById("message");




	//alert("response from server"+ request.responseText);
	dataDiv.innerHTML = "login successfull";

//check if login was successfull
 if(responseJson["result"] =="invalid")
{
dataDiv.innerHTML = "Incorrect username or password";
}
else
{   
//store data to local storage
localStorage.cs2550timestamp= responseJson["userName"] +" " + responseJson["timestamp"] ;
//open game grid
window.open("grid.html");
 }



	}
}

function loginInfo()
{
	var info=document.getElementById("login");
	info.innerHTML=localStorage.cs2550timestamp;
}
function clearStorage()
{
	
	localStorage.clear();
	alert("local storage cleared");
}


