let input_data;
let number_data;
let data_array = [];
let avg;
let list = readInput(); 

function readInput() {
    do {
        input_data = prompt("Enter a positive integer");
        number_data = Number(input_data);
        if (typeof number_data == 'number' && !isNaN(number_data)) {
            if (number_data  > 0) { //เก็บข้อมูลเลขบวก
                data_array.push(number_data); //เก็บข้อมูลเข้า array
                continue;    //ถามต่อ
            } else if (number_data < 0 && data_array.length >= 1) { //เช็คเลขลบ
                averageCal();   //คำนวณค่าเฉลี่ย
                alert("For the list " + data_array + " the average is "
                + avg + ", the minimum is " + Math.min.apply(Math, data_array) + ", and the maximum is " +
                Math.max.apply(Math, data_array));   //แสดงข้อความ
               break;   //จบ
            } else if (number_data == 0){   //ถ้าใส่ 0 หรือ ว่างเปล่า จะทำต่อโดยไม่เก็บข้อมูล
                continue;
            } else {
                let displayStats = (number_data < 0 && data_array.length == 0) ?   //ถ้าใส่ค่าลบตัวแรกโปรแกรมจะแสดง avg min max = 0
                () => alert("For the list empty the average is 0, the minimum is 0 , and the maximum is 0") :
                () => list;  // ถ้าไม่จริง จะไปที่ readInput เพื่อแสดงข้อความ
                displayStats();  //เรียกใช้งาน
                break; //จบ
            }
        } 
    }while(true);
}

function averageCal() {
    avg = data_array.reduce((a,b) => a+b, 0) / data_array.length;
}





