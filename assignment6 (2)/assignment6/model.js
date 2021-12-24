var grid= [
    [1, 0, 0, 0, 0, 0, 0, 0], 
    [0, 2, 0, 2, 0, 0, 0, 0], 

    [2, 0, 0, 0, 0, 0, 0 ,0], 
    [0, 0, 0, 0, 0, 0, 0, 0],

    [1, 0, 0, 0, 1, 0, 0, 0], 
    [0, 0, 0, 1 , 0, 0, 0,0],
	
    [0, 0, 1, 0, 0, 0, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 2]
	  ];


var next=1;
var gameOver = false;
//getSquare function
function getSquare(row,column)
{
	//use xml to set checkers on the game grid
	setGrid();
   return this.grid[row][column];
 }
 var counter=1;
//makes changes to the game grid based on xml file
function setGrid() {
    var request = new XMLHttpRequest();
    request.open("GET", "cells.xml", false);
    request.send(null);


    var xmldoc = request.responseXML;
	

    var xmlrows = xmldoc.getElementsByTagName("cell");
	
	//set values for the grid cells
	for (var r = 0; r < xmlrows.length; r++) {
	var xmlrow = xmlrows[r];
	
	var player=xmlrow.getAttribute("name");
	var playerNumber=0;
	
	if(player=="playerOne")
	{
		playerNumber=1;
	}
	else if(player=="playerTwo")
	{
		playerNumber=2;
	}
	else{playerNumber==0;}
	
	//get the row value
	var row = xmlrow.getElementsByTagName("row")[0].innerHTML;
	//get the column cell
	var column = xmlrow.getElementsByTagName("column")[0].innerHTML;
	
	//assign a value to the cell 
	grid[row][column]=playerNumber;
	
	}
	
	
	//
	for (var r = 0; r < 8; r++)
	{
		for (var y = 0; y < 8; y++)
		{
			console.log("grid "+ r+ y + " " +grid[r][y]);
			
		}
		
	}
	
	//display xml on web page
	if(counter==1)
	{
		var xmlContents = xmldoc.getElementsByTagName("cells")[0];
		
		//display the contents of the xml document on the web page
		document.getElementById('xmlInfo').textContent=xmlContents.innerHTML;
	
		counter++;
	}
	
	
	
	
}
