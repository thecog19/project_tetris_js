"use strict";

var TETRIS = TETRIS || {};
var model = TETRIS.model = {
  board: new TETRIS.Board({top: 0, left: 0, right: 10, bottom: 20}),

  init: function() {
    model.generatePiece();
  },

  generatePiece: function() {
    model.board.piece = new TETRIS.Piece(0); // what shape
  },

  fallPiece: function() {
    if (model.stopConditions()) {
      console.log("stop conditions met")
      model.lockPiece();
      return 'stopped';
    } else {
      model.board.piece.fall();
    }
  },

  stopConditions: function() {
    var atBottom = false;
    var atStatic = false;
    model.board.piece.blocks.forEach(function(block) {
      atBottom = block.y === model.board.edges.bottom - 1;
      // console.log(`atBottom ${atBottom}`)
      model.board.blockArray.forEach(function(staticBlock) {
        atStatic = model.pieceAtStatic(block, staticBlock);
        console.log(`atStatic ${atStatic}`)
      })
    })
    
    return atBottom || atStatic;
  },

  lockPiece: function() {
    model.board.piece.blocks.forEach(function(block) {
      model.board.blockArray.push(block);
    });
    model.generatePiece();
  },

  pieceAtStatic: function(block, staticBlock) {
    return block.x === staticBlock.x
      && block.y + 1 === staticBlock.y;
  },

  pieceAction: function(event){
    // make sure move is valid before passing on
    if (event.which === 40) {
      model.dropPiece();
    }
    model.board.piece.move(event.which)
  },

  dropPiece: function() {
    var stopped;
    while (!stopped) {
      stopped = this.fallPiece();
    }
  }

};
