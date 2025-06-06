const users = [
    {
      name: "Alberto",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Antonio",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Pedro",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Cristina",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];

let wavesC = 0;
let rainC = 0;
let showerC = 0;
let fireCampC = 0;
let windC = 0;
let trainC = 0;

for (let user of users) {
    for (let sound in user.favoritesSounds) {
        sound === "waves" ? wavesC++ :
        sound === "rain" ? rainC++ : 
        sound === "shower" ? showerC++ :
        sound === "firecamp" ? fireCampC++ : 
        sound === "wind" ? windC++ :
        sound === "train" ? trainC++ : null;
        }
}

console.log(wavesC);



