'using strict';

var max_val_input = document.querySelector('#max_value_input');
var max_val = document.querySelector('#max_value');

var score1 = document.querySelector('#score1');
var score2 = document.querySelector('#score2');

var player1 = document.querySelector('#player1');
var player2 = document.querySelector('#player2');

var reset = document.querySelector('[type="reset"]');

var sc1 = 0;
var sc2 = 0;
var max_ = 5;

max_val_input.value = max_;

function update_val() {
    score1.innerHTML = sc1;
    score2.innerHTML = sc2;
}

function update_max() {
    max_ = Math.floor(max_val_input.value);
}

player1.addEventListener('click', function () {
    update_max();
    if (sc1 < max_ && sc2 < max_) {
        sc1++;
    }
    update_val();
});

player2.addEventListener('click', function () {
    update_max();
    if (sc1 < max_ && sc2 < max_) {
        sc2++;
    }
    update_val();
});

reset.addEventListener('click', function () {
    sc1 = 0;
    sc2 = 0;
    max_val_input.value = 5;
    update_val();
});
