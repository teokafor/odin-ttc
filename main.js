// "Your main goal here is to have as little global code as possible."


// ...


// best way to represent 3x3 grid as an object?


/*

const Gameboard = {
a: 1, b: 0, c: 0,
d: 1, e: 0, f: 0,
g: 1, h: 0, i: 0,
};

const Gameboard = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, };

brute force algorithm? Just test every letter?

WIN CONDITIONS:
I.   three horizontal spaces belong to same player (abc, def, ghi.)
        if (letter === a, d, g) {
            if (letter + 1 && letter + 2 === player marker) WIN
        }

II.  three vertical spaces belong to the same player (adg, beh, cfi.)
        if (letter === a, b, c) {
            if (letter + 3 && letter + 6 === player marker) WIN
        }


III. three diagonal spaces belong to the same player (aei, ceg.)
        if (letter === a, c) {
            if (letter === a) {
                if (letter + 4 && letter + 8 === player) WIN
            } else if (letter + 2 && letter + 4 === player) WIN
        }

IV.  a draw is made
        if (board is full) // Assuming we just ran all other checks



0 = empty space
1 = player 1 spot
2 = player 2 spot


Gameflow:
Ask P1 for letter a-i

Pass input to checkIfTaken(letter) function
(stored in game object?)

recall function if true...
...else updateGameVisual()
    
run check for isWinConditionMet() (see above)

call winFunction(currentPlayer) if true...
...else continue code


winFunction() {
    gameRunning = false; (global variable violation?)
}

while (gameRunning) {
    player1Turn();
    player2Turn();
}





*/