 let js="amazing";

// console.log(5+99-3+44-90);

let firstName="shakib";
console.log(firstName);

//variable name convention 

let rabeya_bosri="RB";
let $sunction=67;

let person="kadr";
let PI=3.1416;
let myFirstJob="coder";
let myCurrentJob="Baker";
let job1="programmer";
let job2="baker pro";
console.log(myFirstJob);


// Data types

let javascriptIsFun=true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'rabeya');
javascriptIsFun ='YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);

//math operators
const now=2037;
const ageRabeya= now-1991;
const ageShakib=now -2019;
console.log(ageRabeya,ageShakib);
console.log(ageRabeya*2,ageShakib/10,2**3);
// 2** 3 means 2 to the power of 3 =2*2*2

const firstNAme='rabeya';
const lastNAme='bosri';
console.log(firstNAme+''+lastNAme);
//Assignment operators
let x=10+5;//15
x+=10;//x=x+10=25
x*=4;// x=x*4=100
x++;
x--;
console.log(x);

//comparison operators
console.log(ageRabeya>ageShakib);
console.log(ageShakib);
const isFullAge=ageRabeya>=18;
console.log(now-1992>now-2019);

const now=2038;
const ageRabeya=now-1992;
const ageShakib=mow-2019;
console.log(now-1992>now-2019);

let x,y;
x=y=25-10-5;//x=y=10,x=10
console.log(x,y);

const averageAge=(ageRabeya+ageShakib)/2;
console.log(ageRabeya,ageShakib,averageAge);



//GOOD LUCK
const markWeights=78;
const markHeights=1.69;
const johnWeights=92;
const johnHeights=1.95;
console.log(markHeights,markWeights,johnHeights,johnWeights);

const markBMI= markWeights/markHeights**2;
const BMIJohn=johnWeights/(johnHeights*johnHeights);

const higherBMI=markBMI>BMIJohn;
console.log(markBMI,BMIJohn ,higherBMI);*/


const firstName="Leo";
const job="Web developer";
const birthYear=1987;
const year=2023;

const leo="I'm " + firstName + ', a ' + (year -birthYear) + ' years old ' +  job  +  '!';
console.log(leo);

const leoNew=`I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(leoNew);

console.log(`just a regular string...`);

console.log('String with \n\ multiple \n\lines');

console.log(`String 
multiple
lines`);


const age=2;
if (age>=18){
    console.log('Rabeya can start driving license');
} else{

    const yearLeft =18-age;
    console.log(`Rabeya is too young .wait another ${yearLeft} years :)`);
}

const birthYearr=1999;
let century;
if (birthYearr<=200){
    century=20;
}else{
    century=21;
}
console.log(century);




const markWeights=78;
const markHeights=1.69;
const johnWeights=92;
const johnHeights=1.95;
console.log(markHeights,markWeights,johnHeights,johnWeights);

const markBMI= markWeights/markHeights**2;
const BMIJohn=johnWeights/(johnHeights*johnHeights);

const higherBMI=markBMI>BMIJohn;
console.log(markBMI,BMIJohn ,higherBMI);

if(markBMI>BMIJohn){
    console.log(`Mark BMI is higher then John ${markBMI} `);
}else{
    console.log(`Jhon BMI is higher than Marks' ${BMIJohn}`);
}





// type conversion
 const  inputYear ='1998';
 console.log(Number(inputYear),inputYear);
 console.log(Number (inputYear)+19);

 console.log(Number ('Rabeya'));
 console.log(typeof NaN);

 console.log(String (23),23);

 // type coercion

 console.log('I am ' + 23 + 'years old');
 console.log('24'-'10'-3);
 console.log('23'/'2');


 let n='1' +1; //'11'
 n=n-1;
 console.log(n);

 


 //5 falsy values: 0 , '' , undefined , null ,NaN


 
 console.log(Boolean (0));
 console.log(Boolean(undefined));
 console.log(Boolean ('Rabeya'));
 console.log(Boolean({}));
 console.log(Boolean(''));


 const money=100;
 if (money){
    console.log("Don't spend it all");
 }
 else{
    console.log('You should get a job!');
 }

 let height=0;
 if (height){
    console.log('YAH! Heights Is Defined');
 }else{
    console.log('Height is Un defined');
 }

 

 const age='18';
 if (age=== 18)console.log('You just became an adult (strict)');

 if(age==18)console.log('You just became an adult (loose)');

 const favorite=Number(prompt("What's your favourite number?"));
 console.log(favorite);
