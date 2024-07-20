// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log(5*i);
// }


// let sum=0;
// let num=1;

// while(num <=10){
//     sum+=num;
//     num++;
// }
// console.log(sum);

// let num=10;

// while(num >0){
//     console.log(num);
//     num--;
// }


// do- while

let i=1;

do{
    console.log(i);
    i++;
}while(i<=5);


function fact(n){
    let result=1;
    let i=1;
    do{
        result *= i;
        i++;
    }while(i<=n);
    return result;
}

let number = 5;
console.log(fact(number));


//printing pattern

// let n=5;

// for(let i=1;i<=n;i++){
//     let str="* ";
//     console.log(str.repeat(i));
// }

// Task 8

// let n=10;

// for(let i=1;i<=n;i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i);
// }

//Task 9

let n=10;

for(let i=0;i<=n;i++){
    if(i===7){
        break;
    }
    console.log(i);
}
