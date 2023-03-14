// const alert = window.alert('Isso é um alert!');

const href = window.location.href

// console.log(href)

// if (href === 'http://127.0.0.1:5500/dom-para-iniciantes/o-que-e-dom/') {
//   window.alert('Você está na página correta!')
// } else {
//   window.alert('Você não está na página correta!')
// }
const selection = document.querySelector('h1')
// console.log(selection)

function callbackSelection() {
  console.log('Clicou em', selection.innerText)
}

// selection.addEventListener('click', callbackSelection)