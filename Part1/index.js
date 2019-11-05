const board = []

const play = id => {
  const playerSpan = document.getElementById('player')
  const clickedBox = document.getElementById(id)

  clickedBox.innerText = playerSpan.innerText
  board[id] = playerSpan.innerText

  if ( board[0] !== undefined && board[0] === board[1] && board[0] === board[2]) {
  alert(`Congratulations, Player ${playerSpan.innerText} wins!`);
  return;
  }
  if ( board[3] !== undefined && board[3] === board[4] && board[3] === board[5]) {
  alert(`Congratulations, Player ${playerSpan.innerText} wins!`);
  return;
  }
  if ( board[6] !== undefined && board[6] === board[7] && board[6] === board[8]) {
  alert(`Congratulations, Player ${playerSpan.innerText} wins!`);
  return;
  }
  if ( board[0] !== undefined && board[0] === board[3] && board[0] === board[6]) {
  alert(`Congratulations, Player ${playerSpan.innerText} wins!`);
  return;
  }
  if ( board[1] !== undefined && board[1] === board[4] && board[1] === board[7]) {
  alert(`Congratulations, Player ${playerSpan.innerText} wins!`);
  return;
  }
  if ( board[2] !== undefined && board[2] === board[5] && board[2] === board[8]) {
  alert(`Congratulations, Player ${playerSpan.innerText} wins!`);
  return;
  }
  if ( board[0] !== undefined && board[0] === board[4] && board[0] === board[8]) {
  alert(`Congratulations, Player ${playerSpan.innerText} wins!`);
  return;
  }
  if ( board[2] !== undefined && board[2] === board[4] && board[2] === board[6]) {
  alert(`Congratulations, Player ${playerSpan.innerText} wins!`);
  return;
  }
  
  let boardFull = true;
  for(let i = 0; i <= 8; i++) {
    board[i] === undefined 
      ? boardFull = false
      : null;
  }

  playerSpan.innerText === 'X' 
  ? playerSpan.innerText = 'O'
  : playerSpan.innerText = 'X'

  boardFull === true ? alert("Cat's game, no winner..."): null

  console.log(board)
}

/* TODO -Black Diamond-
-have reset button appear after alert message goes away
-have reset button clear array, and clear itself
-block array[i] override (add if board[i] !== undefined, don't do it)
-stop altering of array after alert message


*/


