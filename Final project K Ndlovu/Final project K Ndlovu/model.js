
 //array for setting up a new game
 var grid= [
    [2, 0, 2, 0, 2, 0, 2, 0], 
    [0, 2, 0, 2, 0, 2, 0, 0], 

    [2, 0, 2, 0, 2, 0, 2, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 1, 0, 1, 0, 1, 0, 1],
	
    [1, 0, 1, 0, 1, 0, 1, 0], 
    [0, 1, 0, 1, 0, 1, 0, 1]
	  ];
	
var winner;

var gameOver = false;
//function to check the number of checkers for player 1
function countCheckers1()
{
	var totalCheckers=0;

	for(var i=0;i<8;i++)
	{
		for(var j=0;j<8;j++)
		{
			
			
			if(grid[i][j]==1||grid[i][j]==3)
			{
				totalCheckers++;
			}
			
		}
		
	}
	return totalCheckers;
}
//function to check the number of checkers for player 2
function countCheckers2()
{
	var totalCheckers=0;

	for(var i=0;i<8;i++)
	{
		for(var j=0;j<8;j++)
		{
			
			
			if(grid[i][j]==2||grid[i][j]==4)
			{
				totalCheckers++;
			}
			
		}
		
	}
	return totalCheckers;
}



//function to check if game is over
function isGameOver()
{
	
	if(countCheckers1()==0)
	{
		
		winner=localStorage.greenPlayer;
		return true;
	}
	else if(countCheckers2()==0)
	{
		
	
	
			localStorage.redPlayer;
	
		winner=localStorage.redPlayer;;
		return true;
	}
	else return false;
}



//gets the value stored in a particular index in the array
function getSquare(row,column)
{
   return this.grid[row][column];
}

 function setSquare(row, column, newValue)
{
   return this.grid[row][column]=newValue;
 }
 //array for setting up a new game
function isEmpty(row, column)
{
	return grid[row][column];
} 
 
 
 
 
function getNewGame()
{
    return grid;
}


//logic for checker 

var checkerNumber;
var checkerPosition;
var numberOfMoves;
var king;


function removeChecker(id,column, row)
{
	
	//remove element from grid array
	grid[column][row]=0;
	
	
}
var players1;
var players2;
function getData()
{
	
}