console.log(typeof favorite);


if(favorite === 23){ //22=== 23-> FALSE
 console.log('Cool ! 23 is an amzaing number!');
} else if(favorite===7){
    console.log('7 is also a cool number');
} else if (favorite === 9){
    console.log('9 is also a cool number');
}
else{
    console.log('Number is not 23 or 7 or 9');
}


if (favorite !== 23)console.log('Why not 23?');


const hasDriversLicense=true;//A
const hasGoodVision=true;//B

console.log(hasDriversLicense&& hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


if (hasDriversLicense&& hasGoodVision){
    console.log('Rabeya is able to drive!');
}else{
    console.log('Someone else should drive');
}

const isTired=true;//c

console.log(hasDriversLicense&& hasGoodVision && isTired);


if (hasDriversLicense&& hasGoodVision && !isTired){
    console.log('Rabeya is able to drive!');
}else{
    console.log('Someone else should drive');
}




const dolphinsScore= (Number (96+108+89)/3);
const KoalasScore=(Number(97+112+101)/3);

console.log(dolphinsScore,KoalasScore);

if(dolphinsScore>KoalasScore){
    console.log('Winner is Dolphins');
}
else if(dolphinsScore<KoalasScore){
    console.log('Winner is Koalas');
}
else{
    console.log('Draw');
}


//Bonus1
const dolphinsScore= (Number (97+112+101)/3);
const KoalasScore=(Number(109+95+123)/3);
console.log(dolphinsScore,KoalasScore);

if(dolphinsScore>KoalasScore && dolphinsScore >=100){
    console.log('Winner is Dolphins');
}
else if(dolphinsScore<KoalasScore && KoalasScore>=100){
    console.log('Winner is Koalas');
}
else{
    console.log('Draw');
// }


const dolphinsScore= (Number (97+112+101)/3);
const KoalasScore=(Number(109+95+106)/3);
console.log(dolphinsScore,KoalasScore);

if(dolphinsScore>KoalasScore && dolphinsScore >=100){
    console.log('Winner is Dolphins');
}
else if(dolphinsScore<KoalasScore && KoalasScore>=100){
    console.log('Winner is Koalas');
}
else if
(dolphinsScore=== KoalasScore && dolphinsScore>=100 && KoalasScore>=100){
    console.log('Both win the trophy');
}

else{
    console.log('No one wins the trophy');
}



const day='wednesday';
switch(day){
    case 'monday'://day===monday
    console.log('plan course structure');console.log('Go to coding meetup');
break;
case 'tuesday':
    console.log('prepare theory videos');
    break;
    case 'wednesday':
        case 'thursday':
            console.log('Write code examples');
            case 'friday':
    console.log('Records Videos');
    break;
    case 'saturday':
        case 'sunday':
            console.log('Enjoy the Weekend :)');
            break;
            default:
                console.log('not a valid day');
}


if(day==='monday')
{
    console.log('plan course structure');console.log('Go to coding meetup');
}
else if( day==='tuesday'){
    console.log('prepare theory videos');
}
else if(day==='wednesday' || day== 'thursday'){
    console.log('Write code examples');
}
else if(day==='friday')
{
    console.log('Records Videos');
}
else if(day=== 'saturday' || day==='sunday')
{
    console.log('Enjoy the Weekend :)');
}
else{
    console.log('not a valid day');
}


const age = 25;
// age>= 18? console.log('Í like to drink wine🍸🍹🍺🍷'):
// console.log('I like to drink water💧');

const drink=age>= 18 ? 'wine🍸🍹🍺🍷':' water💧';
console.log(drink);


let drink2;
if (age>=18)
{
    drink2='wine🍷';
}else{
    drink2='water💧';
}
console.log(drink2);

console.log(`I like to drink ${age>=18 ? 'wine': 'water'}`);


const bill=430;
const tip=bill<=300&& bill>=50? bill *0.15:bill*0.2;
console.log(`The bill was ${bill},the tip eas ${tip}, and the total value ${bill+tip}`);