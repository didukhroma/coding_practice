function movie(card, ticket, perc) {
  let visits = 0;
  let systemA = 0;
  let systemB = card;
  let currentTicketPrice = ticket * perc;

  while (Math.ceil(systemB) >= systemA) {
    visits += 1;
    systemA += ticket;
    systemB += currentTicketPrice;
    currentTicketPrice *= perc;
  }

  return visits;
}

console.log(movie(100, 10, 0.95), 10);
