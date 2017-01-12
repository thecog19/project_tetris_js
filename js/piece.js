var TETRIS = TETRIS || {};
var Piece = TETRIS.Piece = function(params) {
  this.blocks = []
  this.type = params

  this.generateBlocks = function(input){
    var initial;
    var blocks = []
    if(input === 0){
      this.blocks.push(new TETRIS.Block(this.randCoord(10),-1))
    }else if(input === 1){
      initial = this.randCoord(9)
      this.blocks.push (new TETRIS.Block(initial, -2))
      this.blocks.push (new TETRIS.Block(initial + 1, -2))
      this.blocks.push (new TETRIS.Block(initial, -1))
      this.blocks.push (new TETRIS.Block(initial + 1, -1))
    }else if(input === 2){
      initial = this.randCoord(6)
      this.blocks.push (new TETRIS.Block(initial, -1))
      this.blocks.push (new TETRIS.Block(initial + 1, -1))
      this.blocks.push (new TETRIS.Block(initial + 2, -1))
      this.blocks.push (new TETRIS.Block(initial + 3, -1))
    }else if(input === 3){
      initial = this.randCoord(7)
      this.blocks.push (new TETRIS.Block(initial, -1))
      this.blocks.push (new TETRIS.Block(initial + 1, -1))
      this.blocks.push (new TETRIS.Block(initial + 2, -1))
      this.blocks.push (new TETRIS.Block(initial + 2, -2))
    } else if(input === 4){
      initial = this.randCoord(7)
      this.blocks.push (new TETRIS.Block(initial, -1))
      this.blocks.push (new TETRIS.Block(initial + 1, -1))
      this.blocks.push (new TETRIS.Block(initial + 2, -1))
      this.blocks.push (new TETRIS.Block(initial, - 2))
    }else if(input === 5){
      initial = this.randCoord(7)
      this.blocks.push (new TETRIS.Block(initial, -1))
      this.blocks.push (new TETRIS.Block(initial + 1, -1))
      this.blocks.push (new TETRIS.Block(initial + 1, -2))
      this.blocks.push (new TETRIS.Block(initial + 2, - 2))
    }else if(input === 6){
      initial = this.randCoord(7)
      this.blocks.push (new TETRIS.Block(initial, -2))
      this.blocks.push (new TETRIS.Block(initial + 1, -2))
      this.blocks.push (new TETRIS.Block(initial + 1, -1))
      this.blocks.push (new TETRIS.Block(initial + 2, - 1))
    }else if(input === 7){
      initial = this.randCoord(7)
      this.blocks.push (new TETRIS.Block(initial, -1))
      this.blocks.push (new TETRIS.Block(initial + 1, -2))
      this.blocks.push (new TETRIS.Block(initial + 2, -1))
      this.blocks.push (new TETRIS.Block(initial + 1, -1))
    }
  }

  

  this.randCoord = function(max){
    return Math.floor(Math.random() * max)

  }

  this.generateBlocks(params)

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