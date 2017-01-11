var TETRIS = TETRIS || {};
var view = TETRIS.view = {
  
  init: function() {
    view.initializeBoard();
  },

  renderBoard: function(board) {
    $('.active').removeClass('active');
    board.blockArray.forEach(function(block){
      view.renderObject(block.x, block.y, "static")
    });

    board.piece.blocks.forEach(function(block){
      view.renderObject(block.x, block.y, "active")
    });
  },

  renderObject: function(x,y, klass){
    var $coords = $(".cell").filter("[data-x='" + x +"']").filter("[data-y='" + y +"']");
    $coords.addClass("block").addClass(klass)
  },

  initializeBoard: function() {
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 10; col++) {
        var $div = $('<div>').addClass('cell')
        .attr({
          "data-x": col,
          "data-y": row
        });
        $('#board').append($div);
      }
      $('#board').append('<br>');
    }
  }

}