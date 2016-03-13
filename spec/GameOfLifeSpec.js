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

  describe('isCellAliveInNextStep', function(){
    var game = new GameOfLife(textualBoard);

    it("cell 0,0 is dead and touching 2 stays dead", function(){
      expect(game.isCellAliveInNextStep(0,0)).toBeFalsy();
    });
    it("cell 1,0 is dead and touching 3 comes alive", function(){
      expect(game.isCellAliveInNextStep(1,0)).toBeTruthy();
    });
    it("cell 0,1 is alive and touching 1 dies", function(){
      expect(game.isCellAliveInNextStep(0,1)).toBeFalsy();
    });
    it("cell 1,1 is alive and touching 2 stays alive", function(){
      expect(game.isCellAliveInNextStep(1,1)).toBeTruthy();
    });
    it("cell 3,5 is alive and touching 3 stays alive", function(){
      expect(game.isCellAliveInNextStep(3,5)).toBeTruthy();
    });
  });
});
