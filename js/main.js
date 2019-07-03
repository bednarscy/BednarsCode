
//praca domowa z gwiazdka

function homework (name, age) {

    console.log (`${name}, ${age}`);
}
homework('matjas', 29*2);
homework('Chrust', 27*2);
homework('Łosiek', 18*2);



//wersja a'la Chrusciel
function work (name,age){
  age =  age * 2;
   console.log (`${age}, ${name}`);
}
work (50, 'bednar');



// teeest

//function work (name,age){
  //  age = 500;
  //  doubleAge =  age * 2;
   // name = 'Mateusz';
   // console.log (`${doubleAge}, ${name}`);
//}
//work (doubleAge, name);


const button = document.querySelector ('.navigation__button--js');

//console.log(button);

//button.addEventListener('click', work);
button.addEventListener('click', (e) => {
    const headertext = document.querySelector ('.main__heading--js');
    headertext.innerHTML = 'dobranoc Łośku :*'
})