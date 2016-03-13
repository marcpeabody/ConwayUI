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
});
