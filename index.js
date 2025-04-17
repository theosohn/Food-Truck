import { updateText } from "./scripts/utils/updateText.js"
import { GameState } from "./scripts/classes/gameState.js";

const hints = [
    "Choose wisely. Or don’t.", "Park 4 might be your golden goose!", "More people means more money, no matter the trucks!",
    "All parks look the same now. But change is coming!", "Change is coming. Stay alert.", "You’ll make more in parks with fewer trucks and more people.",
    "You’ll make more in Park 3. Definitely.", "Remember, less trucks = more per truck.",
    "No tricks here. Balance is key.", "High truck count always wins!", "Sometimes, luck is all you need.",
    "Try dividing people by trucks. That should help.", "Fewer trucks means fewer customers.", "Choose wisely. Or don’t.",
    "You’ll make more in parks with fewer trucks and more people.", "Sometimes, luck is all you need.", "Remember, less trucks = more per truck.",
    "Fewer trucks means fewer customers.", "Try dividing people by trucks. That should help.", "You’ll make more in Park 3. Definitely.",
    "Sometimes, luck is all you need.", "Change is coming. Stay alert.", "All parks look the same now. But change is coming!",
    "Try dividing people by trucks. That should help.", "Remember, less trucks = more per truck.", "Choose wisely. Or don’t.",
    "High truck count always wins!", "No tricks here. Balance is key.", "Try dividing people by trucks. That should help.",
    "All parks look the same now. But change is coming!", "You’ll make more in Park 3. Definitely.", "Try dividing people by trucks. That should help.",
    "You’ll make more in parks with fewer trucks and more people.", "More people means more money, no matter the trucks!",
    "You’ll make more in Park 3. Definitely.", "Choose wisely. Or don’t.", "Change is coming. Stay alert.",
    "Remember, less trucks = more per truck.", "Park 4 might be your golden goose!", "No tricks here. Balance is key."
    /*"The early bird catches the... burrito? Try Park 2 this hour.",
    "A yoga class just ended at Park 4. Expect a crowd hungry for green smoothies.",
    "Beware! Park 2 is attracting a swarm of toddlers. Deploy the mac and cheese truck!",
    "Park 2: Where fries are eaten faster than they can be made. Join the fry frenzy!",
    "A band just started playing at Park 4. Brace for a mosh pit at the taco truck!",
    "They say Park 3’s ice cream truck just ran out of cones. Time to bring some backup!",
    "Park 1 has a dog parade. Bring extra hot dogs – for the humans!",
    "Rumor has it Park 4 just ran out of napkins – prepare for sticky fingers!",
    "Park 1: The only place where people still believe fries count as a vegetable.",
    "Park 3: Where the line is always longer than the food supply.",
    "Reminder: Ice cream melts in Park 4 faster than decisions are made here.",
    "Park 2: Now with 20% more 'Oh, I thought this was the taco truck.'",
    "Park 3: Where every decision is just a very long wait in disguise.",
    "Park 4 is currently experiencing a 'We don’t have that' shortage.",
    "Rumor has it that Park 1 has WiFi. Also, people there occasionally buy food.",
    "Park 2: Serving the existentially hungry since... well, this hour.",
    "Park 4: Free napkins are limited, use sparingly or not at all.",
    "If lost, head to Park 3. You won’t find directions, but you will find people asking for them.",
    "Park 1: Now with 10% more food trucks and 90% more people wondering why.",
    "Someone at Park 2 asked for a salad. This was not well received.",
    "Park 4: Come for the food, stay because you’re still waiting for it.",
    "Park 3: Where every hot dog has a 50/50 chance of being the last one.",
    "Please note: The fries in Park 1 are now considered a limited edition.",
    "Park 4: Less a food experience, more an exercise in patience.",
    "Park 1 just got a new truck! No one knows what it serves yet.",
    "In Park 3, they say if you stare long enough, a truck might appear.",*/
];

const numOfPeople = [
    [[24, 14, 45, 21, 58, 47, 55, 38],
     [50, 76, 39, 29, 35, 60, 17, 11],
     [12, 26, 37, 59, 22, 55, 18, 53],
     [28, 38, 70, 20, 31, 18, 61, 13],
     [23, 78, 63, 38, 12, 37, 24, 80]],
    [[13, 13, 10, 58, 20, 20, 36, 51],
     [37, 70, 24, 79, 37, 16, 49, 73],
     [44, 32, 45, 65, 20, 60, 56, 21],
     [27, 13, 27, 66, 16, 39, 62, 64],
     [10, 79, 50, 76, 15, 23, 30, 43]],
    [[45, 21, 30, 22, 80, 39, 44, 17],
     [73, 32, 39, 14, 18, 20, 65, 27],
     [17, 44, 25, 25, 50, 79, 11, 76],
     [18, 22, 72, 11, 27, 35, 42, 27],
     [33, 10, 35, 38, 78, 30, 77, 61]],
    [[41, 37, 64, 55, 47, 22, 19, 39],
     [60, 36, 75, 63, 45, 25, 10, 28],
     [23, 53, 74, 63, 28, 29, 10, 45],
     [34, 76, 43, 20, 61, 20, 62, 30],
     [27, 12, 15, 78, 20, 60, 47, 13]]
];

