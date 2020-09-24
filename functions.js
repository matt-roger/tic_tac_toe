function gameTie(board){
  var ctr = 0;
    //checks ties
  for(var i = 0; i < board.length; i++){
    if(board[i] != ''){
      ctr++;
    }
  }

  if(ctr == 9){
    return true;
  }
  else{
    return false;
  }

}//end of game tie


function gameWon(board, player){
  //why do I have those for loops
  won = false;
  
  
  //-------------------------------horizontals
  //top hor
  for(var i = 0; i < 3; i++){
    if(board[0] == player){
      if(board[1] == player){
        if(board[2] == player){
          won = true;
        }
      }
    }
  }
  
  //mid hor
  for(var i = 0; i < 3; i++){
    if(board[3] == player){
      if(board[4] == player){
        if(board[5] == player){
          won = true;
        }
      }
    }
  }
  
  //bot hor
  for(var i = 0; i < 3; i++){
    if(board[6] == player){
      if(board[7] == player){
        if(board[8] == player){
          won = true;
        }
      }
    }
  }
  
  //---------------------------------verticals
  //lef ver
  for(var i = 0; i < 3; i++){
    if(board[0] == player){
      if(board[3] == player){
        if(board[6] == player){
          won = true;
        }
      }
    }
  }
  
  //mid ver
  for(var i = 0; i < 3; i++){
    if(board[1] == player){
      if(board[4] == player){
        if(board[7] == player){
          won = true;
        }
      }
    }
  }
    
  //rig ver
  for(var i = 0; i < 3; i++){
    if(board[2] == player){
      if(board[5] == player){
        if(board[8] == player){
          won = true;
        }
      }
    }
  }
    
  
  //----------------------------Diagonals
  //top lef dia
  for(var i = 0; i < 3; i++){
    if(board[0] == player){
      if(board[4] == player){
        if(board[8] == player){
          won = true;
        }
      }
    }
  }
    
  //top rig dia
  for(var i = 0; i < 3; i++){
    if(board[2] == player){
      if(board[4] == player){
        if(board[6] == player){
          won = true;
        }
      }
    }
  }
    
  return won
}