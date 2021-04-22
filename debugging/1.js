let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
});

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// there is a semicolon autoinsertion error on line 1
//
