
console.log("Program Start");
// Helper functions
function microtask(level) {
  console.log('before return microtas'+level);
  
  return Promise.resolve().then(() => {
    console.log(`1.0 Microtask Level ${level}`);
    
   Promise.resolve().then(()=>{
    console.log("test"+level);
    
     Promise.resolve().then(()=>{
      console.log(`1.1 Microtask Level ${level}`);
    setTimeout(() => {
      console.log(`1.2Macrotask inside Microtask Level ${level}`);
      Promise.resolve().then(() => {
        console.log(`1.3Nested Microtask inside Macrotask Level ${level}`);
      });
    }, 0);
    })
   })
    
  });
}

function macrotask(level) {
 console.log('before return macrotas'+level);
  setTimeout(() => {
    console.log(`2.1 Macrotask Level ${level}`);
    Promise.resolve().then(() => {
      console.log(`2.2Microtask inside Macrotask Level ${level}`);
      setTimeout(() => {
        console.log(`2.3Nested Macrotask inside Microtask inside Macrotask Level ${level}`);
      }, 0);
    });
  }, 0);
}
// Generate deep nested chain
debugger
// macrotask(1);
// macrotask(2);
// microtask(2);
// microtask(1);
// macrotask(3)
// microtask(3)
microtask(1)
macrotask(1)
console.log("Program End");
