let user_input;
let number;
do {
    user_input = prompt("Enter a positive integer");
    number = Number(user_input);
    if (typeof number == 'number' && !isNaN(number)){
        if (Number.isInteger(number)) {      //ถ้าเป็นตัวเลข
            if (number >= 2) {          //ตรวจสอบจำนวนเฉพาะ
                showPrimes(number);    //เรียกฟังก์ชัน
                break;                 //จบโปรแกรม
            }
        } else {               //ตรวจสอบเลขทศนิยม
            continue;          //ถามต่อ
        } 
    }                          
} while (true);            //ถ้าเป็นตัวอักษรจะทำวนซ้ำ


function showPrimes(number) {
    let primeNum = [];      //สร้างArrayเพื่อเก็บจำนวนเฉพาะ
    for (let i = 2; i < number; i++){
        if (!isPrime(i)) {    //ถ้าไม่ใช่จำนวนเฉพาะให้ไปตัวถัดไป
            continue;
        }
        primeNum.push(i);    //เก็บค่าไว้ใน Array
    }
    alert("For n = " + number +" prime numbers are " + primeNum) ;   //แสดงผล
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {  
        if (number % i == 0) return false;
    }
    return true;
}
