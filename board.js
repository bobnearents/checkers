$(document).ready(function () {
    
    function generateBoard(boxColor) {
        var makeDiv = $('<div class=' + boxColor + '></div>');
        makeDiv.appendTo('#board');
        if (boxColor == "blackBox"){
            makeDiv.droppable({
                accept:"#player1pieces"
            });        
        }
        return makeDiv;
        
    };
    
    function generatePieces(whichPlayer) {
        var makeDiv = $('<div class="pieces" id=' + whichPlayer + '></div>');
        if (whichPlayer == "player1pieces"){
            var newDiv = makeDiv.appendTo('.blackBox:lt(12)');        
        }
        else {
            var newDiv = makeDiv.appendTo('.blackBox:gt(19)');
        };

        
        
        return newDiv.draggable({
            revert:"invalid"});
    };
    
    for (var j = 0; j < 4; j++) {
   //the 2 child loops create the first 2 rows, alternating colors
        for (var i = 0; i < 4; i++) {
            generateBoard("blackBox");
            generateBoard("whiteBox");
        }
        for (var i = 0; i < 4; i++) {
            generateBoard("whiteBox");
            generateBoard("blackBox");
        }
    }

    generatePieces("player1pieces");
    generatePieces("player2pieces");
    
    
});





/**
a box is only droppable if it is black and if it has piece next to it.
Turn off draggable if it is not a pieces turn
or jut make an accept function
**/
