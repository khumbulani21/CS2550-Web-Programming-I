
function showGrid() {
    	var countDiv= document.getElementById("grid");
    	countDiv.innerHTML = genGrid(8,8);
	moveCircle();
	setClicks();
    
}

//function to generate a grid
function genGrid( numberOfRows, numberOfcolumns) {

    var tableOne="table1";
	 
    var html = "<table id=\""+tableOne+ "\">";

    var i;
    var j;
    var cell;
	var player;
    var hClass = "blackSquare";
	
	//for loop for the rows
    for (i = 0; i < numberOfRows; i++) {
        html += "<tr>";
        //for loop for the columns
        for(j = 0; j < numberOfcolumns; j++)
        {
			//get the value stored in the grid array
            cell= getSquare(i,j);
		
			if ( i%2 ==0) 
            {
                //set the background  color  for an odd row
                if( (j%2 ==0)){
                hClass = "blackSquare";
                //player=cell;

            }
                else{ hClass = "whiteSquare";}
                
            }//end of if
            else  
            {
                //paint the grid for an odd row
                if( (j%2 ==0)){hClass = "whiteSquare";}
                else{ hClass = "blackSquare"; 
                //player=cell;

             }
            } // end of else
            html += "<td class=\"" + hClass+ "\" >";
			//console.log(cell);
		  if(i==0 && j==0)
		   {
			 html += "<div class=\""+"player2"+"\"></div>" ;  
		   }
		   else if(i==7 && j==7)
		   {
			 html += "<div class=\""+"player1"+"\"></div>" ;  
		   }
			else if(cell==1 && hClass =="blackSquare")
			{
			 html += "<div class=\""+"player1"+"\">";	
			}
			else if(cell==2 && hClass=="blackSquare")
			{
				
			
				 html += "<div class=\""+"player2"+"\">" ;
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




function setClicks()
{
var cells=document.getElementsByTagName("td");
var num=cells.length;
  
//alert(num);
//cells[i].onclick=col;
for(var i=0;i<num;i++)
{
  cells[i].onclick=getCell;
  cells[i].onclick=col;
  
}
}

//function to change the color of a cell when a user clicks on it
function col()
{
        //Set the background color of a cell when clicked on
	this.style.backgroundColor="red";
	var cell=this.cellIndex;
	var row=this.parentNode.rowIndex;
	var cordinate=row + " "+ cell;
		
	document.getElementById("cell").innerHTML=cell;
	document.getElementById("row").innerHTML=row;
    
  
}

function getCell()
{
  
  var cell=this.cellIndex;
  var row=this.parentNode.rowIndex;
  
}


function getInput()
{
//get the index and value of the selected option
var selectedColor =document.getElementById("selection").selectedIndex;
var x=document.getElementsByTagName("option")[selectedColor].value;

//display the color selecte by user and the player names
var message="color : "+ x + " Player 1:  "+document.getElementById("name1").value + "Player 2: "+document.getElementById("name2").value

alert(message);

}

//END OF VIEW


