

var columnsToremove=[];
var rowsToremove=[];
var countCheckersToRemove=0;
var clicks=0;

var firstClickedCell;
var possibleRightCell;
var possibleLeftCell;

var playerOne;
var playerTwo;
var playerNameX;
var directionOfKing="";
var leftColumn;
var leftRow;

var playerName="player1";
var counter=1;
var rightColumn;
var rightRow;
//to save row and column of checker to remove
var rowRemove;
var columnRemove;
var remove="no";

var checkersLeft2=12;
var checkersLeft1=12;


var checkCol;
var checkRow;

function showGrid() {
	

    	var countDiv= document.getElementById("grid");
    	countDiv.innerHTML = genGrid(8,8);
	
		setClicks();
		writeToCanvas();
    
}

//function to generate a grid
function genGrid( numberOfRows, numberOfcolumns) {
	promoteToKing();
    var tableOne="table1";
	var html = "<table id=\""+tableOne+ "\">";
	//ids go from 1 to 64 for cells
	var cellNumber=0;
	var i;
    var j;
	var cell;
	var hClass = "blackSquare";
	// ids go from 1 to --
	var id=100;
	//for loop for the rows
    for (i = 0; i < numberOfRows; i++) {
        html += "<tr>";
        //for loop for the columns
        for(j = 0; j < numberOfcolumns; j++)
        {
			//get the value stored in the grid array
            cell= getSquare(i,j);
		//set the black ground color for the cells
			if ( i%2 ==0) 
            {
                //set the background  color  for an odd row
                if( (j%2 ==0))
				{
						hClass = "blackSquare";
             }//end of (j%2 ==0)
				else{ hClass = "whiteSquare";}
                
            }//end of if
            else  
            {
                //paint the grid for an odd row
                if( (j%2 ==0)){hClass = "whiteSquare";}
                else{ hClass = "blackSquare"; }
            } // end of else
				
				cellNumber=cellNumber+1;
				//add a cell
				html += "<td class=\"" + hClass+ "\""+" id=\""+i+""+j+ "\" >  ";
			//here
			
		if(cell==1 && hClass =="blackSquare")
			{
				id=id+1;
				html += "<div class=\""  +"player1"+  "\" " + " id=\"" + id + "\" " + " ></div> "+" </td>" ; 
			 //html += "<div class=\""+"player1"+"\">";	
			}
			else if(cell==2 && hClass=="blackSquare")
			{
				id=id+1;
				html += "<div class=\""  +"player2"+  "\" " + " id=\"" + id + "\" " + " ></div> "+" </td>" ; 
				
			}
			else if(cell==3 && hClass=="blackSquare")
			{
				id=id+1;
				html += "<div class=\""  +"king1"+  "\" " + " id=\"" + id + "\" " + " ></div> "+" </td>" ; 
				
			}
			else if(cell==4 && hClass=="blackSquare")
			{
				id=id+1;
				html += "<div class=\""  +"king2"+  "\" " + " id=\"" + id + "\" " + " ></div> "+" </td>" ; 
				
			}
          
		  html += "</td>"; //close column
        }//end inner for loop
		  html += "</tr>"; //close the row
}     // END OF for LOOP

    //close the table
    html += "</table>";
    //return the html string
    return html;
}



//set clicks for black cells
function setClicks()
{
var cells=document.getElementsByTagName("td");
var num=cells.length;
  
//alert(num);
//cells[i].onclick=col;
for(var i=0;i<num;i++)
{
  //cells[i].onclick=getCell;
  var cellColor=cells[i].className;
  //check if it is a black square then set event listeners
  if(cellColor=="blackSquare")
  {
  cells[i].addEventListener("click", countClicks);
  cells[i].addEventListener("click", gameEngine); 
   // cells[i].addEventListener("click", check);
     if(clicks==1)
   {
	   var temp =cells[i].id;
	  // alert(temp);
	   
   }
  else if( clicks==2)
   {
	  
	//reset the number of clicks
	   clicks=0;  
	 
   }
   

  }
}
 
}

function promoteToKing()
{
	for(var h=0;h<8;h++)
	  {
		  if(h>7)
		  {
			  break;
		  }
		 var value= getSquare(0,h);
		if(value==1)
		{
			setSquare(0,h,3);
		}	
	  }
			for(var g=1;g<8;g++)
	  {
		  if(g>7)
		  {
			  break;
		  }
		 value= getSquare(7,g);
		if(value==2)
		{
			setSquare(7,g,4);
		}	
	  }
}
//count the number of clicks made by a player
function countClicks()
{
	clicks++;
	
	//reset clicks to 1
	if(clicks>2){clicks=1;}
	//alert(clicks);
	
}




