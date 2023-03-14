// const cliente = {
//   nome: 'Rafael',
//   compras: 10,
//   email: 'exemplo@exemplo.com'
// }

// const {nome: nomeRafael, email = 'exemplo@exemplo.com'} = cliente;

// console.log(email);

// const frutas = ['Banana', 'Uva', 'Morango'];

// const [primeira, segunda, terceira] = frutas;


// const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 

// console.log(segundo);

function handleKeyboard({key, keyCode}) {
  console.log(key, keyCode);
}

document.addEventListener('keyup', handleKeyboard);