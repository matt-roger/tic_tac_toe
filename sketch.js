//good luck modualizing this shit future boulon
//oh yeah, fuck you

var arrLocY = [];
var arrLocX = [];
var cells = [];
var gameBoard = [
'','','',
'','','',
'','',''
];
var sprX;
var turn = true;

function preload() {
  sprX = loadImage('X.png');
  sprO = loadImage('O.png');
}//end of preload

function setup() {
  createCanvas(900, 700);
  arrLocY = [0,height/3, height/3+height/3]
  arrLocX = [0,width/3,width/3+width/3];
}//end of setup

function draw() {
  background(0);
  
  let ctr = 0;
  
  //creates the cells and stores them in an arr
  for(var y = 0; y < 3; y++){
    for(var x = 0; x < 3; x++){
      cells.push(new clickSprites(arrLocX[x], arrLocY[y], ctr));
      cells[ctr].render();
      ctr++;
    }
  }//end of for loops
  
  //mark Xs and Os
  for(var i = 0; i < gameBoard.length; i++){
    if(gameBoard[i] == 'X'){
      image(sprX, cells[i].vec.x, cells[i].vec.y, cells[i].sizeW, cells[i].sizeH);
    }
    else if(gameBoard[i] == 'O'){
      image(sprO, cells[i].vec.x, cells[i].vec.y, cells[i].sizeW, cells[i].sizeH);
    }
  }//end of mark x and o
  
  //chceks if the game has been won
  if(gameWon(gameBoard, 'X')){
    noLoop();
    print('X has won the game');
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text('X HAS WON THE GAME', width/2, height/2);
  }
  else if(gameWon(gameBoard, 'O')){
    noLoop();
    print('O has won the game');
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text('O HAS WON THE GAME', width/2, height/2);
  }
  else if(gameTie(gameBoard)){
    noLoop();
    print('Game ends in a tie');
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text('GAME ENDS IN A TIE', width/2, height/2);
  
  }
}//end of draw

//if the mouse is click and it is inside of a cells it was clicked
function mouseClicked() {
  for(var i = 0; i < cells.length; i++){
      if(cells[i].IsClicked()){
        print(cells[i].tag);
        if(turn == true){
          gameBoard[i] = 'X';
          turn = false;
        }
        else{
          gameBoard[i] = 'O';
          turn = true;
        }
        break;
      }
    }
    print('board ' + gameBoard);
}//end of mouse clicked