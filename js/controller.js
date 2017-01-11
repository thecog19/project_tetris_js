var TETRIS = TETRIS || {};
var controller = TETRIS.controller = {
  
  init: function() {
    model.init();
    view.init();
    console.log('controller init')
    setInterval(controller.gameLoop, 200);
  },

  gameLoop: function() {
    view.renderBoard(model.board);
    model.fallPiece();
  }

}

$(document).ready(function() {
  console.log('ready')
  controller.init();
})