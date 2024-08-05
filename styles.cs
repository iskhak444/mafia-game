body {
    font-family: Arial, sans-serif;
    background-color: #282c34;
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

h1 {
    font-size: 3rem;
    margin-bottom: 20px;
}

#game-container {
    perspective: 1000px;
}

#players {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
}

.player-card {
    background-color: #444;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
    width: 150px;
    height: 200px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: transform 0.6s;
}

.player-card:hover {
    transform: rotateY(180deg);
}

.player-card .front,
.player-card .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.player-card .back {
    transform: rotateY(180deg);
}

button {
    padding: 15px 30px;
    font-size: 1.5rem;
    background-color: #61dafb;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

button:hover {
    background-color: #21a1f1;
    transform: scale(1.1);
}

button:active {
    transform: scale(0.9);
}
