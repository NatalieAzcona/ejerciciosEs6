/* //3.1

const pList = [32, 54, 21, 64, 75, 43]
const copyList = [...pList]; 
console.log(copyList);

//3.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};
console.log(copyToy);

//3.3
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const pointsSum = [...pointsList, ...pointsLis2] */

//3.4
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const mix = {...toy, ...toyUpdate};
console.log(mix);

//3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors];
colorsCopy.splice(2,1);

console.log(colorsCopy);



