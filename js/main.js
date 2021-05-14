const squares = new Array(15*15).fill('');

const board = document.getElementById('board');

function createSquares() {
  for (i = 0; i < squares.length; i++) {
    let square = document.createElement('div');
    square.setAttribute('squareNo', i.toString());
    square.setAttribute('class', 'tile');
    square.textContent = i.toString();
    board.appendChild(square);
    if (i === 0 || i % 15 === 0) {
      square.setAttribute('pos', 'start');
      square.textContent = 'start';
    }
    if ((i + 1) % 15 === 0) {
      square.setAttribute('pos', 'end');
      square.textContent = 'end';
    }
  }
}

createSquares();