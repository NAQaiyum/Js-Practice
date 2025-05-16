let age = 28;
let age1 = 60;
let nationality = "Bangladeshi , India";
let gender = 1

// condition
// if(age>=18){
//     if(nationality = "Bangladeshi")
//     {
//         if(gender = 1){
//             console.log("Male")
//             console.log("Bangladeshi")
//             if(age1>=35){
//                 if(nationality = "India"){
//                     if(gender = 0){
//                         console.log("Male")
//                         console.log("India")
//                     }
//                     else{
//                         console.log("Female")
//                         console.log("India")
//                     }
//                 }
//             }
//         }
//     }
// }
// else{
//         console.log("Unidentified")
//     }


//............................................... loop

// for loop - Namota
// let i=prompt("Enter a Number:");

// for(let x=1 ; x<=10; x++){
//     console.log("Number - ",x*i);
// }

//..............................................while loop

// let i = 0;

// while(i<5){
//     console.log("Test while loop - ", "count "+ i);
//     i++;
// }

//.............................................do while loop

// let y=prompt("Enter a number");

// do{
//     console.log("Do while", y)
//     y++;
// }
// while(y<10)



// ................................condition with loop
var x=prompt("Enter a number");

var a="Dhaka";
var b="Bandarban";
var c="Sylhet";

if(x<=10){
    console.log("Customer review - ")
}else if(x<=20){
       for(let i=0; i<5; i++){
        console.log("Hello from "+ a,i)
    } 
}else if(x<=30){
        for(let i=0; i<8; i++){
        console.log("Hello from "+b,i)
    }
}
else if(x<=40){
        for(let i=0; i<10; i++){
        console.log("Hello from "+ c,i)
    }
}else{
    console.log("Input a valid number under 40")
}