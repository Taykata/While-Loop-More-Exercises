function dishwasher(input) {

    let bottlesOfDetergent = Number(input[0]);
    let detergent = bottlesOfDetergent * 750;
    let index = 1;
    let command = Number(input[index]);

    let dishesTimesCounter = 0;
    let dishesCounter = 0;
    let potCounter = 0;

    let detergentMore = 0;

    while (true) {

        command = (input[index]);

        if (command === "End") {
            break;
        }

        if (command !== "End")
        command = Number(input[index]);
        index++;

        if (dishesTimesCounter >= 2) {
            dishesTimesCounter = 0;
            detergent -= command * 15;
            potCounter += command;
            detergentMore += command * 15;
        } else {
            detergent -= command * 5;
            dishesCounter += command;
            dishesTimesCounter++;
            detergentMore += command * 5;
        }

        if (detergent <= 0) {
            break;
        }

    }

    let result = detergentMore - input[0] * 750;

    if (detergent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishesCounter} dishes and ${potCounter} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    } else if (detergent <= 0) {
        console.log(`Not enough detergent, ${result} ml. more necessary!`);
    }

}

dishwasher(["1", "10", "15", "10", "12", "13", "30"]);