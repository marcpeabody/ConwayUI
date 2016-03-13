describe("GameOfLife", function(){
  var textualBoard = [
        "......O.",
        "OOO...O.",
        "......O.",
        "........",
        "...OO...",
        "...OO..."
      ],
      parsedBoard = [
        ['.','.','.','.','.','.','O','.'],
        ['O','O','O','.','.','.','O','.'],
        ['.','.','.','.','.','.','O','.'],
        ['.','.','.','.','.','.','.','.'],
        ['.','.','.','O','O','.','.','.'],
        ['.','.','.','O','O','.','.','.'],
      ],
      fullBoard = [
        "OOOOOOOO",
        "OOOOOOOO",
        "OOOOOOOO",
        "OOOOOOOO",
        "OOOOOOOO",
        "OOOOOOOO"
      ],
      emptyBoard = [
        "........",
        "........",
        "........",
        "........",
        "........",
        "........"
      ]
  ;

  it("can return the same board display it was given", function(){
    var game = new GameOfLife(textualBoard);
    expect(game.renderCurrentBoard()).toEqual(textualBoard);
  });

  it("can parse text board into two dimensional array", function(){
    var game = new GameOfLife(),
        arrays = game.parseBoard(textualBoard);

    expect(arrays).toEqual(parsedBoard);
  });

  it("can render board into text array", function(){
    var game = new GameOfLife(),
        renderedBoard = game.renderBoard(parsedBoard);

    expect(renderedBoard).toEqual(textualBoard);
  });

  describe("getLivingNeighborCount", function(){
    describe('on the example textual board', function(){
      var game = new GameOfLife(textualBoard);

      it("cell 0,0", function(){
        expect(game.getLivingNeighborCount(0,0)).toBe(2);
      });
      it("cell 1,0", function(){
        expect(game.getLivingNeighborCount(1,0)).toBe(3);
      });
      it("cell 1,1", function(){
        expect(game.getLivingNeighborCount(1,1)).toBe(2);
      });
    });

    describe('on a full board', function(){
      var game = new GameOfLife(fullBoard);

      it("cell 0,0", function(){
        expect(game.getLivingNeighborCount(0,0)).toBe(3);
      });
      it("cell 1,0", function(){
        expect(game.getLivingNeighborCount(1,0)).toBe(5);
      });
      it("cell 1,1", function(){
        expect(game.getLivingNeighborCount(1,1)).toBe(8);
      });
    });

    describe('on an empty board', function(){
      var game = new GameOfLife(emptyBoard);

      it("cell 0,0", function(){
        expect(game.getLivingNeighborCount(0,0)).toBe(0);
      });
      it("cell 1,0", function(){
        expect(game.getLivingNeighborCount(1,0)).toBe(0);
      });
      it("cell 1,1", function(){
        expect(game.getLivingNeighborCount(1,1)).toBe(0);
      });
    });
  });

});
