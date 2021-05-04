// declaring class, objects and arrays
class card {
    constructor (name, strength, agility, intelligence, spells, corruption, times_won) {
        this.name = name;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
        this.spells = spells;
        this.corruption = corruption;
        this.times_won = times_won;
    }
}

let card1 = new card("orc", 12, 10, 9, 0, 12, 0)
let card2 = new card("goblin", 9, 14, 11, 0, 13, 0)
let card3 = new card("troll", 17, 8, 6, 0, 10, 0)
let card4 = new card("pixie", 5, 18, 14, 2, 2, 0)
let card5 = new card("elf", 10, 15, 16, 4, 4, 0)
let card6 = new card("dwarf", 13, 12, 0, 3, 0, 0)
let card7 = new card("giant", 26, 6, 10, 0, 9, 0)
let card8 = new card("swamp creature", 18, 8, 5, 0, 12, 0)
let card9 = new card("wyvern", 15, 10, 6, 0, 10, 0)
let card10 = new card("griffon", 16, 10, 8, 0, 8, 0)
let card11 = new card("dragon", 30, 8, 24, 6, 16, 0)
let card12 = new card("zombie", 10, 6, 2, 0, 20, 0)
let card13 = new card("skeleton", 10, 8, 4, 0, 20, 0)
let card14 = new card("ghoul", 11, 10, 8, 0, 22, 0)
let card15 = new card("wraith", 14, 14, 14, 3, 26, 0)
let card16 = new card("gargoyle", 17, 8, 8, 0, 10, 0)
let card17 = new card("vampire", 19, 16, 18, 8, 28, 0)
let card18 = new card("werewolf", 18, 10, 11, 0, 25, 0)
let card19 = new card("golem", 24, 8, 4, 0, 0, 0)
let card20 = new card("demon", 21, 20, 20, 8, 30, 0)
let card21 = new card("wolf", 12, 15, 6, 0, 1, 0)
let card22 = new card("giant spider", 13, 15, 4, 0, 3, 0)
let card23 = new card("eagle", 12, 18, 8, 0, 0, 0)
let card24 = new card("tiger", 14, 12, 7, 0, 0, 0)
let card25 = new card("snake", 9, 17, 4, 0, 5, 0)
let card26 = new card("fire elemental", 15, 10, 3, 0, 10, 0)
let card27 = new card("water elemental", 15, 10, 3, 0, 10, 0)
let card28 = new card("air elemental", 12, 10, 3, 0, 10, 0)
let card29 = new card("earth elemental", 20, 10, 3, 0, 10, 0)
let card30 = new card("beholder", 23, 10, 22, 10, 25, 0)

let listOfCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30]

let player1Hand = []
let player2Hand = []

let currentWinner = "";


// player 1 card pick
const pickCardOne = () => {
    alert(player1Hand)
    let cardChoice1 = prompt("Player 1: pick your card.")
    let x;
    for (x in player1Hand) {
        if (cardChoice1 === `${player1Hand[x].name}` && x < player1Hand.length) {
            return player1Hand[x];
            x ++;
        }
        
    }
}

// player 2 card pick
const pickCardTwo = () => {
    alert(player2Hand)
    let cardChoice2 = prompt("Player 2.  Pick your card.")
    let x = 0;
    for (x in player2Hand) {
        if (cardChoice2 === `${player2Hand[x].name}` && x < player2Hand.length) {
            return player2Hand[x];
            x ++;
        }
        
    }
}

// invented a function to remove specific item from array.  There really needs to be a method for this!!!
const removeFromArray = (removedItem, arrayConcerned) => {
    for(i = 0; i < arrayConcerned.length; i++){ 
    
        if (arrayConcerned[i] === removedItem) { 
    
            arrayConcerned.splice(i, 1); 
        }
    }
}


