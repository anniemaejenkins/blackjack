/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
var K = 10;
var Q = 10;
var J = 10;
var A = 11;

function handValue(hand) {
  var total = 0;
  for (var i = 0; i < hand.length; i++) {
    total = total + hand[i];
  }
if (total > 21) {
  A = 1;
}

  return total;
}

handValue(["2", "2", "8"]);
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/