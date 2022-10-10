// Elenca i numeri da 1 a 100
// Ogni multiplo di 3 prevederà un output pari a "fizz"
// Ogni multiplo di 5 prevederà un output pari a "buzz"
// Ogni multiplo di 3 e di 5, prevederà un output pari a "flizzBuzz"

const row = document.querySelector(".row");
// LOOP
for (let i = 1; i <= 100; i++) {
    let fizzBuzz = i ;
    if (i % 3 === 0) 
      fizzBuzz = "fizz";
    if (i % 5 === 0)
      fizzBuzz = "buzz"
    if (i % 5 === 0 & i % 3 === 0)
    fizzBuzz = "fizzBuzz";
    console.log(fizzBuzz)
    
// CREATE ELEMENT
const cell = document.createElement("div")
cell.classList.add(fizzBuzz);
cell.innerHTML = fizzBuzz;
row.append(cell);
}