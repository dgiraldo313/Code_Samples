//Command Line ticTacToe game

'use strict';

// import prompt for user input
const readlineSync = require('readline-sync');

// Build game board
// PARAMS x and y coordinates
const buildBoard = (x, y) => {
  let board = [];

  // two dimensional array that builds board depending on dimensions
  for (let i = 0; i < x; i++) {
    let column = [];
    for (let a = 0; a < y; a++) {
      column[a] = ' ';
    }

    board[i] = column;
  }

  return board;
};

// Prints Board to console
const printBoard = (board) => {
  let boardStr = '';

  //assign board X coordinates
  board.map((row, index) => {
    let coordinate = index + 1;
    boardStr += '  ' + coordinate + ' ';
  });

  boardStr += '\n';

  // draw board
  board.map((row, boardIndex) => {
    // assign board Y coordinates
    boardStr += boardIndex + 1;
    row.map((item, rowIndex) => {
      boardStr += ' ' + item;
      boardStr += row.length - 1 !== rowIndex ? ' |' : '';
    });
    boardStr += '\n';
    boardStr += board.length - 1  !== boardIndex ? ' --- ' : '';
    boardStr += board.length - 1  !== boardIndex ? '--- '.repeat(board.length - 1) : '';
    boardStr += '\n';
  });

  console.log(boardStr);
};

//Make a move
//PARAMS= X and Y coordinates
const makeMove = (x, y, shape, board) => {
  //adjust by one margin to start board at 1 by 1, instead of 0 by 0
  x -= 1;
  y -= 1;

  let isMoveValid = () => {
    //first check if location is valid or if location is not empty
    let isValid = x > board.length - 1 ||
                  y > board[0].length - 1 ||
                  x < 0 ||
                  y < 0 ||
                  board[x][y] !== ' '
                  ?
                  false
                  :
                  true;
    return isValid;
  };

  //then write to board
  let writeToBoard = () => {
    // take coordinates and assign shape to location in board
    board[x][y] = shape;
  };

  //last check if player is winner

  //Make move
  //check if move is valid
  if (isMoveValid()) {
    // if it is valid, write move to board
    writeToBoard();
    return true;

  }else {
    console.log('Invalid Move. Please try again!');
    return false;
  }
};

const isWinner = (shape, board) => {
  //check rows
  let checkRows = () => {
    let isMatch = false;
    board.map((row) => {
      let matchCount = 0;
      row.map((item) => {
        matchCount += item === shape ? 1 : 0;
      });

      //if number of matches equal the number of columns available then current player wins
      if (matchCount === board[0].length) {
        isMatch = true;
      }
    });

    // if not match count is not equal the number of columns return false
    return isMatch;
  };

  //check columns
  let checkColumns = () => {
    let isMatch = false;
    for (let i = 0; i < board.length; i++) {
      let matchCount = 0;
      board.map((row) => {
        matchCount += row[i] === shape ? 1 : 0;
      });

      //if number of matches equal the number of rows available then current player wins
      if (matchCount === board.length) {
        isMatch = true;
      }

    }

    // if not match count is not equal the number of rows return false
    return isMatch;

  };

  //check diagonal from left to right
  let checkLeftToRight = () => {
    let matchCount = 0;
    board.map((row, index) => {
      matchCount += row[index] === shape ? 1 : 0;
    });

    //if number of matches equal the number of rows available then current player wins
    return matchCount === board.length;
  };

  //check diagonal from left to right
  let checkRightToLeft = () => {
    let matchCount = 0;
    board.map((row, index) => {
      matchCount += row[(row.length - 1) - index] === shape ? 1 : 0;
    });

    //if number of matches equal the number of rows available then current player wins
    return matchCount === board.length;
  };

  // console.log(checkRows());
  // console.log(checkColumns());
  // console.log(checkLeftToRight());
  // console.log(checkRightToLeft());

  //return true if any matches
  return checkRows() ||
         checkColumns() ||
         checkLeftToRight() ||
         checkRightToLeft();
};

// game starter
//tic tac toe

const ticTacToe = (x, y) => {
  //build board
  let board = buildBoard(x, y);

  //Ask players to choose their shape
  printBoard(board);
  let totalMoves = 0;
  let player = 1;
  let shape = 'X';
  let yCoor;
  let xCoor;

  while (totalMoves <= (x * y)) {
    console.log(`Player ${player} turn!`);
    shape = player === 1 ? 'X' : 'O';
    yCoor = readlineSync.question('yCoor: ');
    xCoor = readlineSync.question('xCoor: ');

    while (!makeMove(yCoor, xCoor, shape, board)) {
      yCoor = readlineSync.question('yCoor: ');
      xCoor = readlineSync.question('xCoor: ');
    }

    // let xCoor = 1;
    // let yCoor = 1;

    printBoard(board);

    //increase count of total moves
    totalMoves++;

    // if there is a winner finish game
    if (isWinner(shape, board)) {
      break;
    }

    // Change current player
    player = player === 1 ? player + 1 : player - 1;

  }

  console.log(`Game Over! \nPlayer ${player} won!`);
};

ticTacToe(3, 3);
