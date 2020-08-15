// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// Welcome
window.alert("Welcome to Robot Gladiators!");

// create fight function
var fight = function(enemy) {
    while (playerInfo.health > 0 && enemy.health > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerInfo.money for skipping
          playerInfo.money = Math.max(0, playerInfo.money - 10);
          console.log("playerInfo.money", playerInfo.money)
          break;
        }
    }
  
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    console.log(playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.');
  
      // check enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');
  
        // award player money for winning
        playerInfo.money = playerInfo.money + 20;
  
        // leave while() loop since enemy is dead
        break;

    } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }
  
    // remove players's health by subtracting the amount set in the enemy.attack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    
    console.log(
        enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );
  
        // check player's health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + ' has died!');
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
    }
};


// start game function
var startGame = function() {
    // reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            // if we're not at last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length -1) {
                //shop?
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                //shop YES
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game over!");
            break;
        }
    }

    // play again?
    endGame();
};

// end game function
var endGame = function() {
    // win
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the gauntlet! You now have a score of " + playerInfo.money + ".");
    } else {
        window.alert("You've lost your robot in battle!");
    }
    
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    } 
};

//shop function
var shop = function() {
    //shop selection
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your weapon, or LEAVE the store?"
    );

    //use 'switch' statements to carry out shop selection
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            //left store
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
    }
};

//function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

// function to set name
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};

//player object
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling robot's health by 35 for 7 gold.");
            this.health += 35;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgraded weapon by 7 attack for 7 gold.");
            this.attack += 7;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

//enemy array
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14),
        shield: {
            type: "wood",
            strength: 10
        }
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// initiate game
startGame();