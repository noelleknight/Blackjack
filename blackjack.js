function runGame() {

    var display = document.querySelector('figure');
    var cards = ['2','3','4','5','6','7','8', '9', '10', 'J', 'Q', 'K', 'A'];

    function hit() {
        var card = (Math.floor(Math.random() * cards.length));
        display.innerHTML = display.innerHTML + ' ' + cards[card];
        checkResult(false);
    }

    function checkResult(standing) {
        var hand = display.innerHTML.split(' ');

        var cardValue = 0;

        hand.forEach(function (card, i) {
            if (Number(card)) {
                cardValue = cardValue + Number(card);
            }

            if (card === 'J' || card == 'Q' || card === 'K'){
                cardValue = cardValue + 10;}

            if (card === 'A'){
              cardValue = cardValue + 11; }
        });

        if (cardValue <= 15 && standing) {
            alert('Dealer wins.');
        }
        else if (cardValue <= 18 && standing) {
            alert('Push!');
        }
        if (cardValue > 21) {
            alert('You Bust.');
        }
        else if (cardValue > 18 && standing || cardValue === 21) {
            alert('You win!');
        }

      display.innerHTML = display.innerHTML;
      card = (Math.floor(Math.random() * cards.length));
      // display.innerHTML = cards[card];
      }

    document.getElementById('stand').addEventListener('click',function(){ checkResult(true); });

    card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = cards[card];
    card = (Math.floor(Math.random() * cards.length));
    display.innerHTML = display.innerHTML + ' ' + cards[card];

    document.getElementById('hit').addEventListener('click', function(){ hit();
    });
    checkResult(false);
}

runGame();
