class card {
    constructor (name, strength, agility, intelligence, spells, corruption) {
        this.name = name;
        this.strength = strength;
        this.agility = agility;
        this.intelligence = intelligence;
        this.spells = spells;
        this.corruption = corruption;
    }
}

let card1 = new card("orc", 12, 10, 9, 0, 12)
let card2 = new card("goblin", 9, 14, 11, 0, 13)
let card3 = new card("troll", 17, 8, 6, 0, 10)
let card4 = new card("pixie", 5, 18, 14, 2, 2)
let card5 = new card("elf", 10, 15, 16, 4, 4)
let card6 = new card("dwarf", 13, 12, 0, 3)
let card7 = new card("giant", 26, 6, 10, 0, 9)
let card8 = new card("swamp creature", 18, 8, 5, 0, 12)
let card9 = new card("wyvern", 15, 10, 6, 0, 10)
let card10 = new card("griffon", 16, 10, 8, 0, 8)
let card11 = new card("dragon", 30, 8, 24, 6, 16)
let card12 = new card("zombie", 10, 6, 2, 0, 20)
let card13 = new card("skeleton", 10, 8, 4, 0, 20)
let card14 = new card("ghoul", 11, 10, 8, 0, 22)
let card15 = new card("wraith", 14, 14, 14, 3, 26)
let card16 = new card("gargoyle", 17, 8, 8, 0, 10)
let card17 = new card("vampire", 19, 16, 18, 8, 28)
let card18 = new card("werewolf", 18, 10, 11, 0, 25)
let card19 = new card("golem", 24, 8, 4, 0, 0)
let card20 = new card("demon", 21, 20, 20, 8, 30)
let card21 = new card("wolf", 12, 15, 6, 0, 1)
let card22 = new card("giant spider", 13, 15, 4, 0, 3)
let card23 = new card("eagle", 12, 18, 8, 0, 0)
let card24 = new card("tiger", 14, 12, 7, 0, 0)
let card25 = new card("snake", 9, 17, 4, 0, 5)
let card26 = new card("fire elemental", 15, 10, 3, 0, 10)
let card27 = new card("water elemental", 15, 10, 3, 0, 10)
let card28 = new card("air elemental", 12, 10, 3, 0, 10)
let card29 = new card("earth elemental", 20, 10, 3, 0, 10)
let card30 = new card("beholder", 23, 10, 22, 10, 25)

let listOfCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30]

let player1Hand = []
let player2Hand = []



const pickCardOne = () => {
    let cardChoice1 = prompt("pick your first card")
    if (cardChoice1 === `${card1.name}`) {
        return card1
    }
    else if (cardChoice1 === `${card2.name}`) {
        return card2
    }
    else if (cardChoice1 === `${card3.name}`) {
        return card3
    }
    else if (cardChoice1 === `${card4.name}`) {
        return card4
    }
    else if (cardChoice1 === `${card5.name}`) {
        return card5
    }
    else if (cardChoice1 === `${card6.name}`) {
        return card6
    }
    else if (cardChoice1 === `${card7.name}`) {
        return card7
    }
    else if (cardChoice1 === `${card8.name}`) {
        return card8
    }
    else if (cardChoice1 === `${card9.name}`) {
        return card9
    }
    else if (cardChoice1 === `${card10.name}`) {
        return card10
    }
    else if (cardChoice1 === `${card11.name}`) {
        return card11
    }
    else if (cardChoice1 === `${card12.name}`) {
        return card12
    }
    else if (cardChoice1 === `${card13.name}`) {
        return card13
    }
    else if (cardChoice1 === `${card14.name}`) {
        return card14
    }
    else if (cardChoice1 === `${card15.name}`) {
        return card15
    }
    else if (cardChoice1 === `${card16.name}`) {
        return card16
    }
    else if (cardChoice1 === `${card17.name}`) {
        return card17
    }
    else if (cardChoice1 === `${card18.name}`) {
        return card18
    }
    else if (cardChoice1 === `${card19.name}`) {
        return card19
    }
    else if (cardChoice1 === `${card20.name}`) {
        return card20
    }
    else if (cardChoice1 === `${card21.name}`) {
        return card21
    }
    else if (cardChoice1 === `${card22.name}`) {
        return card22
    }
    else if (cardChoice1 === `${card23.name}`) {
        return card23
    }
    else if (cardChoice1 === `${card24.name}`) {
        return card24
    }
    else if (cardChoice1 === `${card25.name}`) {
        return card25
    }
    else if (cardChoice1 === `${card26.name}`) {
        return card26
    }
    else if (cardChoice1 === `${card27.name}`) {
        return card27
    }
    else if (cardChoice1 === `${card28.name}`) {
        return card28
    }
    else if (cardChoice1 === `${card29.name}`) {
        return card29
    }
    else if (cardChoice1 === `${card30.name}`) {
        return card30
    }
    else {
        return "does not exist"
    }
}

