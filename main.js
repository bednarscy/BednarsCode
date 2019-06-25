console.log('Witaj');
const name = 'Mateusz';
const age = 29;
let Mateusz = null;
console.log (name);
console.log (age);
console.log (`nazywam sie ${name} i mam ${age} lat`);
const para = document.querySelectorAll('p');
console.log (para);
console.log (para[0]);

//const head = document.querySelector('.main__heading--js');
//console.log('head.innerHTML');
//head.innerHTML = `NAGŁÓWEK`;

//const pracajs = document.querySelector('.pracajs--js');
//pracajs.innerHTML  = 'Zrobiłem prace domowa';

//if ('javascript' != 'java'){
//    console.log ('yeeeah')
//}

if (age > 60) { 
    console.log ('masz za dzuo');
}
else if ((age <= 30) && (age >= 30)) {
    console.log ('może być'); 
}
else {
    console.log ('teraz okookoko');
}

switch (age){
    case 20:
        console.log ('masz 20');
    break;
    case 30:
        console.log ('masz 30');
    break;
    default:
        console.log (`masz ${age} latek`);
    break;
}

const staruszek = (age > 90) ? 'yes' : 'no';
console.log('staruszek');

let oldMan; 
if (age > 80){

oldMan = 'yes';
} else {
    oldMan = 'no';
}
//funkcje
function calculate (x){
    x = x + 3;
    console.log  (`tradycyjnie ${x}`);
    return x*7
}
console.log (calculate(2));
const myCalculation = calculate(4);
console.log (myCalculation);

// funkcja skrócona

//const calculateFat = (x) => {
 //   x = x + 3;
  //  console.log  (` fat ${x}`);
  //  return x*7
//}
//console.log (calculateFat (2));

//jeszcze bardziej skrociona

const calculateFat = (x) => (x+3)*7;{

}
console.log (calculateFat (2));