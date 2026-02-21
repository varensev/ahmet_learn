let toDoList = ['Помыть посуду', 'Пропылесосить пол', 'Погладить рубашку', 'Полить цветы', 'Вытереть пыль'];

toDoList.push('Вынести мусор');
toDoList.unshift('Заправить кровать');
const lastTask = toDoList.pop();
const firstTask = toDoList.shift();
let firstTwoTask = toDoList.slice(0, 2);
let deletedTask = toDoList.splice(2, 2);

console.log(`first two task - ${firstTwoTask}`);
console.log(`deleted task - ${deletedTask}`);
console.log('To Do List:')
for (const task of toDoList) {
    console.log(task)
}

