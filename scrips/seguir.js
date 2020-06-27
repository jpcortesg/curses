const timeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
const list = document.querySelectorAll('.y3zKF');
console.log(list.length);
let cont = 0;

function clikOnLink(link){
 link.click();
 console.log('Listo');
 cont++;
 console.log('Van: ' + cont);
}

const asyncLoop = async () => {

  let min = 30000;
  let max = 60000;

  let random = Math.floor(Math.random() * (+max - +min)) + +min;
  for (let i = 0; i < list.length ; i++) {
    await timeoutPromise(random);
    clikOnLink(list[i]);
  }
}

asyncLoop();