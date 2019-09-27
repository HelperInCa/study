"use strict";

(function iife() {
  const jsonstore = 'https://www.jsonstore.io/d2606c2ac4cc80956ee3e30f07c429d35256a785e3e4550e4f127a1250883de5/record';
  const players = [ 'X', 'O' ];
  let currentPlayer = 'X';
  let turn = 0;
  let gameOver = false;
  let winner;

  let board = [ ['', '', ''],['','',''],['','',''] ];
  const nextPlayer = () => currentPlayer = players[ (players.indexOf(currentPlayer)+1) % 2 ];

  const drawSquare = (square, col) => `<div class="square" data-col="${col}">${square || ' '}</div>`;
  const drawRow = (row, index) => `<div class="row" data-row="${index}">${ row.map( drawSquare ).join('') }</div>`;
  const drawBoard = (board) => {
    document.querySelector('.ttt').innerHTML = board.map( drawRow ).join('');
  };

  const saveRecord = (record) => fetch(jsonstore, {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(record)
  })
  // TODO: complete this
  .then( response => response.ok ? response.json() : Promise.reject('poop') )
  .then( result => console.log(result) )
  .catch( err => console.warn(err) );

  const loadRecord = () => fetch(jsonstore)
  .then( response => response.ok ? response.json() : Promise.reject('poop') )
  .then( result => console.log({ load: result}) )
  .catch( err => console.warn(err) );

  const checkForWinner = (board) => {
    const waysToWin = [
      // horizontals
      [[0,0],[0,1],[0,2]],
      [[1,0],[1,1],[1,2]],
      [[2,0],[2,1],[2,2]],
      // verticals
      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[2,2]],
      // diagonals
      [[0,0],[1,1],[2,2]],
      [[0,2],[1,1],[2,0]],
    ];
    let winner;
    for( let way of waysToWin) {
      let r1,r2,r3,c1,c2,c3;
      [ [r1,c1],[r2,c2],[r3,c3] ] = way;
      if( board[r1][c1] && board[r1][c1] === board[r2][c2] && board[r2][c2] === board[r3][c3] ) {
        winner = board[r1][c1];
        break;
      }
    }
    return winner;
  }


  document.querySelector('.ttt').addEventListener('click', (e) => {
    const col = e.target.dataset.col;
    const row = e.target.parentNode.dataset.row;
    if( !gameOver && !board[row][col] ) {
      board[row][col] = currentPlayer;
      turn++;
      if(turn === 9) {
        gameOver = true;
      }
      nextPlayer();
      drawBoard(board);
      winner = checkForWinner(board);
      if(winner) {
        gameOver = true;
      }
      if(gameOver) {
        // TODO: Save updated record
        // saveRecord({X:0, O:0, Tie: 0});
        const status = winner ? `${winner} has won` : `Tie!`;
        document.querySelector('.status').innerText = status;
        document.querySelector('.reset').disabled = false;
      }
    }
  });

  document.querySelector('.reset').addEventListener('click', () => {
    currentPlayer = 'X';
    turn = 0;
    gameOver = false;
    winner;
    board = [ ['', '', ''],['','',''],['','',''] ];
    drawBoard(board);
    document.querySelector('.status').innerText = '';
    document.querySelector('.reset').disabled = true;
  });

  loadRecord();
  // TODO: show loaded record
  drawBoard(board);
})();
