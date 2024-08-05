document.getElementById('startGame').addEventListener('click', startGame);

const roles = ["Мафия", "Детектив", "Доктор", "Гражданин", "Шут", "Телохранитель"];
let players = [];

function startGame() {
    let numPlayers = prompt("Введите количество игроков:");
    if (numPlayers < 4) {
        alert("Для начала игры необходимо как минимум 4 игрока.");
        return;
    }

    players = [];
    for (let i = 0; i < numPlayers; i++) {
        let playerName = prompt(`Введите имя игрока ${i + 1}:`);
        players.push({ name: playerName, role: "Гражданин", alive: true });
    }

    assignRoles();
    displayPlayers();
}

function assignRoles() {
    let shuffledPlayers = players.sort(() => Math.random() - 0.5);
    shuffledPlayers[0].role = "Мафия";
    shuffledPlayers[1].role = "Детектив";
    shuffledPlayers[2].role = "Доктор";
    shuffledPlayers[3].role = "Шут";
    shuffledPlayers[4].role = "Телохранитель";
    // Оставшиеся игроки по умолчанию становятся гражданами
}

function displayPlayers() {
    const playersDiv = document.getElementById('players');
    playersDiv.innerHTML = "";
    players.forEach(player => {
        let playerDiv = document.createElement('div');
        playerDiv.classList.add('player-card');

        let frontDiv = document.createElement('div');
        frontDiv.classList.add('front');
        frontDiv.textContent = `${player.name} (${player.role})`;

        let backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.textContent = `Роль: ${player.role}`;

        playerDiv.appendChild(frontDiv);
        playerDiv.appendChild(backDiv);
        playersDiv.appendChild(playerDiv);
    });
}
