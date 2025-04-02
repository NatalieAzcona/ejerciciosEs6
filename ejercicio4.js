/* /* const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(persona => persona.name);

console.log(names);

//4.2
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names = users.map(persona => {
    if (persona.name[0].toLowerCase() === 'a') {
        return 'Anacleto';
    }
    return persona.name;
});

console.log(names); */

// 4.3

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visited = cities.map(persona => {
        if (persona.isVisited = true) {
            persona.name += ' vistado';
        }
        else {
            persona.name += ' no visitado';
        }
    return persona.name;
});

console.log(visited);

// otros

const people = [
    { id: 1, name: 'Carlos', age: 25 },
    { id: 2, name: 'Lucía', age: 17 },
    { id: 3, name: 'Martín', age: 30 },
    { id: 4, name: 'Ana', age: 15 }
  ];

const minors = people.map(person => {
    if (person.age < 18) {
        person.age = 'menor de edad';
    }
    return person.age;
});

console.log(minors);

// otro 2

const tasks = [
    { id: 1, title: "Hacer la compra", completed: false },
    { id: 2, title: "Estudiar JavaScript", completed: true },
    { id: 3, title: "Pasear al perro", completed: false },
    { id: 4, title: "Ir al gimnasio", completed: true }
  ];

const completed = tasks.map(task => {
    if (task.completed === true) {
        return task.title += " ✅"
    }
    return task.title;
    }
)
console.log(completed);

//otro
const employees = [
    { id: 1, name: "Sofía", role: "user" },
    { id: 2, name: "Andrés", role: "admin" },
    { id: 3, name: "Luisa", role: "user" },
    { id: 4, name: "Pablo", role: "admin" }
  ];

const admin = employees.map(employee =>{
    if (employee.role === 'admin') {
      return employee.name.toUpperCase() + ' (Administrador)';
    } else {
        return employee.name.toUpperCase();
    } 
})
console.log(admin);
