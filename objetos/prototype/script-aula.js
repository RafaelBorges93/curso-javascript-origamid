function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  }
}

var obj = {
  nome: 'Nadre',
  idade: 33,
}

Pessoa.prototype.andar = function() {
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function() {
  return this.nome + ' Pessoa nadou';
}

const rafael = new Pessoa('Rafael', 29);

// console.log(Pessoa.prototype)
// console.log(rafael.prototype)

const pais = 'Brasil';
const cidade = new String('Rio');

const listaAnimais = ['Cachorro', 'Gato', 'Cavalor'];


const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: 'Ford',
  preco: 2000,
  andar() {
    return 'Oi';
  }
}

