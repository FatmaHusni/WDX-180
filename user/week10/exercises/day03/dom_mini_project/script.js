const yearElement = document.getElementById('yes');
const yearElements = document.getElementById('datetime');

function changeCrl() {
  const colorS = ['blue', 'yellow', 'green', 'purple', 'pink', 'red'];
  const randomNumber = Math.floor(Math.random()*colorS.length);

  yearElement.style.color = colorS[randomNumber];
  yearElements.style.color = colorS[randomNumber];
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
