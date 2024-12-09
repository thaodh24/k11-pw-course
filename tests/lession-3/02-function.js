// //Quiz 01:
// function BMICalculation(height, weight) {
//     let BMI = weight / (height * height)
//     if (BMI < 18.5) {
//         return "Thiếu cân";
//     }
//     else if (BMI < 25) {
//         return "Bình thường";
//     }
//     else if (BMI < 30) {
//         return "Thừa cân";
//     }
//     else if (BMI >= 30) {
//         return "Béo phì";
//     }
//     else {
//         return "Invalid input, please try again"
//     }
// };

// console.log (BMICalculation(1.58,55));



//Quiz 02: 
// function ChangeDegree(nhiệtĐộ, loạiNhiệtĐộ) {
//     switch (loạiNhiệtĐộ) {
//         case "C":
//             nhiệtĐộ = nhiệtĐộ * 9 / 5 + 32;
//             loạiNhiệtĐộ = "F";
//             break;

//         case "F":
//             nhiệtĐộ = (nhiệtĐộ - 32) * 5 / 9;
//             loạiNhiệtĐộ = "C";
//     }
//     return (nhiệtĐộ + " " + loạiNhiệtĐộ);
// }
// console.log(ChangeDegree(56, "C"));



// // Quiz 03:
// function SumNumbers(arrays) {
//     let sumN = 0;
//     const size = array.length;
//     for (let i = 0; i < arrays.length; i++) {
//         sumN += arrays[i];
//     };
//     return sumN;
// };

// const numbersList = [2, 4, 6, 8];
// console.log(SumNumbers(numbersList));



//Quiz 04:
// function IsPrimeNumber(number) {
//     if (number % 2 === 0) {
//         return false;
//     }
//     else {
//         for (let e = 0; e < number; e++) {
//             if (number % e === 0) {
//                 return false;
//             }
//             else {
//                 return true;
//             }
//         };
//     };
// };

// function LocSoNguyenTo(array) {
//     const arrayKetQua = [];
//     const size = array.length;
//     for (let i = 0; i < size; i++) {
//         if (IsPrimeNumber(array[i]) === true) {
//             arrayKetQua.push(array[i]);
//         };
//     };
//     return arrayKetQua
// };

// const numberList01 = [0, 1, 4, 5, 7, 8, 9];
// console.log(LocSoNguyenTo(numberList01));



// Quiz 05: 
const global = [
    user1 = {
        name: "User01",
        email: "User01Emai@gmail.com"
    },
    user2 = {
        name: "User02",
        email: "User02Emai@gmail.com"
    }
];

function ChangeEmailToNewEmail (){
    
};
