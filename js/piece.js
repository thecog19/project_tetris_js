var TETRIS = TETRIS || {};
var Piece = TETRIS.Piece = function(params) {
  this.blocks = [new TETRIS.Block(0,0)]; // actually a function to populate consecutive
}