//function to change the color of a cell when a user clicks on it	
function gameEngine()
{
	//Set the background color of a cell when clicked on
		if(clicks==1)
		{
			rowsToremove=[]; columnsToremove=[];
		//set background color of the first clicked cell
			this.style.backgroundColor="blue";
			firstClickedCell=this;
			//get column and row of first clicked cell
			var columnX=firstClickedCell.cellIndex;
			var rowX=firstClickedCell.parentNode.rowIndex;
			//get the value of stored in the array index with rowX and columnX
			 playerName=getSquare(rowX,columnX);
			
			////////////////////////////////////////
			//check if the checker belongs to player 2 and is a king
			if(playerName==4 )
			{
				
				playerNameX=4;
				rightColumn=columnX+1;
				rightRow= rowX+1;
				
				//check if cell has a checker
				var checkerNum3;
				//check if row and column are valid
				if(rightRow>-1 && rightRow<8 && rightColumn>-1 &&rightColumn<8)
				{
				 checkerNum3=getSquare(rightRow, rightColumn);
				}
				 
				//check if checker belongs to player 1 or 3
				 if(checkerNum3==1||checkerNum3==3)
				 {
					
						if((rightRow+1) >-1 && (rightRow+1)  <8 && (rightColumn+1)>-1 &&(rightColumn+1)<8)
						{
							checkerNum3=getSquare(rightRow+1, rightColumn+1);
						}
					//check if next cell is empty if so add checker to remove list
					  if(checkerNum3==0)
					  {
						 // alert("added "+ rightColumn +"and "+ rightRow);
						  columnsToremove.push(rightColumn++);
						  rowsToremove.push(rightRow++);
					 }
				}//end
			 while(checkerNum3==0 )
					{
					
					  possibleRightCell=document.getElementById(rightRow++ +""+ rightColumn++);
					  possibleRightCell.style.backgroundColor="grey";
					  //check if column and row is valid
					  if(rightRow >-1 && rightRow  <8 && rightColumn>-1 &&rightColumn<8)
					  {
						  checkerNum3=getSquare(rightRow, rightColumn);
						  //check if next checker belongs to player 1
						  //alert("column "+rightColumn+ "row "+rightRow);
						if(checkerNum3 ==1||checkerNum3==3)
						{
							
							columnsToremove.push(rightColumn);
							rowsToremove.push(rightRow);
							
							
							//alert(columnsToremove[0] +""+ rowsToremove[0]);
							rightRow++;
							rightColumn++;
							 if(rightRow >-1 && rightRow  <8 && rightColumn>-1 &&rightColumn<8)
					  {
								//alert("column "+rightColumn+ "row "+rightRow);
							checkerNum3=getSquare(rightRow, rightColumn);
					  }
							continue;
						}
					}
					  else {break;}
				}
				
				var colO=columnX-1;
				var rowO=rowX-1;
				var  checkerNum33;
				if(rowO >-1 && rowO  <8 && colO>-1 &&colO<8)
				{
					checkerNum33=getSquare(rowO ,colO);
				}
				
				//check next cell
				if(checkerNum33==1||checkerNum33==3)
				 {
					if((rowO-1) >-1 && (rowO-1)  <8 && (colO-1)>-1 &&(colO-1)<8)
						{
							checkerNum33=getSquare(rowO-1, colO-1);
						}
					
					  
					  ///check if next cell is empty if so add checker to remove list
					  if(checkerNum33==0)
					  {
						  columnsToremove.push(colO--);
						  rowsToremove.push(rowO--);
						  directionOfKing="up";
					  }
				
				 }//end if
				//highlight possible moves going towards top left
				while(checkerNum33==0)
				{
					possibleRightCell=document.getElementById(rowO-- +""+ colO--);
					possibleRightCell.style.backgroundColor="grey";
					 if(rowO>-1&&colO>-1)
					  {
						checkerNum33=getSquare(rowO, colO);
						    if(checkerNum33 ==1||checkerNum33==3)
						{
								columnsToremove.push(colO);
							rowsToremove.push(rowO);
							directionOfKing="up";
							
							//alert(columnsToremove[0] +""+ rowsToremove[0]);
							rowO--;
							colO--;
							
							
							checkerNum33=getSquare(rowO, colO);
							
							continue;
						}
					  }
					  else 
					  {
						  break;
						}
						  
						
					
				}
				
				
				
				////////////////////////
				//going towards top right
				var columnTowardsTopRight=columnX+1;
				var rowTowardsTopRight=rowX-1;
				var checkerNum333;
				//check if row and column are valid
				if((rowTowardsTopRight) >-1 && (rowTowardsTopRight)  <8 && (columnTowardsTopRight)>-1 &&(columnTowardsTopRight)<8)
				{
					 checkerNum333=getSquare(rowTowardsTopRight ,columnTowardsTopRight);
				}
				
				if(checkerNum333==1||checkerNum333==3)
				 {
					if((rowTowardsTopRight-1) >-1 && (rowTowardsTopRight-1)  <8 && (columnTowardsTopRight+1)>-1 &&(columnTowardsTopRight+1)<8)
						{
							checkerNum333=getSquare(rowTowardsTopRight-1, columnTowardsTopRight+1);
						}
					
					  
					  ///check if next cell is empty if so add checker to remove list
					  if(checkerNum333==0)
					  {
						  columnsToremove.push(columnTowardsTopRight++);
						  rowsToremove.push(rowTowardsTopRight--);

					  }
				
				 }
				////////////////////////////////
				
				/////////////////////////////////
				//highlight possible moves going towards top right of grid
				while(checkerNum333==0)
				{
				
					possibleRCell=document.getElementById(rowTowardsTopRight-- +""+ columnTowardsTopRight++);
					
					
					possibleRCell.style.backgroundColor="grey";
					console.log(possibleRCell);
				
					if((rowTowardsTopRight) >-1 && (rowTowardsTopRight)  <8 && (columnTowardsTopRight)>-1 &&(columnTowardsTopRight)<8)
					{
					checkerNum333=getSquare(rowTowardsTopRight, columnTowardsTopRight);
					if(checkerNum333 ==1||checkerNum333==3)/////////
						{
							columnsToremove.push(columnTowardsTopRight);
							rowsToremove.push(rowTowardsTopRight);
							directionOfKing="up";
							
						
							rowTowardsTopRight--;
							columnTowardsTopRight++;
							if((rowTowardsTopRight) >-1 && (rowTowardsTopRight)  <8 && (columnTowardsTopRight)>-1 &&(columnTowardsTopRight)<8)
							{
								checkerNum333=getSquare(rowTowardsTopRight, columnTowardsTopRight);
								continue;
							}
						}///////
					}else {break;}
					
				}
				////////////////////////////
				
				
				////////////////////////
				
				var rowTowardsBottomLeft=rowX+1;
				var columnTowardsBottomLeft=columnX-1;
				var checkerNum333;
				//Check to see if ro and column are valid
				if((rowTowardsBottomLeft) >-1 && (rowTowardsBottomLeft)  <8 && (columnTowardsBottomLeft)>-1 &&(columnTowardsBottomLeft)<8)
				{
					 checkerNum333=getSquare(rowTowardsBottomLeft ,columnTowardsBottomLeft);
				}
				
				//check if checker belongs to player 1 or 3
				 if(checkerNum333==1||checkerNum333==3)
				 {
						if((rowTowardsBottomLeft+1) >-1 && (rowTowardsBottomLeft+1)  <8 && (columnTowardsBottomLeft-1)>-1 &&(columnTowardsBottomLeft-1)<8)
						{
							checkerNum333=getSquare(rowTowardsBottomLeft+1, columnTowardsBottomLeft-1);
						}
					//check if next cell is empty if so add checker to remove list
					  if(checkerNum333==0)
					  {
						 //alert("added "+ rightColumn +"and "+ rightRow);
						  columnsToremove.push(columnTowardsBottomLeft--);
						  rowsToremove.push(rowTowardsBottomLeft++);
					 }
				}//end
				///////////////////////////////////////////
				
				
				
				
				
				//check if checker belongs to player 1 or 3
				/////////////////////////////////////////////
				//highlight possible moves going towards top right of grid
				while(checkerNum333==0)
				{
					if((rowTowardsBottomLeft) >-1 && (rowTowardsBottomLeft)  <8 && (columnTowardsBottomLeft)>-1 &&(columnTowardsBottomLeft)<8)
						{
					possibleRCell=document.getElementById(rowTowardsBottomLeft++ +""+ columnTowardsBottomLeft--);
						}
					possibleRCell.style.backgroundColor="grey";
						
					
					
					if((rowTowardsBottomLeft) >-1 && (rowTowardsBottomLeft)  <8 && (columnTowardsBottomLeft)>-1 &&(columnTowardsBottomLeft)<8)
						{
							checkerNum333=getSquare(rowTowardsBottomLeft ,columnTowardsBottomLeft);
						if(checkerNum333 ==1||checkerNum333==3)
							{
								columnsToremove.push(columnTowardsBottomLeft);
							
							rowsToremove.push(rowTowardsBottomLeft);
							rowTowardsBottomLeft++;
							columnTowardsBottomLeft--;
									if((rowTowardsBottomLeft) >-1 && (rowTowardsBottomLeft)  <8 && (columnTowardsBottomLeft)>-1 &&(columnTowardsBottomLeft)<8)
								{
								checkerNum333=getSquare(rowTowardsBottomLeft, columnTowardsBottomLeft);
								
								continue;
								}
							}
					}
					else break;
				
				
				}
				////////////////////////////
				
				}
		
			 if(playerName == 2)
			{
				//highlight cells where a player can move a checker
				//get value for clicked cell
				var clickedCell=document.getElementById(rowX+""+columnX);
				//set rightColumn and rightRow to the one after
				
					rightColumn=columnX+1;
				rightRow= rowX+1;
				//get value stored at rightColumn and rightRow
				var checkerNum;
				if(rightRow<8&& rightColumn>0)
				{
					 checkerNum=getSquare(rightRow, rightColumn);
				}
				
					//check if column of first clicked cell is less than 7
					 if(columnX != 7 )
					 {
								 //check if cell is empty
								 if(checkerNum == 0)
								 {
									 //highlight possible right cell to  move to
									 possibleRightCell=document.getElementById(rightRow +""+ rightColumn);
									 possibleRightCell.style.backgroundColor="grey";
							
								 }//end checkerNum == 0
								 //check if cell is occupied by player one
								 else if( checkerNum==1 ||checkerNum==3 )
								{
								  //check the cell after it
								  var rRowAfter = rightRow+1;
								  var rColumnAfter = rightColumn+1;
								  if(rRowAfter<8&& rRowAfter>-1 &&rColumnAfter<8 &&rColumnAfter>-1 )
								  {
									  var checkerN=getSquare(rRowAfter,rColumnAfter);
								  }
								  
								 if(checkerN == 0) /////////////////
									{
										possibleLeftCell=document.getElementById(rRowAfter+""+rColumnAfter);
										possibleLeftCell.style.backgroundColor="grey";
										
										checkRow=rRowAfter;
										checkCol=rColumnAfter;
										remove="yes";
										
										columnRemove=rightColumn;
										rowRemove=rightRow;
										//alert("checkers left "+checkersLeft2);
									}//end checkerN == 0
								  
									//highlight left cell user can move checker to 
								
								}//end  checkerNum==1 
					}//columnX != 7
					
					//highlight left cell user can move checker to 
				leftRow= rowX+1;
				leftColumn=columnX-1;
				var checkerNu;
				//check for left column
				if(leftRow<8 && leftColumn>0)
				{
					 checkerNu=getSquare(leftRow, leftColumn);
				}
			if(columnX != 0 )
					{
					 if(checkerNu == 0)
						 {
							possibleLeftCell=document.getElementById(leftRow+""+leftColumn);
							possibleLeftCell.style.backgroundColor="grey";
							
						 }
					 
					 else if( checkerNu==1  || checkerNu==3)
					  {
						  //check the cell after it
						  var lRowAfter = leftRow+1;
						  var lColumnAfter = leftColumn-1;
						  if(lRowAfter>-1 && lRowAfter<8 && lColumnAfter>-1 &&lColumnAfter<8)
						  {
						  var checkNumX=getSquare(lRowAfter,lColumnAfter);
						  }
						 if(checkNumX == 0)
							{
								possibleLeftCell=document.getElementById(lRowAfter+""+lColumnAfter);
								possibleLeftCell.style.backgroundColor="grey";
								//ROW after that will be used to check where user clicked
								checkRow=lRowAfter;
								checkCol=lColumnAfter;
								remove="yes";
								
								columnRemove=leftColumn;
								rowRemove=leftRow;
							}// end checkNumX == 0
						  
							//highlight left cell user can move checker to 
							
					  }// end checkerNu==1
					
					} //if( checkerNu==1  || checkerNu==3)
			}//playerName == 2
			
			else if(playerName == 1 )//here
			{
				var clickedCell=document.getElementById(rowX+""+columnX);
				leftColumn=columnX-1;
					leftRow= rowX-1;
				 var checkerNum;
				 //check if cell has a checker
				 if(leftRow >-1 && leftColumn > -1)
				 {
					 checkerNum=getSquare(leftRow,leftColumn);
				 }
				if(columnX != 0 )
				  {
					  
					  
					
					 
					  if(checkerNum == 0)
					  {
							possibleLeftCell=document.getElementById(leftRow+""+leftColumn);
							possibleLeftCell.style.backgroundColor="grey";
					  }
					  else if( checkerNum==2||checkerNum==4 )
					  {
						  //check the cell after it
						  var leftRowAfter = leftRow-1;
						  var leftColumnAfter = leftColumn-1;
						  var checkerN;
						  if(leftRowAfter >-1 && leftColumn > -1  )
						  {
							  
							   checkerN=getSquare(leftRowAfter,leftColumnAfter);
						  }
						  
						 if(checkerN == 0 )
							{
								possibleLeftCell=document.getElementById(leftRowAfter+""+leftColumnAfter);
								possibleLeftCell.style.backgroundColor="grey";
								
								checkRow=leftRowAfter;
								checkCol=leftColumnAfter;
								
								remove="yes";
								
								columnRemove=leftColumn;
								rowRemove=leftRow;
								//alert("checkers left "+checkersLeft2);
							}
						  
							//highlight left cell user can move checker to 
							
					  }
					
				  }//end if for checking if column is not equal to 0
				  
				//highlight right cell user can move checker to 
				 rightRow= rowX-1;
				 rightColumn=columnX+1;
				 
				 var checkerNumR;
				 if( rightRow > -1 && rightColumn < 8)
					 {
						  checkerNumR=getSquare(rightRow,rightColumn);
					 }
				  
				 if(columnX != 7 )
				 {
					
					if(checkerNumR == 0)
					  {
							possibleRightCell=document.getElementById(rightRow+""+rightColumn)
							possibleRightCell.style.backgroundColor="grey";
					  }
					  
				
					  else if( checkerNumR==2|| checkerNumR==4) //if opposite player
					  {
						  //check the cell after it
						  var rightRowAfter = rightRow-1;
						  var rightColumnAfter = rightColumn+1;
						  var checkerX;
						  if(rightRowAfter>-1 && rightColumnAfter<8)
							  {
								   checkerX=getSquare(rightRowAfter,rightColumnAfter);
								}
						  
						 if(checkerX == 0)
							{
								possibleRightCell=document.getElementById(rightRowAfter+""+rightColumnAfter)
								possibleRightCell.style.backgroundColor="grey";
								remove="yes";
								checkRow=rightRowAfter;
								checkCol=rightColumnAfter;
								columnRemove=rightColumn;
								rowRemove=rightRow;
								
							}
						  
							//highlight left cell user can move checker to 
					 }
				 }//end if for checking if column is not equal to 7
				 
				 
				 
				 
			}///
			
		
			if(playerName==3 )
			{
				rightColumn=columnX+1;
				rightRow= rowX+1;
				//check if cell has a checker
				var checkerNum3;
				//check if row and column are valid
				if(rightRow>-1 && rightRow<8 && rightColumn>-1 &&rightColumn<8)
				{
				 checkerNum3=getSquare(rightRow, rightColumn);
				}
				 
				//check if checker belongs to player 1 or 3
				 if(checkerNum3==2||checkerNum3==4)
				 {
					
						if((rightRow+1) >-1 && (rightRow+1)  <8 && (rightColumn+1)>-1 &&(rightColumn+1)<8)
						{
							checkerNum3=getSquare(rightRow+1, rightColumn+1);
						}
					//check if next cell is empty if so add checker to remove list
					  if(checkerNum3==0)
					  {
						 // alert("added "+ rightColumn +"and "+ rightRow);
						  columnsToremove.push(rightColumn++);
						  rowsToremove.push(rightRow++);
					 }
				}//end
			 while(checkerNum3==0 )
					{
					
					  possibleRightCell=document.getElementById(rightRow++ +""+ rightColumn++);
					  possibleRightCell.style.backgroundColor="grey";
					  //check if column and row is valid
					  if(rightRow >-1 && rightRow  <8 && rightColumn>-1 &&rightColumn<8)
					  {
						  checkerNum3=getSquare(rightRow, rightColumn);
						  //check if next checker belongs to player 1
						  //alert("column "+rightColumn+ "row "+rightRow);
						if(checkerNum3==2||checkerNum3==4)
						{
							
							columnsToremove.push(rightColumn);
							rowsToremove.push(rightRow);
							
							
							//alert(columnsToremove[0] +""+ rowsToremove[0]);
							rightRow++;
							rightColumn++;
							
								
								 if(rightRow >-1 && rightRow  <8 && rightColumn>-1 &&rightColumn<8)
					  {
							checkerNum3=getSquare(rightRow, rightColumn);
							continue;
					  }
							
						}
					}
					  else {break;}
				}
				
				var colO=columnX-1;
				var rowO=rowX-1;
				var  checkerNum33;
				if(rowO >-1 && rowO  <8 && colO>-1 &&colO<8)
				{
					checkerNum33=getSquare(rowO ,colO);
				}
				
				//check next cell
				if(checkerNum33==2||checkerNum33==4)
				 {
					if((rowO-1) >-1 && (rowO-1)  <8 && (colO-1)>-1 &&(colO-1)<8)
						{
							checkerNum33=getSquare(rowO-1, colO-1);
						}
					
					  
					  ///check if next cell is empty if so add checker to remove list
					  if(checkerNum33==0)
					  {
						  columnsToremove.push(colO--);
						  rowsToremove.push(rowO--);
						  directionOfKing="up";
					  }
				
				 }//end if
				//highlight possible moves going towards top left
				while(checkerNum33==0)
				{
					possibleRightCell=document.getElementById(rowO-- +""+ colO--);
					possibleRightCell.style.backgroundColor="grey";
					 if(rowO>-1&&colO>-1)
					  {
						checkerNum33=getSquare(rowO, colO);
						    if(checkerNum33==2||checkerNum33==4)
						{
								columnsToremove.push(colO);
							rowsToremove.push(rowO);
							directionOfKing="up";
							//alert(columnsToremove[0] +""+ rowsToremove[0]);
							rowO--;
							colO--;
							
						if(rowO >-1 && rowO  <8 && colO>-1 &&colO<8)
				{
					checkerNum33=getSquare(rowO ,colO);
				}
							continue;
						}
					  }
					  else 
					  {
						  break;
						}
				}
				////////////////////////
				//going towards top right
				var columnTowardsTopRight=columnX+1;
				var rowTowardsTopRight=rowX-1;
				var checkerNum333;
				//check if row and column are valid
				if((rowTowardsTopRight) >-1 && (rowTowardsTopRight)  <8 && (columnTowardsTopRight)>-1 &&(columnTowardsTopRight)<8)
				{
					 checkerNum333=getSquare(rowTowardsTopRight ,columnTowardsTopRight);
				}
				
				if(checkerNum333==2||checkerNum333==4)
				 {
					if((rowTowardsTopRight-1) >-1 && (rowTowardsTopRight-1)  <8 && (columnTowardsTopRight+1)>-1 &&(columnTowardsTopRight+1)<8)
						{
							checkerNum333=getSquare(rowTowardsTopRight-1, columnTowardsTopRight+1);
						}
					
					  
					  ///check if next cell is empty if so add checker to remove list
					  if(checkerNum333==0)
					  {
						  columnsToremove.push(columnTowardsTopRight++);
						  rowsToremove.push(rowTowardsTopRight--);

					  }
				
				 }
				////////////////////////////////
				
				/////////////////////////////////
				//highlight possible moves going towards top right of grid
				while(checkerNum333==0)
				{
				
					possibleRCell=document.getElementById(rowTowardsTopRight-- +""+ columnTowardsTopRight++);
					
					
					possibleRCell.style.backgroundColor="grey";
					console.log(possibleRCell);
				
					if((rowTowardsTopRight) >-1 && (rowTowardsTopRight)  <8 && (columnTowardsTopRight)>-1 &&(columnTowardsTopRight)<8)
					{
					checkerNum333=getSquare(rowTowardsTopRight, columnTowardsTopRight);
					if(checkerNum333==2||checkerNum333==4)/////////
						{
							columnsToremove.push(columnTowardsTopRight);
							rowsToremove.push(rowTowardsTopRight);
							directionOfKing="up";
							
						
							rowTowardsTopRight--;
							columnTowardsTopRight++;
							if((rowTowardsTopRight) >-1 && (rowTowardsTopRight)  <8 && (columnTowardsTopRight)>-1 &&(columnTowardsTopRight)<8)
							{
								checkerNum333=getSquare(rowTowardsTopRight, columnTowardsTopRight);
								continue;
							}
						}///////
					}else {break;}
					
				}
				////////////////////////////
				
				
				////////////////////////
				
				var rowTowardsBottomLeft=rowX+1;
				var columnTowardsBottomLeft=columnX-1;
				var checkerNum333;
				//Check to see if ro and column are valid
				if((rowTowardsBottomLeft) >-1 && (rowTowardsBottomLeft)  <8 && (columnTowardsBottomLeft)>-1 &&(columnTowardsBottomLeft)<8)
				{
					 checkerNum333=getSquare(rowTowardsBottomLeft ,columnTowardsBottomLeft);
				}
				
				//check if checker belongs to player 1 or 3
				 if(checkerNum333==2||checkerNum333==4)
				 {
						if((rowTowardsBottomLeft+1) >-1 && (rowTowardsBottomLeft+1)  <8 && (columnTowardsBottomLeft-1)>-1 &&(columnTowardsBottomLeft-1)<8)
						{
							checkerNum333=getSquare(rowTowardsBottomLeft+1, columnTowardsBottomLeft-1);
						}
					//check if next cell is empty if so add checker to remove list
					  if(checkerNum333==0)
					  {
						 //alert("added "+ rightColumn +"and "+ rightRow);
						  columnsToremove.push(columnTowardsBottomLeft--);
						  rowsToremove.push(rowTowardsBottomLeft++);
					 }
				}//end
				///////////////////////////////////////////
				
				
				
				
				
				//check if checker belongs to player 1 or 3
				/////////////////////////////////////////////
				//highlight possible moves going towards top right of grid
				while(checkerNum333==0)
				{
					if((rowTowardsBottomLeft) >-1 && (rowTowardsBottomLeft)  <8 && (columnTowardsBottomLeft)>-1 &&(columnTowardsBottomLeft)<8)
						{
					possibleRCell=document.getElementById(rowTowardsBottomLeft++ +""+ columnTowardsBottomLeft--);
						}
					possibleRCell.style.backgroundColor="grey";
						
					
					
					if((rowTowardsBottomLeft) >-1 && (rowTowardsBottomLeft)  <8 && (columnTowardsBottomLeft)>-1 &&(columnTowardsBottomLeft)<8)
						{
							checkerNum333=getSquare(rowTowardsBottomLeft ,columnTowardsBottomLeft);
						if(checkerNum333==2||checkerNum333==4)
							{
								columnsToremove.push(columnTowardsBottomLeft);
							
							rowsToremove.push(rowTowardsBottomLeft);
							rowTowardsBottomLeft++;
							columnTowardsBottomLeft--;
									if((rowTowardsBottomLeft) >-1 && (rowTowardsBottomLeft)  <8 && (columnTowardsBottomLeft)>-1 &&(columnTowardsBottomLeft)<8)
								{
								checkerNum333=getSquare(rowTowardsBottomLeft, columnTowardsBottomLeft);
								
								continue;
								}
							}
					}
					else break;
				
				
				}
				////////////////////////////
				
				}
			
		}
		//for second click
		else if(clicks=2)
		{
		
			//second cell that was clicked
			var destinationCell=this;
			var backcol=destinationCell.style.backgroundColor;
			
			//clear the   color from first clicked cell
			firstClickedCell.style.backgroundColor="black";
			
			//clear color from the cell which was highligted as a possible position to move to 
			var tds=document.getElementsByTagName('td');
			//clear the higlighted cells
			for(var e=0;e<tds.length;e++)
			{
				if(tds[e].className=="blackSquare")
				{
					tds[e].style.backgroundColor="black";
				}
			}
			
			var column=firstClickedCell.cellIndex;
			var row=firstClickedCell.parentNode.rowIndex;
			
			//move this to new cell playerNu is the value obtained from game grid array
			var gridValue=getSquare(row,column);
			
			//get row and column of destination cell
			var destinationColumn = destinationCell.cellIndex;
			var destinationRow = destinationCell.parentNode.rowIndex;
			if(playerName == 3 && destinationCell.parentNode.rowIndex > row)
			{
				//check if destination checker is towards top right
				if( destinationCell.cellIndex > column )
				{
					directionOfKing="downRight";
				}
				else if( destinationCell.cellIndex < column )
				{
					directionOfKing="downLeft";
				}
				
			}
			
			if(playerName == 3  && destinationCell.parentNode.rowIndex < row)
			{
				//check if destination checker is towards top right
				if( destinationCell.cellIndex > column )
				{
					directionOfKing="upRight";
				}
				else if( destinationCell.cellIndex < column )
				{
					directionOfKing="upLeft";
				}
			}
			
			if(playerName == 4 && destinationCell.parentNode.rowIndex > row)
			{
				//check if destination checker is towards top right
				if( destinationCell.cellIndex > column )
				{
					directionOfKing="downRight";
				}
				else if( destinationCell.cellIndex < column )
				{
					directionOfKing="downLeft";
				}
				
			}
			
			if(playerName == 4  && destinationCell.parentNode.rowIndex < row)
			{
				//check if destination checker is towards top right
				if( destinationCell.cellIndex > column )
				{
					directionOfKing="upRight";
				}
				else if( destinationCell.cellIndex < column )
				{
					directionOfKing="upLeft";
				}
			}
			//check if player is trying to move checker to valid cell
			if(backcol=="grey")
			{
				if(remove == "yes"  && checkRow==destinationRow && checkCol==destinationColumn)
				{
					setSquare( rowRemove, columnRemove,0);
					if(isGameOver())
				{
					alert("game over "+winner +" wins");
				}
				}//end if
				
				setSquare(row, column, 0);
				
				//update game grid with new player number
				setSquare(destinationRow, destinationColumn, gridValue);
				
					if(gridValue==3 || gridValue==4)
					{
						removeForKing(destinationRow,destinationColumn, directionOfKing);
					}
					
					//reset arrays with checkers to remove
					rowsToremove=[];
					columnsToremove=[];
					
					showGrid();
			}//backcol=="grey"
			
			
		}//check number of clicks
			/////////////////player 3
			
}//end of function

