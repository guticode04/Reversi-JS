/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    // if ( this.color === "black") {
    //     return "white";
    // } else if (this.color === "white") {
    //     return "black"
    // }
    // if ( this.color === "black" ) return "white";
    // if ( this.color === "white" ) return "black";
    // return (this.color === 'black') ? 'white' : 'black';
    return (this.color === "black") ? "white" : "black";
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
   this.color = this.oppColor();
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    if ( this.color === "white" ) return "W";
    if ( this.color === "black" ) return "B";
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE