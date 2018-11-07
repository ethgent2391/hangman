var chances, correct, usrpts, aipt, length, guessblanks, wordlist, attempts, rand, word, n, exempt, options, alerts;

fuction mech(){
    options = "abcdefghijklmnopqrstuvwxyz";
    chances = 5;
    wordlist = [squirrel
        box, cactus, sort, threatening, swell, tax, ugly, clouds, stem, step, rob, unarmed, press, humdrum, sever,
         thundering, unwritten, succinct, frantic, spark, want, suit, secretary, ticket, guitar, tremendous, friendly, do,
          liquid, idealize, import, overflow, bash, poised, sit, cream, glow, alight, typeset, diminish, afterthought, unknown,
           report, yawn, car, statuesque, colorful, aloof, cook]
    alerts = { win:'You win!', lose: 'Out of lives', notletter: 'not a valid character'};
    
    word=words[Math.floor(Math.random() * words.length)];

    output = document.getElementById("output");
    man = document.getElementById("man");
    guessInput = document.getElementById("letter");
    man.innerHTML = '';

    document.geElementById("letter").value = '';

    