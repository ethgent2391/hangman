
    var chances = 7;
    var correct = 0;
    var usrpts = 0;
    var aipt = 0;
    var guessblanks = "";
    var wordlist = ["sneeze", "teeth", "man", "auspicious", "cumbersome", "real", "grateful", "sprout", "rich", "crook", "rebel", "matrix", "array", "script" ]
    var attempts = 0
    var rand = Math.floor(Math.random()*wordlist.length);
    var word = wordlist[rand];
    var n = word.length;


    console.log ("i choose " + word);
    


    document.onkeyup = function(event){
        var letter = event.key.toLowerCase();
        console.log(letter);


        if (word.indexOf(letter) == -1)
             chances--;
             if (word.indexOf(letter) == -1)
            console.log("guess again");
            if (word.indexOf(letter) >= 0){
            attempts++;
            console.log("good guess!")}
            
        
        if (chances == 0){
            console.log("you lose!");
            aipt++;
            console.log("computer points: " + aipt + ". Player points: " + usrpts)
            chances=7;
            }
        if (attempts == n){
                console.log ("you win!");
                usrpts++
                console.log("computer points: " + aipt + ". Player points: " + usrpts)
                attempts=0;
                }

        }
    

    
    
        
