var GameOfLife = (function() {
  var livingCellValue = 'O';

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
  };

  Game.prototype.renderCurrentBoard = function() {
    return this.renderBoard(this.currentBoardState);
  };

  Game.prototype.renderBoard = function(arrays) {
    // return this.currentBoardState;
    var textArray = [];

    for (var i in arrays) {
      textArray[i] = arrays[i].join('');
    }

    return textArray;
  };

  Game.prototype.getLivingNeighborCount = function(x,y) {
    var b = this.currentBoardState,
        neighborCoordinates = [
          [x-1, y-1], [x, y-1], [x+1, y-1],
          [x-1,   y],           [x+1,   y],
          [x-1, y+1], [x, y+1], [x+1, y+1]
        ],
        livingCount = 0;

    for (var i in neighborCoordinates) {
      var coordinate = neighborCoordinates[i],
          x = coordinate[0],
          y = coordinate[1];
      if (x >= 0 && x < 8 && y >= 0 && y < 6) {
        if (this.currentBoardState[y][x] == livingCellValue) {
          livingCount++;
        }
      }
    }

    return livingCount;
  };

  Game.prototype.isCellAliveInNextStep = function(x,y) {
    var isAlive = this.currentBoardState[y][x] == livingCellValue,
        livingNeighborCount = this.getLivingNeighborCount(x,y);
    if (isAlive) {
      return livingNeighborCount == 2 || livingNeighborCount == 3;
    } else {
      return livingNeighborCount == 3;
    }
  }

  return Game;
})();
