const names = ["Guadalupe", "Ollie", "Aki"];


function writeCards(names){
    let birthday = [];
    for(let i = 0; i < names.length; i++){
    birthday.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }
    return birthday;
}

writeCards(names);



function countDown(number){
    while (number >= 0){
         console.log(number);
         number--;
       
    }
}

countdown(10);


