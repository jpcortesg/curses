const timeoutPromise = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

function clickOnNext(){
  const next = document.querySelector('.GHEPc > button.ow3u_');
  next.click();
}

const asyncLoop = async () => {
  for (let i = 0; i < 10000 ; i++) {
    await timeoutPromise(2000);
    clickOnNext();
  }
}

asyncLoop();
