// Promise simple example
const ninjaPromise = new Promise ((resolve,reject) => {
    resolve("Hattori");
  });
  
  ninjaPromise.then(ninja => {
    if(ninja === "Hattori"){
      console.log('right')
    }
  },err => {
    fail("error");
  });

  //研究执行顺序