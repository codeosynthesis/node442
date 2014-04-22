#!/usr/lib/node

/**
    A class representing a game piece

    @Class Piece
    @constructor Piece
    @param type {String} the type of piece
    @param x {int} x location of piece
    @param y {int} y location of piece
    @return {Piece} a new Piece object
*/

function Piece(type,x,y)
{
    /**
        @property type {String} The type of piece 
        @final
    */
    this.type=type;
    this.x=x;
    this.y=y;
}

/**
    
*/
Board.prototype.move=function(x,y){
    this.x =x;
    this.y =y
}