// comparing the cards
const compareCards = (firstCard, secondCard, choice) => {
    if (choice === "strength") {
        if (firstCard.strength > secondCard.strength) {
            alert(`The winner is ${firstCard.name}`);
            firstCard.times_won += 1;
            alert(`${firstCard.name} has won ${firstCard.times_won} times.`);
            player1Hand.push(secondCard);
            removeFromArray(secondCard, player2Hand);
            currentWinner="player1"
        }
        else if (secondCard.strength > firstCard.strength) {
            alert(`The winner is ${secondCard.name}`);
            secondCard.times_won += 1;
            alert(`${secondCard.name} has won ${secondCard.times_won} times.`);
            player2Hand.push(firstCard);
            removeFromArray(firstCard, player1Hand);
            currentWinner="player2"
        }
        else    {
            alert("It's a tie")
        }
    }
    else if (choice === "agility") {
        if (firstCard.agility > secondCard.agility) {
            alert(`The winner is ${firstCard.name}`);
            firstCard.times_won += 1;
            alert(`${firstCard.name} has won ${firstCard.times_won} times.`);
            player1Hand.push(secondCard);
            removeFromArray(secondCard, player2Hand);
            currentWinner="player1"
        }
        else if (secondCard.agility > firstCard.agility) {
            alert(`The winner is ${secondCard.name}`);
            secondCard.times_won += 1;
            alert(`${secondCard.name} has won ${secondCard.times_won} times.`);
            player2Hand.push(firstCard);
            removeFromArray(firstCard, player1Hand);
            currentWinner="player2"
        }
        else    {
            alert("It's a tie")
        }
    }
    else if (choice === "intelligence") {
        if (firstCard.intelligence > secondCard.intelligence) {
            alert(`The winner is ${firstCard.name}`);
            firstCard.times_won += 1;
            alert(`${firstCard.name} has won ${firstCard.times_won} times.`);
            player1Hand.push(secondCard);
            removeFromArray(secondCard, player2Hand);
            currentWinner="player1"
        }
        else if (secondCard.intelligence > firstCard.intelligence) {
            alert(`The winner is ${secondCard.name}`);
            secondCard.times_won += 1;
            alert(`${secondCard.name} has won ${secondCard.times_won} times.`);
            player2Hand.push(firstCard);
            removeFromArray(firstCard, player1Hand);
            currentWinner="player2"
        }
        else    {
            alert("It's a tie")
        }
    }
    else if (choice === "spells") {
        if (firstCard.spells > secondCard.spells) {
            alert(`The winner is ${firstCard.name}`);
            firstCard.times_won += 1;
            alert(`${firstCard.name} has won ${firstCard.times_won} times.`);
            player1Hand.push(secondCard);
            removeFromArray(secondCard, player2Hand);
            currentWinner="player1"
        }
        else if (secondCard.spells > firstCard.spells) {
            alert(`The winner is ${secondCard.name}`);
            secondCard.times_won += 1;
            alert(`${secondCard.name} has won ${secondCard.times_won} times.`);
            player2Hand.push(firstCard);
            removeFromArray(firstCard, player1Hand);
            currentWinner="player2"
        }
        else    {
            alert("It's a tie")
        }
    }
    else if (choice === "corruption") {
        if (firstCard.corruption < secondCard.corruption) {
            alert(`The winner is ${firstCard.name}`);
            firstCard.times_won += 1;
            alert(`${firstCard.name} has won ${firstCard.times_won} times.`);
            player1Hand.push(secondCard);
            removeFromArray(secondCard, player2Hand);
            currentWinner="player1"
        }
        else if (secondCard.corruption < firstCard.corruption) {
            alert(`The winner is ${secondCard.name}`);
            secondCard.times_won += 1;
            alert(`${secondCard.name} has won ${secondCard.times_won} times.`);
            player2Hand.push(firstCard);
            removeFromArray(firstCard, player1Hand);
            currentWinner="player2"
        }
        else    {
            alert("It's a tie")
        }
    }
}

const optionToRepeat = () => {
    let again = prompt("Would you like to play again? Y or N.")
    if (again.toUpperCase() === "Y") {
        each_round()
    }
    else if (again.toUpperCase() === "N") {
        alert("goodbye")
    }
    else {
        optionToRepeat()
    }
}

// this happens each round
const each_round = () => {
    let choice = prompt(`${currentWinner} please pick a statistic to compare: (strength, agility, intelligence, spells, corruption).`)
    if (choice === "strength" || choice === "agility" || choice === "intelligence" || choice === "spells" || choice === "corruption") {
        let firstCard = pickCardOne()
        while (firstCard === undefined) {
            alert("Sorry.  You do not have that card.  Try again.");
            firstCard = pickCardOne()
        }
        let secondCard = pickCardTwo()
        while (secondCard === undefined) {
            alert("Sorry.  You do not have that card.  Try again.");
            secondCard = pickCardTwo()
        }
        alert(`${firstCard.name} versus ${secondCard.name}`)
        compareCards(firstCard, secondCard, choice)
    }
    else {
        console.log("I'm sorry but that statistic doesn't exist.  Please try again.");
        each_round ();
    }

    optionToRepeat()
    

}

// split the pack at start of game
const start_game = () => {
    for(i=0; i < 15; i++) {
        let ranNum = Math.random() * listOfCards.length
        let shuffle = listOfCards[Math.floor(ranNum)]
        player1Hand.push(shuffle);
        listOfCards.splice(ranNum, 1)
    }
    player2Hand = listOfCards;
    each_round ()
}

start_game ()