const numOfFoodTrucks = [
    [[4, 4, 6, 6, 6, 7, 3, 1],
     [8, 6, 7, 3, 6, 4, 7, 6],
     [6, 2, 6, 5, 5, 3, 3, 5],
     [2, 2, 6, 5, 6, 5, 1, 6],
     [3, 5, 3, 3, 3, 4, 4, 8]],
    [[3, 1, 5, 5, 4, 5, 4, 6],
     [3, 5, 6, 8, 6, 2, 8, 1],
     [8, 2, 5, 4, 3, 6, 5, 5],
     [7, 6, 4, 2, 6, 1, 2, 5],
     [4, 1, 5, 6, 6, 2, 5, 1]],
    [[2, 4, 3, 1, 2, 8, 3, 7],
     [5, 8, 8, 6, 1, 4, 6, 7],
     [7, 3, 1, 3, 6, 1, 6, 4],
     [2, 6, 8, 1, 8, 2, 8, 6],
     [3, 5, 7, 6, 1, 3, 6, 7]],
    [[2, 7, 4, 8, 1, 6, 8, 5],
     [3, 3, 6, 5, 7, 3, 4, 8],
     [3, 4, 5, 8, 4, 1, 3, 6],
     [5, 4, 4, 1, 2, 5, 4, 7],
     [3, 8, 8, 5, 7, 3, 1, 7]]
];

const customMemoryGame = [
    [['052', '645', '1635', '314', '05641', '3150', '21346', '1624'],
    ['40136', '453021', '3125', '261', '5326', '35420', '063', '625'],
    ['516', '125', '2065', '46315', '651', '12634', '630', '43065'],
    ['635', '4503', '015623', '245', '0624', '534', '52461', '601'],
    ['506', '203416', '56423', '4523', '406', '6201', '251', '135620']],
    [['026', '065', '631', '53046', '240', '521', '1045', '41623'],
    ['0613', '061352', '416', '043615', '0163', '123', '3265', '652143'],
    ['5120', '4316', '3042', '30426', '256', '40523', '63410', '260'],
    ['231', '142', '634', '42013', '350', '2640', '24105', '31602'],
    ['351', '032165', '34021', '401326', '514', '450', '4520', '3526']],
    [['1426', '042', '0361', '630', '240153', '2103', '0614', '231'],
    ['406125', '5341', '0361', '451', '314', '456', '20613', '206'],
    ['534', '0613', '601', '301', '03624', '132405', '412', '610354'],
    ['250', '302', '301526', '264', '106', '4650', '1403', '056'],
    ['1052', '201', '6325', '5124', '635412', '2450', '645013', '56032']],
    [['4063', '2540', '23154', '43652', '1254', '416', '520', '4216'],
    ['62415', '2654', '124035', '61052', '3412', '120', '354', '205'],
    ['630', '12460', '032546', '53460', '124', '251', '346', '6524'],
    ['6345', '146025', '1453', '524', '04625', '056', '26015', '5126'],
    ['561', '241', '316', '250314', '013', '52643', '4316', '513']]
];

const tutorialHints = [
    "There were the same number of people and trucks at both parks that time, but that's going to change!",
    "See how money is proportional to people? Keep in mind the total number of people at both parks remains the same for this tutorial.",
    "Now the number of trucks changed! Money is inversely proportional to trucks. The total number of trucks is also the same here.",
    "People and trucks for Day 2 will be identical to Day 1. Try to make as much money as you can!",
    "",
    "Every hour of Day 2 is the same as Day 1!",
    "The amount of customers that go to your truck is simply people/trucks. This will change in the real game.",
    "Keep in mind all customers pay $10 in this tutorial. This will change in the real game.",
    "The amount of money in an hour also decreases by 25% each time you guess the order wrong!",
    ""
];

const tutorialNumOfPeople = [
    [[40,64,40,64,64],[40,64,40,64,64]], //park 1 day 1: hours
    [[40,16,40,16,16],[40,16,40,16,16]]
];

const tutorialNumOfFoodTrucks = [
    [[5,5,2,2,8],[5,5,2,2,8]],
    [[5,5,8,8,2],[5,5,8,8,2]]
];

//taco, burger, hotdog, pizza, ice cream, soda, coffee
const tutorialCustomMemoryGame = [
    [['025', '1305', '4562', '016', '42530'],
    ['136', '2416', '5603', '120', '536412']],
    [['025', '1305', '4562', '016', '42530'],
    ['136', '2416', '5603', '120', '536412']]
];

//tutorial settings, remember to modify GameState.generateProfit, memoryGame sequence creation, and maybe GameState.displayNumberOfMovingTrucks (doesn't work, also uncomment all uses)
//const gameState = new GameState(false, tutorialHints, 2, 2, 5, tutorialNumOfPeople, tutorialNumOfFoodTrucks, tutorialCustomMemoryGame); //tutorial settings
const gameState = new GameState(false, hints, 4, 5, 8, numOfPeople, numOfFoodTrucks, customMemoryGame); //real game settings

updateText('final-day', gameState.numOfDays);

updateText('remaining-hours', gameState.numOfHours - gameState.currentHour);
updateText('current-day', gameState.currentDay + 1);
