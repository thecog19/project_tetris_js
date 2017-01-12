var TETRIS = TETRIS || {};
var view = TETRIS.view = {
  
  listener: undefined,

  init: function(callbacks) {
    $(document).off()
    view.initializeBoard();
    view.listener = $(document).keydown(callbacks.pieceAction)
  },

  renderBoard: function(board) {
    $('.active').removeClass().addClass("cell");
    $('.static').removeClass().addClass("cell");
    view.updateNumbers(board);
    board.blockArray.forEach(function(block){
      view.renderObject(block.x, block.y, "static")
    });

    board.piece.blocks.forEach(function(block){
      view.renderObject(block.x, block.y, "active", board.piece.type)
    });
  },

  updateNumbers: function(board){
    $("#score").text(board.score)
    $("#rows").text(board.rowsCompleted)
  },

  renderObject: function(x,y, klass, color){
    var $coords = $(".cell").filter("[data-x='" + x +"']").filter("[data-y='" + y +"']");
    $coords.addClass("block").addClass(klass)
    if(!!color){
      if (color === 1){
        $coords.addClass("red")
      }else if(color === 2){
        $coords.addClass("magenta")
      }else if(color === 3){
        $coords.addClass("yellow")
      }else if(color === 4){
        $coords.addClass("cyan")
      }else if(color === 5){
        $coords.addClass("blue")
      }else if(color === 6){
        $coords.addClass("orange")
      }else{
        $coords.addClass("green")
      }
     
    }
  },

  gameOver: function(){
    $("#defeat").css("display", "inline-block")
  },

  initializeBoard: function() {
    $("#defeat").hide()
    $('.cell').remove()
    $('br').remove()
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