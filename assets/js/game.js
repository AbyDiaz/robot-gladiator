var playerName = window.prompt('What is your robots name?');
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = 'Roborto';
var enemyHealth = 50;
var enemyAttack = 12;

//fight function

var fight = function() {
    window.alert('Welcome to Robot Gladiators!');

    //subtract value of playerAttack from value of enemyHealth and use result to update overall enemyHealth

    enemyHealth = enemyHealth - playerAttack;

    //log result to console to know it worked 

    console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining. '
    ); 

    //subtract value of enemyAttack from value of playerHealth and use result to update overall playerHealth

    playerHealth = playerHealth - enemyAttack;

    //log result to console to know it worked

    console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining. '
    )
};

fight();