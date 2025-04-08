const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];


function swap(array, indexA, indexB) {
    const temp = array[indexA]
    
    array[indexA] = array[indexB];
    array[indexB] = temp;
    return array;
}

console.log(swap(fantasticFour, 0, 3));