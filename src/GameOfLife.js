var GameOfLife = (function() {
  var livingCellValue = 'O',
      deadCellValue = '.',
      defaultBoard = [
        "......O.",
        "OOO...O.",
        "......O.",
        "........",
        "...OO...",
        "...OO..."
      ];

  var Game = function(input){
    input = input || defaultBoard;
    this.currentBoardState = this.parseBoard(input);
  };

  Game.prototype.parseBoard = function(input) {
    var arrays = [],
        row;

    for (var y in input) {
      arrays[y] = []; // 2nd dimension

      row = input[y];
      for (var x in row) {
        arrays[y][x] = row.charAt(x);
      }
    }
    return arrays;
  };

  Game.prototype.renderCurrentBoard = function() {
    return this.renderBoard(this.currentBoardState);
  };

  Game.prototype.renderBoard = function(arrays) {
    var textArray = [];

    for (var i in arrays) {
      textArray[i] = arrays[i].join('');
    }

    return textArray;
  };

  Game.prototype.getLivingNeighborCount = function(x,y) {
    x = +x;
    y = +y;
    var neighborCoordinates = [
          [x-1, y-1], [x, y-1], [x+1, y-1],
          [x-1,   y],           [x+1,   y],
          [x-1, y+1], [x, y+1], [x+1, y+1]
        ],
        livingCount = 0;

    for (var i in neighborCoordinates) {
      var coordinate = neighborCoordinates[i],
          neighborX = coordinate[0],
          neighborY = coordinate[1];
      if (neighborX >= 0 && neighborX < 8 && neighborY >= 0 && neighborY < 6) {
        if (this.currentBoardState[neighborY][neighborX] == livingCellValue) {
          livingCount++;
        }
      }
    }

    return livingCount;
  };

  Game.prototype.isCellAlive = function(x,y) {
    return this.currentBoardState[y][x] == livingCellValue;
  };

  Game.prototype.isCellAliveInNextStep = function(x,y) {
    var isAlive = this.isCellAlive(x,y),
        livingNeighborCount = this.getLivingNeighborCount(x,y);
    if (isAlive) {
      return livingNeighborCount == 2 || livingNeighborCount == 3;
    } else {
      return livingNeighborCount == 3;
    }
  }

  Game.prototype.processNextStep = function() {
    var newBoard = [],
        oldBoard = this.currentBoardState,
        oldRow;

    for (var y in oldBoard) {
      oldRow = oldBoard[y];
      newBoard[y] = [];
      for (var x in oldRow) {
        newBoard[y][x] = (this.isCellAliveInNextStep(x,y) ? livingCellValue : deadCellValue);
      }
    }

    this.currentBoardState = newBoard;
    return this.currentBoardState;
  };

  return Game;
})();
