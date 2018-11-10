
    var chances = 7;
    var correct = 0;
    var usrpts = 0;
    var aipt = 0;
    var options = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var wordlist = ["castor", "pollux", "jamie", "sean", "hicks", "sasha", "eve", "dietrich", "michael", "tito", "victor", "ivan"]
    var attempts = 0
    var rand = Math.floor(Math.random()*wordlist.length);
    var word = wordlist[rand];
    var n = word.length;
    var exempt = [];
    

    function selection(){
        rand = Math.floor(Math.random()*wordlist.length)
        word = wordlist[rand];
        console.log(word);
        return word;
    }
    function blanks(){
       document.getElementById("blanks")="_".repeat(n);

    }
    
    // console.log ("i choose " + word);

    document.onkeyup = function(event){
        var letter = event.key.toLowerCase();
        // for (var j = 0; j < word.length; j++) {
        //     if (word.charAt(j) === letter) {
        //         n--;
        //     }
        // }
        if (options.indexOf(letter) >= 0){
            if (exempt.indexOf(letter) == -1){
                exempt.push(letter);
                console.log(exempt);
                console.log(letter);
            }
                else{ console.log("already guessed");
                    } 
                // else{ console.log("choose a letter a-z")
                // }
        if (word.indexOf(letter) == -1){
            chances--;
            document.getElementById("cage").style.opacity -= '-0.2';
            document.getElementById("travolta").style.opacity -= '0.2';
            console.log("guess again");
        }
            if (word.indexOf(letter) >= 0){
            attempts++;
            console.log("good guess!")
        }
        
    
        }
    
            
        
        if (chances == 0){
            console.log("you lose!");
            aipt++;
            console.log("computer points: " + aipt + ". Player points: " + usrpts)
            chances=5;
            exempt = [];
            selection();

            }
        if (attempts == n){
                console.log ("you win!");
                usrpts++
                console.log("computer points: " + aipt + ". Player points: " + usrpts)
                attempts=0;
                exempt = [];
                selection();

                }
            } 
            
        

    

    
    
        
