// TODO: prompt user R,P,S, save that to a variable
    // edge case: what if user doesnt pick one of those?
    // egde case: what if they use lowercase letters?
// TODO: add error message for lowercase and for when user doesnt pick R,P, or S.
// TODO: generate computerchoice
    // three outcomes R,P,S
    // randomly  chooses one
    // save as variable
// TODO:compare choices 
    // win
        // user rock, comp scissors || user paper, comp rock || user scissor comp paper.
    // lose
        // user rock, comp paper || user paper, comp scissors || user scissors, comp rock
    // tie

// TODO: add win or lose message
// TODO: add play again option
// TODO: add total wins, ties, and losses after each round.

var userChoice = prompt("Choose rock, paper or scissors? Type in R for Rock, P for paper or S for scissors.");

var computerChoice = Math.random();
  if (computerChoice < 0.34) {
	computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
	computerChoice = "paper";
  } else {
	computerChoice = "scissors";
  } 
  //console.log("Computer chooses: " + computerChoice);

var compare = function(choice1,choice2) {
    
    if (choice1 === choice2) {
        
        return "Tied!" + " " + "Play again." ;
    }
    
    else if (choice1 === "R") {
        
        if (choice2 === "S") {
            return "R wins" + "<br>" + "You win!";
        }
        else {
            return "P wins" + "<br>" + "Computer wins";
        }
    }
    
    else if (choice1 === "P") {
        
        if (choice2 === "R") {
            return "P wins" + "<br>" + "You win!";
        }
        else {
            return "S wins" + "<br>" + "Computer wins!";
        }
            
    }
    
    else if (choice1 === "S") {
        
        if (choice2 === "R") {
            return "R wins" + "<br>" + "Computer wins!.";
        }
        else {
            return "S wins" + "<br>" + "You win!";
        }
    }
    
    
    } //closes compare function



   console.log("Computer chose: " + computerChoice + "<br>"); 
   console.log(compare(userChoice,computerChoice));
   