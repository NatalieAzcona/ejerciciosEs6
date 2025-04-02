/* // 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages.filter(age => age >= 18);
console.log(adults); */

//5.2
/* const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const even = ages.filter(age => {
    if (age % 2 === 0) {
        return age;
    }
})
console.log(even);
 */
// 5.3

/* const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersLol = streamers.filter(streamer => {
    if (streamer.gameMorePlayed === 'League of Legends') {
        return streamer;
    }
})
console.log(streamersLol); */

// 5.4 
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

/* const streamersU = streamers.filter(streamer => {
    return streamer.name.includes('u')
});

console.log(streamersU); */

//5.5

/* const streamerLol = streamers.filter(streamer => {
    return streamer.gameMorePlayed.includes('Legends')
}
)
if (streamer.age > 35) {
    return streamer.gameMorePlayed.toUpperCase();
}
 */

const streamerLol = streamers
    .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
    .map(streamer => ({
        ...streamer,
        gameMorePlayed: streamer.age > 35? streamer.gameMorePlayed.toUpperCase() : streamer.gameMorePlayed
}));

console.log(streamerLol);