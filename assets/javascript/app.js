$('#start').on('click', function(){
    game.start();
  
});




const questions = [{
    question:"What character walks on walls and shoots sticky webs?",
    answers: ["Wolverine", "Spiderman", "Superman", "Blue Beetle"],
    correctAnswer: "Spiderman"

}, {
    question: "Which character is known to have ran about 13 quintillion times the speed of light?",
    answers: ["Quicksilver", "Shazam", "Professor Zoom", "The Flash"],
    correctAnswer: "The Flash"
}, {
    question: "What superhero murdered their wife in cold blood?",
    answers: ["Batman", "Ultraman", "Moon Knight", "Superman"],
    correctAnswer: "Superman"
}, {
    question: "Which characters powers has allowed him to stay young for over a century?",
    answers: ["Wolverine", "Green Arrow", "Plastic Man", "Captain Ultra"],
    correctAnswer: "Wolverine"
}, {
    question: "According to comics, this character is from OUR universe!!!",
    answers: ["Captain Marvel", "Iron Man", "Superboy", "The Punisher"],
    correctAnswer: "Superboy"
}, {
    question: "These characters user energy channeled from the Emotional Electromagnetic Spectrum.",
    answers: ["Nova Force", "Inhumans", "Green Lantern Force", "Symbiote Horde"],
    correctAnswer: "Green Lantern Force"
}, {
    question: "The Teenage Mutant Ninja Turtles share the same origin event as this mask vigilante!!!",
    answers: ["The Lizard", "Power Man", "Booster Gold", "Daredevil"],
    correctAnswer: "Daredevil"
}, {
    question: "The comicbook character known for defeating satan and stalemating God.",
    answers: ["Spawn", "Black Goliath", "Hercules", "Docter Manhattan"],
    correctAnswer: "Spawn"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter:10,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter === 0){
            console.log("Time is up!");
            game.done();
        }
    },

    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#subWrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
        $('#start').remove();
        for(i = 0; i < questions.length; i++){
            $('#subWrapper').append('<h2>' + questions[i].question + '</h2')
            for(j =0; j < questions[i].answers.length; j++){
                $("#subWrapper").append("<input type = 'radio' name = 'question-" + i + "' value = '" + questions[i].answers[j] + "'>" + questions[i].answers[j] )
            }
        }
    },

    done: function(){
        $.each($('input[name = "question-0"]:checked'), function(){
            if($(this).val() == questions[0].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name = "question-1"]:checked'), function(){
            if($(this).val() == questions[1].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name = "question-2"]:checked'), function(){
            if($(this).val() == questions[2].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name = "question-3"]:checked'), function(){
            if($(this).val() == questions[3].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name = "question-4"]:checked'), function(){
            if($(this).val() == questions[4].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name = "question-5"]:checked'), function(){
            if($(this).val() == questions[5].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name = "question-6"]:checked'), function(){
            if($(this).val() == questions[6].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name = "question-7"]:checked'), function(){
            if($(this).val() == questions[7].correctAnswer){
                game.correct++
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subWrapper h2').remove();

        $('#subWrapper').html("<h2>All done!</h2");
        $('#subWrapper').append("<h3>Correct Answers: " + this.correct + "</h3");
        $('#subWrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3");
        $('#subWrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        $('#subWrapper').append('<button id = "playagain"> Play Again? </button>');
        
        
    }
}



