console.log("Program Start");

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 Complete");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 Complete");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 Complete");
    callback();
  }, 1000);
}

// Deep Nested Callbacks
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All Steps Completed");
    });
  });
});

console.log("Program End");
