
 //array for setting up a new game
 var grid= [
    [2, 0, 2, 0, 2, 0, 2, 0], 
    [0, 2, 0, 2, 0, 2, 0, 2], 

    [2, 0, 2, 0, 2, 0, 2 ,0], 
    [0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 1, 0, 1 , 0, 1, 0,1],
	
    [1, 0, 1, 0, 1, 0, 1, 0], 
    [0, 1, 0, 1, 0, 1, 0, 1]
	  ];

var next=1;
var gameOver = false;
//getSquare function
function getSquare(row,column)
{
   return this.grid[row][column];
 }

 //array for setting up a new game

function getNewGame()
{
    return grid;
}


//logic for checker 

var checkerNumber;
var checkerPosition;
var numberOfMoves;
var king;

function getCheckerNumber()
{

return checkerNumber;
}
function getCheckerPosition()
{

return checkerPosition;
}
function getNumMoves()
{
return numberOfMoves;
}
function isKing()
{
return king;
}

