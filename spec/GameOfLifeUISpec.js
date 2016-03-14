describe('GameOfLifeUI', function(){
  var $testArea;

  beforeEach(function(){
    $testArea = $('<div>').addClass('testArea');
    $(document.body).append($testArea);
  });
  afterEach(function(){
    $('.testArea').remove();
  });

  it('renders 48 cells', function(){
    var ui = new GameOfLifeUI($testArea);
    expect($('.testArea .cell').length).toBe(48);
  });

  it('has 10 alive cells in default grid', function(){
    var ui = new GameOfLifeUI($testArea);
    expect($('.testArea .cell.alive').length).toBe(10);
  });

  it('kills alive cells when clicked', function(){
    var ui = new GameOfLifeUI($testArea);
    $('.testArea .cell.alive').click();
    expect($('.testArea .cell.alive').length).toBe(0);
  });

  it('brings dead cells alive when clicked', function(){
    var ui = new GameOfLifeUI($testArea);
    $('.testArea .cell:not(.alive)').click();
    expect($('.testArea .cell.alive').length).toBe(48);
  });
});
