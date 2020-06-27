const timeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));
const tresPuntos = document.querySelectorAll('.MEAGs');

function clickOnAceptar(){
  const aceptar = document.querySelector('.-Cab_');
  aceptar.click();
  console.log('Hola desde aceptar');
  
}

function clickOnBorrar(){
  const borrar = document.querySelector('button.-Cab_');
  borrar.click();
  setTimeout(clickOnAceptar, 5000);
  console.log('Hola desde borrar');
  
}

function clikOnLink(link){
  link.click();
  setTimeout(clickOnBorrar, 5000);
  console.log('Hola desde link');
  
}

const asyncLoop = async () => {
  for (let i = 0; i < tresPuntos.length ; i++) {
    await timeoutPromise(5000);
    clikOnLink(tresPuntos[i]);
  }
}

asyncLoop();