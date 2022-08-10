// Iteration 1: Names and Input
//console.log("I'm ready!");

const hacker1 = "Tito" 
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Morgan"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
};
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
};
if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration 3: Loops

 const copo = hacker1.split('');
    console.log(copo.join(' ').toUpperCase());

 const copo2 = hacker2.split('');
    console.log(copo2.reverse().join(''));

const name1 = hacker1.localeCompare(hacker2)
const name2 = hacker2.localeCompare(hacker1)


      
       




    

    

  
