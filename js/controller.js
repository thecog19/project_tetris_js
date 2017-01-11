var TETRIS = TETRIS || {};
var controller = TETRIS.controller = {
  
  init: function() {
    model.init();
    view.init();
    console.log('controller init')
    setInterval(controller.gameLoop, 1000);
  },

  gameLoop: function() {
    view.renderBoard(model.board);
  }

}

$(document).ready(function() {
  console.log('ready')
  controller.init();
})