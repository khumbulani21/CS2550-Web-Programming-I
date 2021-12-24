

function showGrid() {
    var countDiv = document.getElementById("grid");
    countDiv.innerHTML = genGrid(8,8);
}

//function to generate a grid
function genGrid( numberOfRows, numberOfcolumns) {
    var html = "<table>";
    var i;
	var j;
    var hClass = "blackSquare";

    for (i = 0; i < numberOfRows; i++) {
		html += "<tr>";
		//for loop for the columns
		for(j = 0; j < numberOfcolumns; j++)
		{
			if ( i%2 ==0) 
			{
				//set the background  color  for an odd row
				if( (j%2 ==0)){hClass = "blackSquare";}
				else{ hClass = "whiteSquare";}
				
			}//end of if
			else  
			{
				//paint the grid for an odd row
				if( (j%2 ==0)){hClass = "whiteSquare";}
				else{ hClass = "blackSquare";  }
			} // end of els
			html += "<td class=\"" + hClass+ "\" >";
			
			html += "</td>";
		}//end inner for loop
	html += "</tr>";
}     // END OF for LOOP

	//close the table
    html += "</table>";
	//return the html string
    return html;
}