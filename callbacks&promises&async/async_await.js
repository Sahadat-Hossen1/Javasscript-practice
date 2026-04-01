console.log("Program Start");

// প্রতিটি step Promise রিটার্ন করবে
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 Complete");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 Complete");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 Complete");
      resolve();
    }, 1000);
  });
}

// async function ব্যবহার করে
async function runSteps() {
  try {
    await step1();
    await step2();
    await step3();
    console.log("All Steps Completed");
  } catch (err) {
    console.log("Error:", err);
  }
}

runSteps();

console.log("Program End");
