let myNumbers
for(let i=0; i < 102; i++ ) {
  const myNumber = document.createElement('div')
     myNumber.textContent = i 
  const wrapper = document.querySelector('.wrapper');
  wrapper.appendChild(myNumber);
  wrapper.style.display = 'grid';
  wrapper.style.gridTemplateColumns = 'repeat(6, 1fr)';
  wrapper.style.gridTemplateRows = 'repeat(17, 1fr)';
  wrapper.style.gap = '2px';
  myNumber.style.border = '2px solid black';
  wrapper.style.width = '50%';
  wrapper.style.height = '20%';
  wrapper.style.marginLeft = '25%';
  wrapper.style.alignItems = 'center';
  myNumber.style.textAlign = 'center';
  myNumber.style.padding = '15px';
  
  function isPrime(num) {
  if (num < 2) return false; 
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true; 
}
    if (isPrime(i)) {
        myNumber.style.backgroundColor = 'red';
    }
    else if (i % 2 ===0) {
        myNumber.style.backgroundColor = 'green';
    }
    else {
        myNumber.style.backgroundColor = 'yellow';
    }
}
document.body.style.textAlign = 'center';
const lists = document.querySelectorAll('h1, h2, h3');
lists.forEach((list) =>{
    if(list.tagName === 'H1') {
        list.style.margin = '0';
         list.style.fontWeight = '550';
    } 
    else if (list.tagName === 'H2'){
        list.style.margin = '0';
        list.style.textDecorationLine = 'underline';
        list.style.fontWeight = '200';
        list.style.fontSize = '18.72px';
    }
    else {
        list.style.margin = '0';
        list.style.textDecorationLine = 'underline';
        list.style.marginBottom = '15px';
        list.style.fontWeight = '200';
        list.style.fontSize = '18.72px';
    }
});