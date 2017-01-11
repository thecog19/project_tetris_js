var TETRIS = TETRIS || {};
var controller = TETRIS.controller = {
  
  init: function() {
    callbacks = {
      pieceAction: controller.pieceAction
    }
    model.init();
    view.init(callbacks);
    console.log('controller init')
    setInterval(controller.gameLoop, 200);
  },

  gameLoop: function() {
    view.renderBoard(model.board);
    model.fallPiece();
  },

  pieceAction: function(event){
    model.pieceAction(event)
  }

}

$(document).ready(function() {
  console.log('ready')
  controller.init();
})