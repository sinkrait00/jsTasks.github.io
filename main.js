//Task 1
// exercise 1
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        });
    }
    
//Task 2
// exercise 1
    const optionsDay={
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }

function date_and_time() {
    
    let date = new Date();
    const day = date.getDay();
    let getCurrentHours = date.getHours();
    let getCurrentMinutes = date.getMinutes();
    let getCurrentSeconds = date.getSeconds();
    let getCurrentAmPm = getCurrentHours >= 12 ? 'PM' : 'AM';
    getCurrentHours %= 12;
    getCurrentHours = getCurrentHours ? getCurrentHours : 12; 
    getCurrentMinutes = getCurrentMinutes < 10 ? '0'+getCurrentMinutes : getCurrentMinutes;
    document.getElementById('date_block__day').innerHTML= optionsDay[day];
    
        document.getElementById('date_block__time').innerHTML= getCurrentHours + ' ' + getCurrentAmPm + ' : ' + getCurrentMinutes + ' : ' + getCurrentSeconds;

       
     setInterval(date_and_time,1000);   
}

date_and_time();


// exerceise 2


function reverse_value() {
const getvalue = document.getElementById('input_value').value;
const revValue = getvalue.split("").reverse().join("");
document.getElementById('value_result').innerText = revValue;   
}

//exercise 3

function fact() {
    let res=1;
   const getvalue = document.getElementById('input_fact').value;
   const checkedValue = Number(getvalue);
    if (checkedValue==NaN){
        alert("Ошибка! Введите число!");
    }else if ( checkedValue<0){
        alert("Ошибка! Факториал может быть только положительным.")
    }else if( checkedValue > 100){
        alert("Слишком большое число, я не хочу его считать :c")
    }else{
        for(let i=1; i<=checkedValue;i++){
            res*=i;
        }
        document.getElementById('fact_result').innerText = res; 
    }
}


//exercise 4

function larger() {
   const getvalue1 = document.getElementById('input_firstValue').value;
   const getvalue2 = document.getElementById('input_secondValue').value;
   const checkedValue1 = Number(getvalue1);
   const checkedValue2= Number(getvalue2)
   
    if (checkedValue1 ==NaN || checkedValue2==NaN){
        alert("Ошибка! Введите число!");
    }else{
        if(checkedValue1>checkedValue2){
            document.getElementById('larger_result').innerText = checkedValue1 + " наибольшее";
        }else if(checkedValue1==checkedValue2){
            document.getElementById('larger_result').innerText = "Числа равны";
        }else{
            document.getElementById('larger_result').innerText = checkedValue2 + " наибольшее";
        }
    }
}
