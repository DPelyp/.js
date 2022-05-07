// function calculateTips (BILLS) { if (BILLS >= 20) {
//     const calcTip = BILLS * 0.15;
//     return calcTip;
// } else if (BILLS < 20) {
//     const calcTip2 = BILLS * 0.20;
//     return calcTip2;
// }
// }

// const BILLS = [11, 20, 47];
// console.log(BILLS);

// const TIPS  = [calculateTips(BILLS[0]), calculateTips(BILLS[1]), calculateTips(BILLS[2])];
// console.log(TIPS);

// const TOTAL_AMOUNT = [BILLS[0] + TIPS[0], BILLS[1] + TIPS[1], BILLS[2] + TIPS[2]]; 
// console.log(TOTAL_AMOUNT);

// console.log(Boolean(0), Boolean(undefined), Boolean(''), Boolean(null), Boolean(NaN));

// console.log(Boolean(32), Boolean([]), Boolean('Hello'), Boolean({}), Boolean(3.2));

// age = 5;
// if (age > 0) {console.log("U are born!")} else if (age < 0) {console.log("WTF")}

// let weight; 
// if (weight) {console.log("It exists!")} else {console.log("OK")}

// console.log(true && true);
// console.log(true && false);
// console.log(false && false);


// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// const hasMoney = true;
// const isAdult = true;
// const isNotComletelyDrunk = true;

// if (hasMoney && isAdult && !isNotComletelyDrunk) {console.log("OK")} else {console.log("WTF")}

// const color = 'yellow';

// switch(color) {
//     case 'green':
//         console.log("Go!");
//         break;
//     case 'yellow':
//         console.log("Get ready!")
//         break
//     case 'red':
//         console.log("Stop")
//         break
//     default:
//         console.log("Incorect color")
// }

// const Jake = {
// name : 'Jake',
// lastName : 'White',
// weight : 79,
// height : 1.70
// }

// const Mike = {
//     name : 'Mike',
//     lastName : 'Black',
//     weight : 91,
//     height : 1.93
// }

// console.log(Object.values(Mike)[0])
// console.log(Mike.name)

// const BaseName = "last";
// console.log (Mike[BaseName + 'Name'])

// const userInput = prompt('What do u want to know about Mike? Choose between name, last Name, weight or height')

// console.log(Mike[userInput])

// if (Mike[userInput]) {
//     console.log(Mike[userInput])
// } else {
//     console.log("WTF??")
// }

// Mike.location = "Ukraine";
// const telega = 'telegram';
// Mike[telega] = 'syrex73075'
// console.log(Mike)

// youraObject = {
//     name: 'YouRa',
//     lastname: 'Allakhverdov',
//     birthYear: 1975,
//     job: 'programming instructor',
//     familyMembers: ['Irina', 'Michael', 'YouRa']
//  };

// console.log(`${youraObject.name} has  ${youraObject.familyMembers.length} family members, and the first one is  ${youraObject.familyMembers[0]}`)

// function index () {
//    const JakeWeight = Object.values(Jake)[2];
//    const JakeHeight = Object.values(Jake)[3];
//    const BMI1 = JakeWeight / JakeHeight ** 2;
// //    console.log (BMI1);

//    const MikeWeight = Object.values(Mike)[2];
//    const MikeHeight = Object.values(Mike)[3];
//    const BMI2 = MikeWeight / MikeHeight ** 2;
// //    console.log (BMI2);

//    if (BMI1 > BMI2) {
//        console.log(Object.values(Jake)[0],  Object.values(Jake)[1] + " " + "BMI" + " : "+ (BMI1) + " "+ "is higher than Mike Black" + " : " + (BMI2))
//    } else if (BMI1 < BMI2) {
//        console.log(Object.values(Mike)[0],  Object.values(Mike)[1] + " " + "BMI" + " : "+ (BMI2) + " "+ "is higher than Jake White" + " : " + (BMI1))
//    }
// }

// index()

// const ok =["ok2", 123, {"Dimka": 23}]

// console.log (ok)

// function colorMixer (color1, color2){
//     const NewColor = `${color1} + ${color2}`;
//     return NewColor
// }


// function colorizer (item, color1, color2) {
//     const color = colorMixer (color1, color2);
//     const colorizedItem = `The ${item} is ${color}`;
//     return colorizedItem;
// }

// const colorizedCar = colorizer ('car', 'red', 'blue')
// console.log (colorizedCar)

// const DEPT1_1Q = [35467, 29842, 38501];
// const DEPT2_1Q = [70533, 50121, 33899];

// const DEPT1_2Q = [50301, 21984, 19207];
// const DEPT2_2Q = [72381, 41562, 29465];


// function getAverage (a, b, c) {
//     const averageSales = (a + b + c) / 3;
//     return averageSales;
// }

// const dept1AverSales1 = getAverage(DEPT1_1Q[0],DEPT1_1Q[1],DEPT1_1Q[2]);
// const dept2AverSales1 = getAverage(DEPT2_1Q[0],DEPT2_1Q[1],DEPT2_1Q[2]);

// const dept1AverSales2 = getAverage(DEPT1_2Q[0],DEPT1_2Q[1],DEPT1_2Q[2]);
// const dept2AverSales2 = getAverage(DEPT2_2Q[0],DEPT2_2Q[1],DEPT2_2Q[2]);

// console.log(dept1AverSales1, dept2AverSales1, dept1AverSales2, dept2AverSales2)
  
// function printBonus(a, b) {
//     let bonus = (a - b) / b * 100;
//     if (bonus >= 30){
//         console.log(bonus)
//     } else if(bonus >= 35) {
//         console.log ('Dept 1 will get a bonus of 35%');
//     }
// }


// printBonus(dept1AverSales1, dept2AverSales1);