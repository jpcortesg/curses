document.addEventListener('DOMContentLoaded', () => {

  const grid = document.querySelector('.grid');
  let box = Array.from(document.querySelectorAll('.box')); // Is a array
  const scoreDisplay = document.querySelector('#score');
  const strBtn = document.querySelector('#str-btn');
  const width = 10; // Line a break
  let nexRandom = 0;
  let timerId;
  let score = 0;
  const colors = [
    'orange',
    'red',
    'purple',
    'green',
    'blue'
  ]

  // The tetrominoes, figures
  // Position in box
  const lTetromino = [
    [1, 2, width + 1, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ];

  const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]; // Array with figures

  let currentPosition = 4; // Position for default
  let currentRotation = 0;

  // randomly select a Tetromino and it's first rotation
  let random = Math.floor(Math.random() * tetrominoes.length);

  let current = tetrominoes[random][currentRotation];

  // Draw the tretominio
  function draw() {
    current.forEach(index => {
      box[currentPosition + index].classList.add('tetrominoe');
      box[currentPosition + index].style.backgroundColor = colors[random];
    })
  }

  // Undraw the tetromino
  function unDraw() {
    current.forEach(index => {
      box[currentPosition + index].classList.remove('tetrominoe');
      box[currentPosition + index].style.backgroundColor = '';
    })
  }

  // Assign functions to keyCodes
  function control(event) {
    if (event.keyCode === 37) {
      moveLeft();
    } else if (event.keyCode === 38) {
      rotate();
    } else if (event.keyCode === 39) {
      moveRight();
    } else if (event.keyCode === 40) {
      moveDown();
    }
  }
  document.addEventListener('keyup', control);

  // Make the tetromino move down every second
  // timerId = setInterval(moveDown, 1000);

  // move Down function
  function moveDown() {
    unDraw();
    currentPosition += width;
    draw();
    freze();
  }

  // freze function
  function freze() {
    if (current.some(index => box[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => box[currentPosition + index].classList.add('taken'));
      random = nexRandom;
      // Start a new tetrominio (figure) falling
      nexRandom = Math.floor(Math.random() * tetrominoes.length);
      current = tetrominoes[random][currentRotation];
      currentPosition = 4;
      draw();
      displayShape();
      addScore();
      gameOver();
    }
  }

  // Move the tretrominio left, unless is at the edge or there is a blockage
  function moveLeft() {
    unDraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    if (!isAtLeftEdge) currentPosition -= 1;

    if (current.some(index => box[currentPosition + index].classList.contains('taken'))) current += 1;
    draw();
  }

  // Move the tretrominio right, unless is at the edge or there is a blockage
  function moveRight() {
    unDraw();
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === 9);

    if (!isAtRightEdge) currentPosition += 1;

    if (current.some(index => box[currentPosition + index].classList.contains('taken'))) current -= 1;
    draw();
  }

  // Rotate the tetromino
  function rotate() {
    unDraw();
    currentRotation++;
    if (currentRotation == current.length) {
      currentRotation = 0
    }
    current = tetrominoes[random][currentRotation];
    draw();
  }

  // Show up-next tetromino in mini-grid display
  const nextBox = document.querySelectorAll('.nextBox'); // Is a array
  
  const displayWidth = 4;
  let displaIndex = 1;

  // The tretominio without rotations
  const upNextTetorominoes = [
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 2],
    [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
    [displayWidth, displayWidth + 1, displayWidth + 2, displayWidth * 2 + 1],
    [0, 1, displayWidth, displayWidth + 1],
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1]
  ]

  // Display the shape in the mini-grid display
  function displayShape(){
    nextBox.forEach(box =>{
      box.classList.remove('tetrominoe');
      box.style.backgroundColor = '';
    });
    upNextTetorominoes[nexRandom].forEach(index => {
      nextBox[displaIndex + index].classList.add('tetrominoe');
      nextBox[displaIndex + index].style.backgroundColor = colors[nexRandom];
    });
  }

  // Add functionality to the button
  strBtn.addEventListener('click', () => {
    if(timerId){
      clearInterval(timerId);
      timerId = null;
    }else{
      draw();
      timerId = setInterval(moveDown, 1000);
      nexRandom = Math.floor(Math.random()*tetrominoes.length);
      displayShape();
    }
  });

  // Add score
  function addScore(){
    for(let i = 0; i < 199; i += width){
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];
      
      if(row.every(index => box[index].classList.contains('taken'))){
        score += 10;
        scoreDisplay.innerHTML = score;
        row.forEach(index => {
          box[index].classList.remove('taken');
          box[index].classList.remove('tetrominoe');
          box[index].style.backgroundColor = '';
        });

        const boxRemove = box.splice(i, width);
        box = boxRemove.concat(box);
        box.forEach(cell => grid.appendChild(cell));
      }
    }
  }

  // Game over!!
  function gameOver(){
    if(current.some(index => box[currentPosition + index].classList.contains('taken'))){
      scoreDisplay.innerHTML = 'end';
      clearInterval(timerId);
    }
  }
  
});