const spaN = document.createElement('span');
spaN.textContent = 2020;
document.querySelector('h1').appendChild(spaN);

const yearSpan = document.querySelector('spaN');
const yearElements = document.getElementById('datetime');

function changeCrl() {
  const colorS = ['blue', 'yellow', 'green', 'purple', 'pink', 'red'];
  const randomNumber = Math.floor(Math.random()*colorS.length);

 yearElements.style.backgroundColor = colorS[randomNumber];
 yearSpan.style.color = colorS[randomNumber];
}

setInterval(changeCrl, 1000);

const done = document.querySelectorAll('li');
done.forEach((done, i) => {
  if(i===0){
    done.style.backgroundColor = 'green'
  }else if(i===1){
    done.style.backgroundColor = 'yellow'
  }else if(i){
    done.style.backgroundColor = 'red'
  }
}) 
const style = document.createElement('style');
style.textContent = `spaN{
font-size: 30px; 
}`;
document.head.appendChild(style);
style.textContent = ""

spaN.style.fontSize = '85px';
const title = document.querySelector('h1');
title.style.fontFamily = 'work sans';

const lists = document.querySelectorAll('li');
lists.forEach((list) =>{
    list.style.marginBottom = '4px';
    list.style.padding = '15px';
    list.style.listStyleType = 'none';
    list.style.fontFamily = 'sans serif';
    list.style.textAlign = 'left';
});

document.querySelector('div').style.width = '50%';
document.querySelector('div').style.textAlign = 'center';
document.querySelector('div').style.marginLeft = '500px';
const header = document.querySelectorAll('h1, h2, h3');
header.forEach((header) => {
    if (header.tagName === 'H1') {
        header.style.margin = '0';
    } else if (header.tagName === 'H2') {
        header.style.marginTop = '25px';
        header.style.marginBottom = '10px';
        header.style.textDecoration = 'underline';
    } else {
        header.style.margin = '0';
    }
});
document.querySelector('h3').style.display = 'inline';
