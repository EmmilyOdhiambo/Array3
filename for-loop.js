
//Arrays3
//Write a function that accepts an array of strings and console.logs each element using a for loop.
function counry (array){
for(let i = 0; i <array.length; i++){
    console.log(array[i]);
}
}
let array = ["Kenyan","Citizens"];
counry(array);
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2
function number(arr){
    arr.forEach(element =>{
        console.log(element *2)
    });
}
let num = [5,10,15,20,25];
number(num);
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function multiplyArr (array1){
    const firstfour = array1.slice(0,4).map(num => num*8);
    const lasttwo = array1.slice(-2).map(num => num +5);
    const multiplyArr = [...firstfour,...lasttwo];
    console.log(multiplyArr);
}
const myscores = [25,30,45,35,60,75,50];
multiplyArr(myscores);

//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];
function number(arr1){
    let i = 0;
    while(i<arr1.length){
        if(i ===4){
            break;
        }
        i++;
    }
    return i ;
}
let arrNum = [1,2,3,4,5,6,7,8,9];
console.log(number(arrNum));
//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']
function fruit (array4){
    for (let i = 0; i<array4.length; i++){
        if (i===2){
            continue;
        }
        console.log(array4[i]);
    }
}
let fruits = ["apple",'plum','banana','strawrries','kiwi'];
fruit(fruits);