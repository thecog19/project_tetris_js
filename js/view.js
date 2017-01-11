var TETRIS = TETRIS || {};
var view = TETRIS.view = {
  
  init: function() {
    view.initializeBoard();
  },

  renderBoard: function(board) {
    
  },

  initializeBoard: function() {
    for (var row = 0; row < 20; row++) {
      for (var cell = 0; cell < 10; cell++) {
        var $div = $('<div>').addClass('cell');
        $('#board').append($div);
      }
      $('#board').append('<br>');
    }
  }

}