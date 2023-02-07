const car=[
    {title:'BMW',price:10000},
    {title:'Prado',price:20000},
    {title:'Probox',price:10000},
    {title:'MArk X',price:50000},
    {title:'AUDI',price:6000}

];
//get expensive car
const maxValue= Math.max.apply(null,
    car.map((value)=> { return value.price; }));
 
  console.log(maxValue);
  //get Cheaper car
const minValue= Math.min.apply(null,
    car.map((value)=> { return value.price; }));
 
  console.log(minValue);
 Array_keys
//method return an array iterator object with the keys of the array
  const fruit=['banana','apple','mango','kiwi','passion'];
  let Fruits=fruit.keys();
  let str='';
  for (let i of Fruits){
    str+=i+'<br>'
  }
  document.writeln(str);//01234;

  //IndexOf()
  const fruit=['apple','banana','apple','mango','kiwi'];
  let postion =fruit.indexOf('apple');//0
  let postion1=fruit.indexOf('apple',1)//2
  console.log(postion);//0
  console.log(postion1);//2

  //LastIndexOf()
  const Fruit=['apple','banana','apple','mango','kiwi'];
  let last_index=Fruit.lastIndexOf('apple')+1;//3
  console.log(last_index);
  var web='Learn javascript on the web tutorial';
  let c=web.lastIndexOf('a');
  console.log(c);//34
  //specify not to go beyond 22 characters
  let d=web.lastIndexOf('a',22);
  console.log(d);
let e=web.lastIndexOf('java');
console.log(e);//6
