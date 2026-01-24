// INSERT YOUR CODE HERE 
//1. Loop through the nodeList and get the text content of each paragraph.
const paragraph = document.querySelectorAll('li');
paragraph.forEach((item) => {
    console.log(item.textContent);
})

//2. Set a text content to paragraph the fourth paragraph,Fourth Paragraph.
const paragraphs = document.querySelectorAll('p');
paragraphs[3].textContent = 'Fourth Paragraph';

//3. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family).
const design = document.querySelectorAll('p');
design.forEach((design) => {
  design.style.fontFamily = 'Arial, sans-serif'
  design.style.fontSize = '25px'
  design.style.color = 'blue'
  design.style.backgroundColor = 'lightblue'
  design.style.border = '2px solid blue'
})

//4. Select all paragraphs and loop through each element and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color.
const p = document.querySelectorAll('p');
 p.forEach((p, i) => {
  if(i === 0 || i == 2) {
    p.style.color = 'green'
  } else if(i===1 || i===3){
    p.style.color = 'red'
  }
})

//5. Set text content, id and class to each paragraph.
const para = document.querySelectorAll('p');
 para.forEach((pS, i) => {
  para.textContent = 'These are paragraphs'
  para.id = 'unique'
  para.className = 'classes'
})