document.getElementById('startGame').addEventListener('click', startGame);

const roles = ["Mafia", "Detective", "Doctor", "Citizen", "Jester", "Bodyguard"];
let players = [];

function startGame() {
    let numPlayers = prompt("Enter the number of players:");
    if (numPlayers < 4) {
        alert("You need at least 4 players to start the game.");
        return;
    }

    players = [];
    for (let i = 0; i < numPlayers; i++) {
        let playerName = prompt(`Enter the name of player ${i + 1}:`);
        players.push({ name: playerName, role: "Citizen", alive: true });
    }

    assignRoles();
    displayPlayers();
}

function assignRoles() {
    let shuffledPlayers = players.sort(() => Math.random() - 0.5);
    shuffledPlayers[0].role = "Mafia";
    shuffledPlayers[1].role = "Detective";
    shuffledPlayers[2].role = "Doctor";
    shuffledPlayers[3].role = "Jester";
    shuffledPlayers[4].role = "Bodyguard";
    // Remaining players are Citizens by default
}

function displayPlayers() {
    const playersDiv = document.getElementById('players');
    playersDiv.innerHTML = "";
    players.forEach(player => {
        let playerDiv = document.createElement('div');
        playerDiv.textContent = `${player.name} (${player.role})`;
        playersDiv.appendChild(playerDiv);
    });
}

// Additional game logic can be added here, such as night and day phases, voting, etc.
