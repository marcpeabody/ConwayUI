describe("GameOfLife", function(){
  it("can return the same board display it was given", function(){
    var input = [
      "......O.",
      "OOO...O.",
      "......O.",
      "........",
      "...OO...",
      "...OO..."
    ],
    game = new GameOfLife(input);
    expect(game.drawCurrentBoard()).toBe(input)
  });
});
