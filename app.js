//Polymorphism

class Employee{
    display(){
        document.writeln('hello');
    }
}
class Person extends Employee{
    display(){
        document.writeln('Developer');
    }
}
let person1=[new Employee(),new Person()];
person1.forEach((msg)=>{
    msg.display();
});



//Form validation


const form=document.getElementById('form');
const email=document.getElementById('email');

const username=document.getElementById('username');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
form.addEventListener('submit',(e)=>{
e.preventDefault();
checkInput();
});
function checkInput(){
    //get the values from inputs
    const usernamevalue=username.value.trim();
    const emailvalue=email.value.trim();
    const passwordvalue=password.value.trim();
    constpass2value= password2.vallue.trim();


    //test condition
    if(usernamevalue === ' '){
        //show error
        Seterrorfor(username,'usename cannot be blank')
    }else{
        //show valid
        setsuccess(username);
    }
}