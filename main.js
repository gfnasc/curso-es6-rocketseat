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


const arr = [1, 2, 3, 4, 5, 7, 9];


// const newArr = arr.map(function(item) {
//     return item * 2;
// });

// const newArr = arr.map((item) => {
//     return item * 2;
// });

// const newArr = arr.map(item => {
//     return item * 2;
// });
//Uso de arrow functions
const newArr = arr.map(item => item * 2);

console.log(newArr);


const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);