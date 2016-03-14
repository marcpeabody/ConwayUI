var GameOfLifeUI = (function() {
  var UI = function(appendTo){
    var ui = this;
    var $appendTo = $(appendTo || 'body');
    var $container = $("<div>").addClass('board');
    $appendTo.append($container);
    ui.container = $container;
    ui.game = new GameOfLife();

    ui.container.on('click', '.cell', function(){
      var $cell = $(this);
      $cell.toggleClass('alive');
    });
    ui.container.on('click', '.controls .step', function(){
      // gather cell values
      // create GameOfLife
    });

    ui.render();
  };

  UI.prototype.render = function() {
    var $grid = $('<div>').addClass('grid'),
        $controls = $('<div>').addClass('controls');
    this.container.append($grid);
    this.container.append($controls);

    this.renderGrid();
    this.renderControls();
  };

  UI.prototype.renderGrid = function() {
    var ui = this,
        game = ui.game,
        $grid = this.container.find('.grid');
    for (var y=0; y<6; y++) {
      var $row = $('<div>').addClass('row');
      $grid.append($row);
      for(var x=0; x<8; x++) {
        var $cell = $('<div>').addClass('cell');
        if (game.isCellAlive(x,y)) {
          $cell.addClass('alive');
        }
        $row.append($cell);
      }
    }
  };

  UI.prototype.renderControls = function() {
    var $step = $('<button>Step</button>').addClass('step');
    this.container.find('.controls').append($step);
  };

  return UI;
})();
