function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}

function isItemAvailable(item, transactions) {
  let validTransactions = transactionsFor(item, transactions);
  let inventory = 0;
  for (let i = 0; i < validTransactions.length; i += 1) {
    let movement = validTransactions[i]['movement'];
    let quantity = validTransactions[i]['quantity'];
    movement === 'in' ? inventory += quantity : inventory -= quantity;
  }
  return inventory > 0 ? true : false;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
