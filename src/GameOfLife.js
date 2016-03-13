var GameOfLife = (function() {
  var Game = function(input){
    this.currentBoardState = this.parseBoard(input);
  };

  Game.prototype.parseBoard = function(input) {
    var arrays = [],
        row;

    for (var i in input) {
      arrays[i] = []; // 2nd dimension

      row = input[i];
      for (var j in row) {
        arrays[i][j] = row.charAt(j);
      }
    }
    return arrays;
  }

  Game.prototype.renderCurrentBoard = function() {
    return this.renderBoard(this.currentBoardState);
  }

  Game.prototype.renderBoard = function(arrays) {
    // return this.currentBoardState;
    var textArray = [];

    for (var i in arrays) {
      textArray[i] = arrays[i].join('');
    }

    return textArray;
  }

  return Game;
})();
