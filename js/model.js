"use strict";

var TETRIS = TETRIS || {};
var model = TETRIS.model = {
  board: {
    blockArray: [],
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
    model.piece = new TETRIS.Piece(0); // what shape
  }
};
