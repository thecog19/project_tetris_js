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
      model.lockPiece();
    } else {
      model.board.piece.fall();
    }
  },

  stopConditions: function() {
    var stop = false;
    model.board.piece.blocks.forEach(function(block) {
      stop = block.y === model.board.edges.bottom - 1;
      model.board.blockArray.forEach(function(staticBlock) {
        stop = model.pieceAtStatic(block, staticBlock);
      })
    })
    
    return stop;
  },

  lockPiece: function() {
    model.board.piece.blocks.forEach(function(block) {
      model.board.blockArray.push(block);
    });
    model.generatePiece();
  },

  pieceAtStatic: function(block, staticBlock) {
    return block.x === staticBlock.x
      && block.y -1 === staticBlock.y
  }

};
