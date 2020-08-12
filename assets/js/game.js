var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// create fight function
var fight = function() {
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
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // subtract enemyAttack from playerHealth
    playerHealth = (playerHealth - enemyAttack);
    // log result to console
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // player chooses skip
}   else if (promptFight === "skip" || promptFight === "SKIP") {
    window.alert(playerName + " has chosen to skip the fight!");
}   else {
    window.alert("You need to pick a valid option. Try again!");
}
};

// execute fight function
fight();
