// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// player stats
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// create fight function
var fight = function(enemyName) {
    // Welcome
    window.alert("Welcome to Robot Gladiators!");

    // Fight or Skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // player chooses fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // subtract playerAttack from enemyHealth
    enemyHealth = (enemyHealth - playerAttack);
    // log result to console
    console.log(
        playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyNames[i] + " has died!");
    }
    else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
    }

    // subtract enemyAttack from playerHealth
    playerHealth = (playerHealth - enemyAttack);
    // log result to console
    console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    for(enemyHealth; enemyHealth > 0; fight());
    // player chooses skip
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm choice
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // yes chosen
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        // subtract money
        playerMoney = playerMoney - 2;
    }
    // no chosen
    else {
        fight();
}
}   else {
    window.alert("You need to pick a valid option. Try again!");
}
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}