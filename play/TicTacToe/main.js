// Selecting all required elements
const selectBox = document.querySelector('.select-box'),
selectXBtn = document.querySelector('.playerX'),
selectOBtn = document.querySelector('.playerO'),
playBoard = document.querySelector('.play-board'),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players'),
resultBox = document.querySelector('.result-box'),
wonText = document.querySelector('.won-text'),
replayBtn = document.querySelector('.replay')

window.onload = () => { // Once window loaded 
  for (let i = 0; i < allBox.length; i++) { //add onclick attribute in all available span
    allBox[i].setAttribute('onclick', 'clickedBox(this)') // Add attribute for each box
  }

  selectXBtn.onclick = () => { // When player X is selected
    selectBox.classList.add('hide') // Hide de select box on playerX button clicked
    playBoard.classList.add('show') //show the playboard section
  }

  selectOBtn.onclick = () => { // When player Y is selected
    selectBox.classList.add('hide') // Hide de select box on playerX button clicked
    playBoard.classList.add('show') //show the playboard section
    players.setAttribute('class', 'players active player') // Adding three class names in players element
  }
}

let playerXIcon = 'fas fa-times' // To change the icon for X
let playerOIcon = "far fa-circle" // To change the icon for O
let playerSign = "X" // Suppose player will be X
let runBot = true

// User click function
const clickedBox = (element) => {
  if(players.classList.contains('player')){ // if player element contains .player 
    element.innerHTML = `<i class="${playerOIcon}"></i>` // Adding circle icon tag inside user clcked element
    players.classList.remove('active') // To change of player
    // If player will be O then we'll change the sign
    playerSign = "O" // Change of player
    element.setAttribute('id', playerSign) // Add attribute to box
  }else{
    element.innerHTML = `<i class="${playerXIcon}"></i>` // Adding cross icon tag inside user clcked element
    players.classList.add('active') // To change of player
    element.setAttribute('id', playerSign) // Add attribute to box
  }

  selectWinner() // Called the winner function
  playBoard.style.pointerEvents = "none" // So that it doesn't work
  element.style.pointerEvents = "none" // Once user select any box then that box can't be selected again
  let randomDelayTime = (Math.random() * 1000 + 200).toFixed() // Generating random time delay so bot will delay randomly to select box
  setTimeout(() => {
    bot(runBot) // Callinf bot function
  }, randomDelayTime) // Passing random delay 
}

// bot click function
const bot = (runBot) => {
  if (runBot) {
    // First change the playerSign... so if user has X value in id then bot will have O
    playerSign = 'O'; 
    let array = [] // Cratin empty array... we'll store unselected box index in this array

    for (let i = 0; i < allBox.length; i++) {
      if(allBox[i].childElementCount == 0){ // If span no any child element
        array.push(i); // Inserting unclicked or unselected boxes inside array means that span has no children
      }
    }

    let randomBox = array[Math.floor(Math.random() * array.length)] // Getting random index from array so bot will select random unselected box
    if(array.length > 0){
      if(players.classList.contains('player')){ // if player element contains .player
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>` // Adding cross icon tag inside user clcked element
        players.classList.add('active')
        // If user is O then the box id value will be X
        playerSign = 'X'
        allBox[randomBox].setAttribute('id', playerSign)
      } else{
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>` // Adding circle icon tag inside user clcked element
        players.classList.remove('active')
        allBox[randomBox].setAttribute('id', playerSign)
      }
      selectWinner() // Calling winner function
    }

    allBox[randomBox].style.pointerEvents = 'none'; // Once bot select any box then user can't select or click on that box
    playBoard.style.pointerEvents = "auto"
    playerSign = 'X' // Passing the X value
  }
}

// Let work on select the winner
const getClass = (idName) => {
  return document.querySelector('.box' + idName).id // Returning id name
}

const chackClass = (val1, val2, val3, sign) => {
  if(getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign){
    return true
  }
}

const selectWinner = () => {
  if(chackClass(1, 2, 3, playerSign) || chackClass(4, 5, 6, playerSign) || chackClass(7, 8, 9, playerSign) || chackClass(1, 5, 9, playerSign) || chackClass(3 , 5, 7, playerSign) || chackClass(1, 4, 7, playerSign) || chackClass(2 , 5, 8, playerSign) || chackClass(3 ,6, 9, playerSign)){
    // Once match won by someone then stop the bot
    runBot = false
    bot(runBot)
    setTimeout(() => {
      playBoard.classList.remove('show')
      resultBox.classList.add('show')
    }, 700)

    wonText.innerHTML = `Player <p${playerSign}</p> won the game!`
  } else{
    // if match has drawn
    if(getClass(1) != '' && getClass(2) != '' && getClass(3) != '' && getClass(4) != '' && getClass(5) != '' && getClass(6) != '' && getClass(7) != '' && getClass(8) != '' && getClass(9) != ''){
      runBot = false
      bot(runBot)
      setTimeout(() => {
        playBoard.classList.remove('show')
        resultBox.classList.add('show')
      }, 700)

      wonText.innerHTML = `Match has been drawn!`
    }
  }
}

replayBtn.onclick = () => {
  window.location.reload()
}