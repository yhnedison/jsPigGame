/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activatePlayer, gamePlaying;

// scores = [0, 0];
// roundScore = 0;
// activatePlayer = 0;
init();

// document.querySelector('#current-' + activatePlayer).textContent = dice;
// document.querySelector('#current-' + activatePlayer).innerHTML = '<em>' + dice + '</em>';

// //hide dice img and reset scores to 0s
// document.querySelector('.dice').style.display = 'none';
// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

// event listen for button ROLL DICE
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random() * 6 + 1);
        // 2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        // 3. display the round score only if dice != 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activatePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
    }
});

// event listener for button HOLD
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // add roundScore to global score
        scores[activatePlayer] += roundScore;

        // update UI
        document.querySelector('#score-' + activatePlayer).textContent = scores[activatePlayer];

        // check if player won the game
        if (scores[activatePlayer] >= 10) {
            // change player name to Winner
            document.querySelector('#name-' + activatePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activatePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activatePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // change activate player;
    // reset all cuttent scores displayed to 0;
    // toggle UI
    activatePlayer === 0 ? activatePlayer = 1 : activatePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // hide the img
    document.querySelector('.dice').style.display = 'none';

}

// event listener for button NEW GAME
document.querySelector('.btn-new').addEventListener('click', init);

// initialize fucntion
function init() {
    scores = [0, 0];
    roundScore = 0;
    activatePlayer = 0;
    gamePlaying = true;

    //hide dice img and reset scores to 0s
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}





