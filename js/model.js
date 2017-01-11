"use strict";

var TETRIS = TETRIS || {};
var model = TETRIS.model = {
  board: {
    blockArray: [],
    piece: undefined,
    edges: {
      top: 0,
      right: 10,
      bottom: 20,
      left: 0
    }
  },

  init: function() {
    model.generatePiece();
  },

  generatePiece: function() {
    model.board.piece = new TETRIS.Piece(0); // what shape
  }
};