function removeForKing(destinationRow,destinationColumn, direction)
{
	
	for(var i=0;i<rowsToremove.length;i++)
	{
				if(direction=="downLeft" && ( rowsToremove[i] > firstClickedCell.parentNode.rowIndex  && rowsToremove[i]<destinationRow)&&( columnsToremove[i] < firstClickedCell.cellIndex  && columnsToremove[i] >  destinationColumn))
				{
					setSquare(rowsToremove[i], columnsToremove[i], 0);
					//alert("cleared "+ rowsToremove[i]+" "+ columnsToremove[i]);		
					
				}
				if( direction == "downRight" && ( rowsToremove[i] >firstClickedCell.parentNode.rowIndex  && destinationRow > rowsToremove[i] )&&( columnsToremove[i] > firstClickedCell.cellIndex  && columnsToremove[i] <  destinationColumn))
				{
					setSquare(rowsToremove[i], columnsToremove[i], 0);
					//alert("cleared "+ rowsToremove[i]+" "+ columnsToremove[i]);	
					
				}
				 if(direction=="upRight" && ( rowsToremove[i] < firstClickedCell.parentNode.rowIndex  && rowsToremove[i]>destinationRow)&&( columnsToremove[i] > firstClickedCell.cellIndex  && columnsToremove[i]<  destinationColumn))
				{
					setSquare(rowsToremove[i], columnsToremove[i], 0);
					//alert("cleared "+ rowsToremove[i]+" "+ columnsToremove[i]);		
					
				}
				if(direction=="upLeft" && ( rowsToremove[i] < firstClickedCell.parentNode.rowIndex  && rowsToremove[i]>destinationRow)&&( columnsToremove[i] < firstClickedCell.cellIndex  && columnsToremove[i]>  destinationColumn))
				{
					setSquare(rowsToremove[i], columnsToremove[i], 0);
					//alert("cleared "+ rowsToremove[i]+" "+ columnsToremove[i]);		
					
				}
				if(isGameOver())
				{
					alert("game over "+winner +" wins");
				}
				
			
	}
		direction == "none";
		rowsToremove=[]; columnsToremove=[];

				
}

var audio;
//function to play sound
function playSound()
{
	 audio= document.getElementById('myAudio');
	audio.play();
	
	
}

//function to pause the audio
function pauseSound()
{
	
	 audio= document.getElementById('myAudio');
	audio.pause();
}




function writeToCanvas()
{
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
var message="Green checkers have light green King. When you click on a cell it will highilgt possible moves in grey. "
ctx.fillText(message,10,40);
}

 //function to get player names
function getInput()
{

var name1=document.getElementById("name1").value;
var name2=document.getElementById("name2").value;

if (name1==""|| name2 =="" || name1==name2)
{
	alert("enter a valid name");
}
else
{
	

	localStorage.greenPlayer = name2;
	localStorage.redPlayer=name1;
	 window.open("gamegrid.html");
	 
}



}