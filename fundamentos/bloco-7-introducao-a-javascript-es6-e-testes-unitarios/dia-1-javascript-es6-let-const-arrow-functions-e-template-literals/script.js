const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }   
  }

  testingScope(true);
  const oddsAndEvens = [13, 3, 4, 10, 7,];

  let crescent = (array) => { 
   array.sort((a, b) =>  a - b)
   return array

  /*oddsAndEvens[0] = 2
  oddsAndEvens[3] = 7
  oddsAndEvens[4] = 10
  oddsAndEvens[5] = 13
  oddsAndEvens[1] = 3
  let sortedArray = oddsAndEvens.sort()*/
}
console.log(crescent(oddsAndEvens))// será necessário alterar essa linha 😉
