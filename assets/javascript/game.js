
var names = ["james", "john", "mike", "sunny", "dropbox", "hangman", "rain", "computer", "apple"];

var score = 0;
var win = 0;
var totalGuess = 10;

var selectedWord = names[Math.floor(Math.random() * names.length)];
var lettersCount = [];
var guessedLetters = lettersCount.length;
var remaningLetters = selectedWord.length;





function game () {
        var correctLetters = 0;
        var wordStorage = [];
for (var i=0; i<selectedWord.length; i++) {
    wordStorage[i] = "-";
    if (lettersCount.indexOf(selectedWord[i])> -1) { 
        wordStorage[i] = selectedWord[i];
        selectedWord++;

    }   
}
    if (correctLetters === selectedWord.length) {
        selectedWord = names[Math.floor(Math.random ()*names.length)];
        lettersCount = [];
        totalGuess = 10;
        guessedLetters = 0;
        wordStorage = [];
         win++;
            for (var i=0; i<selectedWord.length; i++ ) {
            wordStorage[i] = "-";
            if (lettersCount.indexOf(selectedWord[i])> -1) {
                wordStorage[i]=selectedWord[i];
                correctLetters++;
            }
        }

    }
        document.getElementById("theword").innerHTML = wordStorage.join("");

    	
}


document.onkeyup = function (event) {

    if (guessedLetters === 10) {
        selectedWord = names[Math.floor(Math.random() * names.length)];
        lettersCount = [];
        totalGuess = 10; 
    }
    else {
        var singleLetter = String.fromCharCode(event.keyCode).toLowerCase();
        if (lettersCount.indexOf(singleLetter) == -1 ) {
            lettersCount.push(singleLetter);
            totalGuess--;
        }
        guessedLetters = lettersCount.length;
    }
        if (totalGuess === 0) {
            selectedWord = names[Math.floor(Math.random() * names.length)];
            lettersCount = [];
            guessedLetters = 0;
            totalGuess = 10;
        }
    
game ();

} 


function documents() {
    document.getElementById("lettersGuessed").innerHTML = lettersCount;
    document.getElementById("remainingguess").innerHTML = totalGuess;
    document.getElementById("win").innerHTML = win;
    documents();
}