// Iteration 1: Names and Input

const hacker1 = ("Angel");
console.log(`The driver´s name is ${hacker1}`);

const hacker2 = ("Priscilla");
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

//bonus 1



let longText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia mi ac tellus pulvinar, at vehicula purus lacinia. Mauris a ante pharetra, pharetra felis ac, consequat nisl. Aenean elit ligula, volutpat et ex vitae, facilisis euismod ligula. Fusce leo lorem, euismod et maximus sed, convallis eget magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a diam et turpis tristique sodales id id tellus. Nulla at leo sed diam gravida eleifend sed in libero. Praesent cursus maximus nisl ut tristique. Ut et aliquam neque. Ut sagittis erat sit amet odio blandit, nec congue lorem laoreet. Sed scelerisque dui in leo mattis maximus. Curabitur tempor lobortis tellus pulvinar cursus. Sed pretium ligula in quam maximus imperdiet in at mauris. Maecenas nec finibus mi. In eu ex cursus velit interdum tempus vitae non augue. Nulla vitae mattis lorem, eu volutpat odio. Etiam mattis ullamcorper pharetra. Phasellus id tempor libero, at gravida orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique sapien id tortor tempus dictum. Quisque laoreet nibh elementum est rhoncus euismod. In lacus nibh, vulputate in aliquam a, volutpat a neque. Curabitur et erat nunc. Suspendisse potenti. Cras pulvinar, libero eu porta pharetra, augue magna tempor nulla, id convallis magna diam eu lorem. Duis hendrerit hendrerit erat, in bibendum urna imperdiet vitae. Sed ut porta lacus. Mauris commodo dolor non elit viverra mollis. Fusce scelerisque at orci in finibus. ";

// how to count the words

let counter = 0;

for (let i = 0; i < longText.length; i++){
    if(longText[i] === " "){
        counter++
    }
}

console.log(`the total number of words are: ${counter}`)

//  how many times appears "et"

let counterEt = 0;

for (let i = 0; i < longText.length; i++) {
    if(longText[i] + longText[i+1] === "et") {
        counterEt++
    }
}

console.log(`how many times 'et' appears is: ${counterEt}`)

//bonus 02
