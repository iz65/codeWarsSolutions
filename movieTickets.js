https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/solutions/javascript/me/best_practice

function movie(card, ticket, perc) {
  let sumA = 0;
  let sumB = card;
  let ticketB = ticket;
  let count = 0;
  while(Math.ceil(sumB) >= Math.ceil(sumA)){
    sumA += ticket;
    ticketB *= perc;
    sumB += ticketB;
    count++;
  }
  return count;
};