"use strict";

//classes, herança e metodos estáticos
// class List {
//     constructor(){
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List {
//     static soma(a, b){
//         return a + b;
//     }
// }
// const MinhaLista = new TodoList();
// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add('Novo todo');
//     console.log(TodoList.soma(1, 1));
// }
var arr = [1, 2, 3, 4, 5, 7, 9]; //Uso de arrow functions
// const newArr = arr.map(function(item) {
//     return item * 2;
// });
// const newArr = arr.map((item) => {
//     return item * 2;
// });
// const newArr = arr.map(item => {
//     return item * 2;
// });

var newArr = arr.map(function (item) {
  return item * 2;
}); // console.log(newArr);

var sum = arr.reduce(function (total, next) {
  return total + next;
}); // console.log(sum);

var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); // console.log(filter);

var find = arr.find(function (item) {
  return item === 4;
}); // console.log(find);
//desestruturação

var usuario = {
  nome: 'Guilherme',
  idade: 25,
  endereco: {
    cidade: 'Presidente Prudente',
    estado: 'SP'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function desestruturacao(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

desestruturacao(usuario);
