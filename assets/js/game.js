var playerName = window.prompt('What is your robots name?');
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Phil'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function
var fight = function(enemyName){
    while (playerHealth > 0 && enemyHealth > 0) {
        //ask player if theyd like to run or fight
        var promptFight = window.prompt('Would you like to fight or skip this battle? Enter FIGHT or SKIP to choose.');

        //if player picks 'skip' confirm then stop the loop
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            //confirm player wants to skip
            var confirmSkip = window.confirm('Are you sure youd like to quit?');
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                //subtract money from playerMoney for skipping 
                playerMoney = playerMoney - 10;
                console.log('playerMoney', playerMoney);
                break;
            }
        }

        //remove enemys health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' has attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(
                enemyName + ' still has ' + enemyHealth + ' health remaining.'
            );
        }

        //remove players health by subtracting amount set in enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + ' .' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );

        //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            //leave while loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
    } // end of while loop
}; // end of fight function

//function to start a new game
var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    // fight each enemy-robot by looping over then and fighting them one at a time 
    for (var i = 0; i < enemyNames.length; i++) {
        // if player is still alive, keep fighting 
        if (playerHealth > 0) {

            //let player know what round they are in, remeber arrays start at 0 so need to + 1
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the indes of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = 50;

            // use debugger to pause script from running and check whats going on durring that moment of code
            // debugger;

            // pass the pickedEnemyName variable value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

         // if player isnt alive, stop the game 
        } else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
          }
    }
    // play again
    //startGame();
    debugger;
    endGame();
};
// start game when page loads
startGame();


// function to end the game
var endGame = function () {
    // if player is alive they win
    if (playerHealth > 0) {
        window.alert(
        'Great Job, you survived the game! You have a score of' + playerMoney + ' .');
    } else {
        window.alert('You have lost your robot in battle.');
    }

    // ask player if they want to play again
    var playAgainConfirm = window.confirm('Would you like to play again?');

    if(playAgainConfirm) {
        // restart game
        startGame();
    } else {
        window.alert('Thankyou for playing Robot Gladiators! Come Back Soon!');
    }
};
endGame();
