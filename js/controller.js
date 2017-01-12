var TETRIS = TETRIS || {};
var controller = TETRIS.controller = {
  
  interval: undefined,
  init: function() {
    callbacks = {
      pieceAction: controller.pieceAction
    }
    model.init();
    view.init(callbacks);
    controller.interval = setInterval(controller.gameLoop, 200);
  },

  gameLoop: function() {
    view.renderBoard(model.board);
    if(!!model.justCompleted){
      model.checkCompletedRows()
      model.justCompleted = false
    }
    model.fallPiece();
    if(model.gameOver()){
      view.gameOver()
      clearInterval(controller.interval) 
      controller.resetGame()

    }
  },

  resetGame: function(){
    model.board = new TETRIS.Board({top: 0, left: 0, right: 10, bottom: 20})
    model.justCompleted = undefined
    setTimeout(controller.init,4000)
  },

  pieceAction: function(event){
    model.pieceAction(event)
    view.renderBoard(model.board);
  }

}

$(document).ready(function() {
  console.log('ready')
  controller.init();
})