const pickCardTwo = () => {
    let cardChoice2 = prompt("pick your second card")
    if (cardChoice2 === `${card1.name}`) {
        return card1
    }
    else if (cardChoice2 === `${card2.name}`) {
        return card2
    }
    else if (cardChoice2 === `${card3.name}`) {
        return card3
    }
    else if (cardChoice2 === `${card4.name}`) {
        return card4
    }
    else if (cardChoice2 === `${card5.name}`) {
        return card5
    }
    else if (cardChoice2 === `${card6.name}`) {
        return card6
    }
    else if (cardChoice2 === `${card7.name}`) {
        return card7
    }
    else if (cardChoice2 === `${card8.name}`) {
        return card8
    }
    else if (cardChoice2 === `${card9.name}`) {
        return card9
    }
    else if (cardChoice2 === `${card10.name}`) {
        return card10
    }
    else if (cardChoice2 === `${card11.name}`) {
        return card11
    }
    else if (cardChoice2 === `${card12.name}`) {
        return card12
    }
    else if (cardChoice2 === `${card13.name}`) {
        return card13
    }
    else if (cardChoice2 === `${card14.name}`) {
        return card14
    }
    else if (cardChoice2 === `${card15.name}`) {
        return card15
    }
    else if (cardChoice2 === `${card16.name}`) {
        return card16
    }
    else if (cardChoice2 === `${card17.name}`) {
        return card17
    }
    else if (cardChoice2 === `${card18.name}`) {
        return card18
    }
    else if (cardChoice2 === `${card19.name}`) {
        return card19
    }
    else if (cardChoice2 === `${card20.name}`) {
        return card20
    }
    else if (cardChoice2 === `${card21.name}`) {
        return card21
    }
    else if (cardChoice2 === `${card22.name}`) {
        return card22
    }
    else if (cardChoice2 === `${card23.name}`) {
        return card23
    }
    else if (cardChoice2 === `${card24.name}`) {
        return card24
    }
    else if (cardChoice2 === `${card25.name}`) {
        return card25
    }
    else if (cardChoice2 === `${card26.name}`) {
        return card26
    }
    else if (cardChoice2 === `${card27.name}`) {
        return card27
    }
    else if (cardChoice2 === `${card28.name}`) {
        return card28
    }
    else if (cardChoice2 === `${card29.name}`) {
        return card29
    }
    else if (cardChoice2 === `${card30.name}`) {
        return card30
    }
    else {
        return "does not exist"
    }
}

const compareCards = (firstCard, secondCard, choice) => {
    if (choice === "strength") {
        if (firstCard.strength > secondCard.strength) {
            console.log(`The winner is ${firstCard.name}`)
        }
        else if (secondCard.strength > firstCard.strength) {
            console.log(`The winner is ${secondCard.name}`)
        }
        else    {
            console.log("It's a tie")
        }
    }
    else if (choice === "agility") {
        if (firstCard.agility > secondCard.agility) {
            console.log(`The winner is ${firstCard.name}`)
        }
        else if (secondCard.agility > firstCard.agility) {
            console.log(`The winner is ${secondCard.name}`)
        }
        else    {
            console.log("It's a tie")
        }
    }
    else if (choice === "intelligence") {
        if (firstCard.intelligence > secondCard.intelligence) {
            console.log(`The winner is ${firstCard.name}`)
        }
        else if (secondCard.intelligence > firstCard.intelligence) {
            console.log(`The winner is ${secondCard.name}`)
        }
        else    {
            console.log("It's a tie")
        }
    }
    else if (choice === "spells") {
        if (firstCard.spells > secondCard.spells) {
            console.log(`The winner is ${firstCard.name}`)
        }
        else if (secondCard.spells > firstCard.spells) {
            console.log(`The winner is ${secondCard.name}`)
        }
        else    {
            console.log("It's a tie")
        }
    }
    else if (choice === "corruption") {
        if (firstCard.corruption < secondCard.corruption) {
            console.log(`The winner is ${firstCard.name}`)
        }
        else if (secondCard.corruption < firstCard.corruption) {
            console.log(`The winner is ${secondCard.name}`)
        }
        else    {
            console.log("It's a tie")
        }
    }
}

const each_round = () => {
    let choice = prompt("Please pick a statistic to compare: (strength, agility, intelligence, spells, corruption).")
    if (choice === "strength" || choice === "agility" || choice === "intelligence" || choice === "spells" || choice === "corruption") {
        console.log(player1Hand);
        let firstCard = pickCardOne();
        console.log(player2Hand);
        let secondCard = pickCardTwo();
        if (firstCard === "does not exist" || secondCard === "does not exist") {
            console.log("Sorry but one or both of those cards does not exist.  Please choose from the available trump cards.")
            each_round()
        }
        else {
            console.log(firstCard)
            console.log(secondCard)
            compareCards(firstCard, secondCard, choice)
        }
    }
    else {
        console.log("I'm sorry but that statistic doesn't exist.  Please try again.");
        each_round ();
    }
    
}

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



