var TETRIS = TETRIS || {};
var Piece = TETRIS.Piece = function(params) {
  this.blocks = [new TETRIS.Block(0,0)]; // actually a function to populate consecutive

  this.fall = function() {
    this.blocks.forEach(function(block) {
      block.y += 1;
    })
  }
}