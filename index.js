// Iteration 1: Names and Input

const hacker1 = ("Priscilla");
console.log(`The driver´s name is ${hacker1}`);

const hacker2 = ("Angel");
console.log(`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The drivers has the longest name, it has ${hacker1.length} characters.`)
  

} else if (hacker1.length < hacker2.length) {

    console.log (`It seems that the navigator has the longest name, ${hacker2.length} characters`)
  
} else {

    console.log (`Wow, you both have equally long names, ${hacker1.lenght}`)
}



// Iteration 3: Loops

let hacker1WithSpaces = "";

for (i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1[i].toUpperCase()
  
  if(i < hacker1.length - 1) {
    hacker1WithSpaces += " ";
  }
}
console.log(hacker1WithSpaces);


let hacker2reversed = "";

for (i = hacker2.length - 1; i >= 0; i--) {
 
 hacker2reversed += hacker2[i];
}
console.log(hacker2reversed);


if (hacker1 > hacker2) {

    console.log (`The driver's name goes first.`)
  
  } else if (hacker1 < hacker2) {

    console.log (`Yo, the navigator goes first definitely.`)
    
    } else {

    console.log (`What?! You both have the same name?`)
}

//bonus
