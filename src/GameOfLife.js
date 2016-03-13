var GameOfLife = (function() {
  var Game = function(input){
    this.currentBoardState = input;
  };
  Game.prototype.drawCurrentBoard = function(){
    return this.currentBoardState;
  }

  return Game;
})();
