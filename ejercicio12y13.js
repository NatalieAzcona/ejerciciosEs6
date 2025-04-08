const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];


  function findArrayIndex(array, text) {
    let position = array.includes(text) ? array.indexOf(text) : null;
    return position;
  }

  console.log(findArrayIndex(mainCharacters, 'Leia'));

  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
      array.splice(index,1);
    }
    return array;
  }

