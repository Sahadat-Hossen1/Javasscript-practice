console.log("Program Start");

// প্রতিটি step Promise রিটার্ন করবে
function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 Complete");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 Complete");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 Complete");
      resolve();
    }, 1000);
  });
}

// Promise chain ব্যবহার করে
step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => {
    console.log("All Steps Completed");
  })
  .catch((err) => console.log("Error:", err));

console.log("Program End");
