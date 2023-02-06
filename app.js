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
})