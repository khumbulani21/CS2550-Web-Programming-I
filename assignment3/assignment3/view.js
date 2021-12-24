function showGrid() {
    var countDiv= document.getElementById("grid");
    countDiv.innerHTML = genGrid(8,8);

    
}

//function to generate a grid
function genGrid( numberOfRows, numberOfcolumns) {
    var html = "<table>";
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
            } // end of els
            html += "<td class=\"" + hClass+ "\" >";
			//console.log(cell);
		  if(i==0 && j==0)
		   {
			 html += "<div class=\""+"king1"+"\"></div>" ;  
		   }
		   else if(i==7 && j==7)
		   {
			 html += "<div class=\""+"king2"+"\"></div>" ;  
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

