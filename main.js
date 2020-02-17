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
   if(getvalue =="" ){
    alert("Ошибка! Заполните поле!");
    return;
}
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
   if(getvalue1 =="" || getvalue2==""){
       alert("Ошибка! Заполните поля!");
       return;
   }
   const checkedValue1 = Number(getvalue1);
   const checkedValue2= Number(getvalue2);
   
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


//exercise 5

function join_el() {
    
    const myColor = ["Red", "Green", "White", "Black"];
    document.getElementById('join_result').innerText = myColor.join("+");
}


//exercise 6
function getMonth (date){
    options=[ "January",  "February", 
    "March", "April",  "May", 
    "June", "July", "August", 
    "September", "October", "November", 
    "December" ];

    document.getElementById('getMonth_result').innerText += '" ' + options[date.getMonth()] + ' " ;';

}

getMonth(new Date("10/11/2009"));
getMonth(new Date("11/13/2014")); 


//exercise 7


function checkFirstChar(){
    if(document.getElementById('input_checkFirstChar').value[0] ==undefined){
        alert("Введите строковый символ!");
        return;
    } else if (isFinite(document.getElementById('input_checkFirstChar').value[0])){
        alert('Первый символ не может быть числом!');
        return;
    }else{
    const checkChar = document.getElementById('input_checkFirstChar').value[0].toUpperCase();
    document.getElementById('input_checkFirstChar').value[0]=== checkChar ? document.getElementById('checkFirstChar_result').innerText = "Первая буква верхнего регистра" : document.getElementById('checkFirstChar_result').innerText = "Первая буква нижнего регистра";
    }
}


//exercise 8
function drawSmile()
  {
var canvas = document.getElementById('smile_result');
if (canvas.getContext)
{
let ctx = canvas.getContext('2d'); 

const x = 140, 
y= 70,
 r = 50;

ctx.lineWidth = 2;
ctx.strokeStyle = '#000';


ctx.beginPath();
ctx.arc(x,y, r, 0, 2 * Math.PI, false);
ctx.fillStyle = '#EFC2BF';
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.arc(x-20,y-15,r/15,2*Math.PI,false);
ctx.lineWidth = 1;
ctx.fillStyle = '#000';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(x+20,y-15,r/15,2*Math.PI,false);
ctx.lineWidth = 1;
ctx.fillStyle = '#000';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(x,y+20,r/2.2,Math.PI,false);
ctx.lineWidth = 2;
ctx.stroke();

}
}


// Task 3


//exercise 1

function patter() {
    let patter = document.getElementById('patter_block');
    const text = [];
    for(let i=0;i<6;i++){
        text[i]= patter.children[i].textContent;
    }
    patter.children[0].textContent = text[2];
    patter.children[1].textContent = text[4];
    patter.children[2].textContent = text[1];
    patter.children[3].textContent = text[5];
    patter.children[4].textContent = text[3];
    patter.children[5].textContent = text[0];
    for(let i=0;i<6;i++){
       console.log(patter.children[i].textContent);
    }    
  
}


//exercise 2
function paint(){
    const elements = document.getElementsByClassName('element');
    for(let i=0;i<elements.length;i++){
        if(i<elements.length/2){
            elements[i].style.color = "red"
        }else{
            elements[i].style.color = "green";
        }
    }
}


//exercise 3


function addTodoEl(){
    const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    const todo_list = document.getElementById('todo-list');
    let new_elem;
    for(let i=0;i<tasks.length;i++){
        new_elem = document.createElement("li");
        new_elem.className = "todo_task";
        new_elem.innerText = tasks[i];
        todo_list.appendChild(new_elem);
    }
}
//exercise 4

function addHr(){
    const par = document.querySelectorAll('article > p')
    for(let el of par){
    
        el.innerHTML += '<hr>'
}
}
//exercise 5

function rep_and_del(){
    let cart_items = document.getElementById('cart-items');
    for(let i=0;i<cart_items.children.length;i++){
        if(cart_items.children[i].textContent=="Cola 1.5 l. x 1"){
            cart_items.children[i].remove();
        }
        if(cart_items.children[i].textContent=="Chocolate barx 3"){
            const new_div = document.createElement("div");
            new_div.className = "item";
            new_div.innerText =  "Canned Fish";
            const new_span = document.createElement("span");
            new_span.className = "qty";
            new_span.innerText = "x 4";
            new_div.appendChild(new_span);

            cart_items.replaceChild(new_div,cart_items.children[i])
        }
    }
}

//exercise 6


function addItem(){
    let task = prompt("Введите, что хотите сделать:");
    if(task == "" || task==NaN || task==undefined){
        return;
    }else{
        let todoList = document.getElementById('todoList');
        const new_task = document.createElement('li');
        new_task.className="newTaskItem";
        new_task.innerText = task;
        todoList.appendChild(new_task);
    }
}