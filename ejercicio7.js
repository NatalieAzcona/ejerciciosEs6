// 7.1
//7.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];


const suma = exams.reduce((total, actor) => total + actor.score, 0);

console.log(suma);

// 7.2

const aproved = exams.reduce((total, actor) => {
    if (actor.score >= 5) {
        total += actor.score
    }
    return total;
},0)

console.log(aproved);

//7.3

const media = exams.reduce((total, actor) => total += (actor.score), 0) / exams.length;

console.log(media);





