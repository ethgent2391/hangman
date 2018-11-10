var chances = 5;
var correct = 0;
var usrpts = 0;
var aipt = 0;
var length = 0;
var guessblanks = "";
var wordlist = ["castor troy", "pollux troy", "jamie archer", "sean archer", "burke hicks", "sasha", "eve archer", "dietrich", "michael archer", "tito", "victor", "ivan"]
var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var attempts = 0
var rand = Math.floor(Math.random()*wordlist.length);
var word = wordlist[rand];
var n = word.length;
var exempt = [];
var letter = event.key.toLowerCase();

function selection(){
    rand = Math.floor(Math.random()*wordlist.length)
    word = wordlist[rand];
    n = word.length;
    return word;
}
 selection();

 document.onkeyup = function(event){
    if (options.indexOf(letter) >= 0){
        if (exempt.indexOf(letter) >= 0){
            if (word.indexOf(letter) >= 0)
                console.log("good guess");
            }
        }
    }
    


