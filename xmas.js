const sizeArray = ['big', 'small', 'massive', 'tiny', 'huge'];
const descriptionArray = ['smelly', 'glittery', 'shiny', 'disappointing', 'amazing', 'rubbish', 'old', 'new'];
const presentArray = ['diamond', 'dog', 'boardgame', 'computer', 'necklace', 'cuddly toy', 'lump of coal'];
const deliveryArray = ['the postman', 'Father Christmas', 'an elf', 'sleigh', 'Rudolph the Red Nosed Reindeer'];

const wordSelector = arr => {
    let randomNumber = Math.floor(Math.random() * arr.length);
    return(arr[randomNumber]); 
}

let size = wordSelector(sizeArray);
let description = wordSelector(descriptionArray);
let present = wordSelector(presentArray);
let delivery = wordSelector(deliveryArray);

console.log(`This year you deserve a ${size} ${description} ${present} for Christmas, which will be delivered by ${delivery}.`);