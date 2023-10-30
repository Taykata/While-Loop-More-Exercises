function reportSystem(input) {

    let neededMoney = Number(input[0]);
    let index = 1;

    let cashPayment = Number(input[index]);
    index++;
    let cardPayment = Number(input[index]);
    index++;

    let sum = 0;

    let averageCashPayment = 0;
    let averageCardPayment = 0;

    let myCashPayment = 0;
    let myCardPayment = 0;

    let cashCounter = 0;
    let cardCounter = 0;

    while (true) {

        if (cashPayment === "End" || cardPayment === "End") {
            console.log(`Failed to collect required money for charity.`);
            break;
        }

        if (cashPayment > 100) {
            console.log(`Error in transaction!`);
            cashPayment = false;
        }

        if (cardPayment < 10) {
            console.log(`Error in transaction!`);
            cardPayment = false;
        }

        if (cardPayment !== false) {
            console.log(`Product sold!`);
            sum += cardPayment;
            myCardPayment += cardPayment;
            cardCounter++;
        }

        if (cashPayment !== false) {
            console.log(`Product sold!`);
            sum += cashPayment;
            myCashPayment += cashPayment;
            cashCounter++;
        }

        if (sum >= neededMoney) {
            averageCardPayment = myCardPayment / cardCounter;
            averageCashPayment = myCashPayment / cashCounter;
            console.log(`Average CS: ${(averageCashPayment).toFixed(2)}`);
            console.log(`Average CC: ${(averageCardPayment).toFixed(2)}`);
            break;
        }

        cashPayment = input[index];
        if (cashPayment !== "End") {
            cashPayment = Number(input[index]);
        }
        index++;
        cardPayment = input[index];
        if (cardPayment !== "End") {
            cardPayment = Number(input[index]);
        }
        index++;

    }

}

reportSystem(["500", "120", "8", "63", "256", "78", "317"]);