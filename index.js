// function myGame() {
//     let statsAvailable = [15, 14, 13, 12, 10, 8];

//     // Get user's name
//     let playerName = prompt("What is your name?");
//     console.log(playerName);

//     // Ask user to input DnD stats without repeating a number
//     // Number options of 15, 14, 13, 12, 10, and 8 can be used, and each can only be used once
//     let charismaStat = parseInt(prompt("What would you like your charisma to be?"));

//     while (!statsAvailable.includes(charismaStat)) {
//         alert("You can't use that number!");
//         charismaStat = parseInt(prompt("What would you like your charisma to be?"));
//     }

//     // Remove the selected charisma stat from the available options
//     statsAvailable = statsAvailable.filter(stat => stat !== charismaStat);
//     alert(`Your charisma stat is now ${charismaStat}!`);
    
//     let dexterityStat = parseInt(prompt("What would you like your dexterity to be?"));

//     while (!statsAvailable.includes(dexterityStat)) {
//         alert("You can't use that number!");
//         dexterityStat = parseInt(prompt("What would you like your dexterity to be?"));
//     }

//     // Remove the selected charisma stat from the available options
//     statsAvailable = statsAvailable.filter(stat => stat !== dexterityStat);
//     alert(`Your dexterity stat is now ${dexterityStat}!`);
// }
function myGame() {
    let statsAvailable = [15, 14, 13, 12, 10, 8];
    
    // Object to store the player's chosen stats
    let playerStats = {
        charisma: null,
        dexterity: null,
        strength: null,  
        wisdom: null,
        constitution: null,
        intelligence: null,
    };

    // Get user's name
    let playerName = prompt("What is your name?");
    console.log("playerName", playerName);

    // Loop over the `playerStats` object to ask for each stat
    for (let stat in playerStats) {
        let chosenStat = parseInt(prompt(`What would you like your ${stat} to be? The available options are : ${statsAvailable}.`));

        while (!statsAvailable.includes(chosenStat)) {
            alert("You can't use that number!");
            chosenStat = parseInt(prompt(`What would you like your ${stat} to be? The available options are : ${statsAvailable}.`));
        }
        playerStats[stat] = chosenStat;

        // Remove the chosen stat from the available options
        statsAvailable = statsAvailable.filter(availableStat => availableStat !== chosenStat);

        alert(`Your ${stat} stat is now ${chosenStat}!`);
    }

    console.log('Player stats:', playerStats); // Display the player's final stats
    
    return {playerName, playerStats};   
    
}

let { playerName, playerStats } = myGame();

// Select the container in which to display the stats
let container = document.getElementById('statContainer');

// Display player's name
let nameElement = document.createElement('h2');
nameElement.textContent = `${playerName}'s Stats`;
container.appendChild(nameElement);

// Loop through player's stats and display them on the webpage
for (let stat in playerStats) {
    if (playerStats.hasOwnProperty(stat)) {
        let statElement = document.createElement('p');
        statElement.textContent = `${stat}: ${playerStats[stat]}`;
        container.appendChild(statElement);
    }
}