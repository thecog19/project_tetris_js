var TETRIS = TETRIS || {};
var Piece = TETRIS.Piece = function(params) {
  this.blocks = [new TETRIS.Block(0,0)]; // actually a function to populate consecutive

  this.fall = function() {
    this.blocks.forEach(function(block) {
      block.y += 1;
    })
  }

  //37 l
  //39 r
  //40 d

  this.move = function(direction){
    switch(direction){
      case 37:
        this.sideMove("l")
        break;
      case 39:
        this.sideMove("r")
        break;
      case 40:
        break;
      default:
        break;
    }
    
  }

  this.sideMove = function(direction){
    if(direction === "l"){
      this.blocks.forEach(function(block){
        block.x -= 1 
      });
    }else if(direction === "r"){
      this.blocks.forEach(function(block){
        block.x += 1 
      });
    }
  }

}