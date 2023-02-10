//constructing an array using Array Literal
var myArr=['orange','mango','kiwi','pears'];
//acess the array using for loops
// document.writeln(`The Values are :<br>`);
for(var i=0;i<myArr.length;i++){
    // document.writeln(myArr[i]);
}//output:orange mango kiwi pears

//ForEach
myArr.forEach((value)=>{
    // console.log(value);
    // document.writeln(value);
});//output:orange mango kiwi pears
//For In loops
for(let j in myArr){
    // document.writeln(myArr[j])
}//output:orange mango kiwi pears

//constructing an array using new keyword
const num=new Array(1,2,3,4,5,6,7);
console.log(num[0])//output 1
console.log(num[3])//output 4
//acess using forEach
num.forEach((value)=>{
    // document.writeln(value)
})//output: 1 2 3 4 5 6 7

//Using Array method to manipulate data
//filter method used to filter out the data if certain condition is true
let mynum=num.filter((value)=>{
    return value>2;
});
// document.writeln(mynum)
//output:3,4,5,6,7
//sorting an array ascending order
let mynum1=num.sort((a,b)=>{
    return a-b;
})
// document.writeln(mynum1);
//output: 1,2,3,4,5,6,7
//sorting in descending order
let mynum2=num.sort((a,b)=>{
    return b-a;
})
// document.writeln(mynum2);
//output:7,6,5,4,3,2,1

//sorting array in random order
const mynum3=num.sort(()=>{
    return 0.5-Math.random();
});
// document.writeln(mynum3);
//output:2,5,4,6,1,7,3

//finding the largest number form a given array
const mynum4=((value)=>{
    return Math.max.apply(null,value);
});
// document.writeln(mynum4(num));
//Output:7

//getting the minimum value
const mynum5=((value)=>{
    return Math.min.apply(null,value);
});
// document.writeln(mynum5(num));
//Output:1