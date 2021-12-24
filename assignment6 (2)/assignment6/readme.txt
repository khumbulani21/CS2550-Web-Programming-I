I used the xml document to create the cells of the game grid. The xml file contents are used to setup the game grid.
I created an xml file cells.xml which contains all of the black cells for the game grid. This is a saved checkers game which 
will be displayed on the game grid.   A cell has a  name  attribute and has elements for the row and column.
 The setGrid javascript method uses the xml file to setup up  the game grid with checkers based on the xml information. 
To be able to change the checkers on the grid you have to change the name attribute for the cell element. The name attribute 
is set to playerOne or playerTwo depending on the player you want to have a checker on that particular cell.  The name attribute 
is then used to set the values of the game grid array. If an xml cell has  an attribute of playerOne a 1 will be set to the correspoding array position. 
For example to add a checker to row 3 column  1 for playerOne you have to set the name attribute for the cell element that has row 3 and column 1 as shown below: 

<cell name="playerOne"><row>3</row><column>1</column></cell>

I also displayed the contents of the xml file on the game grid page below the game grid. 