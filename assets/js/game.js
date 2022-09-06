var playerName = window.prompt('What is your robots name?');
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = 'Roborto';
var enemyHealth = 50;
var enemyAttack = 12;

//fight function

var fight = function() {
    window.alert('Welcome to Robot Gladiators!');

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight 

    if (promptFight === 'fight' || promptFight === 'FIGHT') {
            //subtract value of playerAttack from value of enemyHealth and use result to update overall enemyHealth

        enemyHealth = enemyHealth - playerAttack;

        //log result to console to know it worked 

        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining. '
        ); 

        //check enemy's health

        if (enemyHealth <= 0)  {
            window.alert(enemyName + ' has died! ');
        }
        else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left. ');
        }

        //subtract value of enemyAttack from value of playerHealth and use result to update overall playerHealth

        playerHealth = playerHealth - enemyAttack;

        //log result to console to know it worked

        console.log(
            enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining. '
        );

   // check player's health

   if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  // if player choses to skip

} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm('Are you sure youd like to quit?');

    //if yes (true), then leave fight
    if (confirmSkip){
        window.alert(playerName + ' had decided to skip this fight. Goodbye!');

        //subtract money from playerMoney for skip
        playerMoney = playerMoney - 2;
    }
    //if no (false), ask question again by running fight()
    else {
        fight();
    }
} 


};    
fight();