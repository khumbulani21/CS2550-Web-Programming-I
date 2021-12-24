

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
   return this.grid[row][column];
 }

