//create libarary array
const words = ['kelly', 'parkour', 'dwight', 'micheal', 'bankruptcy' ];


let rightGuess = [];
let wrongGuess = [];
let under_Score = document.getElementsByClassName('underscore')
let wrong_Guess = document.getElementsByClassName('wrongGuess-container')
let right_Guess = document.getElementsByClassName('rightGuess-container')



//=======================Game Start=====================================

//choose word randomly
let randomWord = Math.floor(Math.random() * words.length);
let word = words[randomWord];
console.log(word)

// create blank underscores based on the word
let underScore = [];
let guess = () => {
    for (let i = 0; i< word.length; i++){
        underScore.push('_');
    }
    return underScore;
}

//Get player letter guess guess
// listen to keyboard and convert the event into a letter
document.addEventListener('keypress', (event) => {
let keycode = event.keyCode;
let keyword = String.fromCharCode(keycode);

// if the player is right show 
if (word.indexOf(keyword) > -1) {
    rightGuess.push(keyword);
    console.log(underScore);
   

    // replay the blank underscore with right letter
    underScore[word.indexOf(keyword)] = keyword;
    under_Score[0].innerHTML = underScore.join(' ');
    right_Guess[0].innerHTML = rightGuess.join(' ');
   if(underScore.join('') === word) {
   alert("Are you a hero? I really can't say, but yes.");
   } 
} else {
    wrongGuess.push(keyword);
   wrong_Guess[0].innerHTML = wrongGuess.join(' ');;
}
});

 under_Score[0].innerHTML = guess().join(' ');

 document.querySelector('.play-button').addEventListener('click', function(){
    window.location.reload();
    return false;
  });