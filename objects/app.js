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