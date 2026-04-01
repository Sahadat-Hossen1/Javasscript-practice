// --- Sync section ---
console.log("Script Start");

for (let i = 1; i <= 5; i++) {
  console.log("Sync Loop:", i);
}

// --- Basic Timeout ---
setTimeout(() => {
  console.log("Timeout A (0ms)");
}, 0);

// --- Promise Chain 1 ---
Promise.resolve()
  .then(() => {
    console.log("Promise Chain 1 - Step 1");
    return Promise.resolve("Promise Chain 1 - Step 2");
  })
  .then(msg => {
    console.log(msg);
    setTimeout(() => console.log("Timeout inside Promise Chain 1"), 0);
  });

// --- Immediate ---
if (typeof setImmediate === "function") {
  setImmediate(() => {
    console.log("Immediate A");
  });
}

// --- Interval Demo ---
let tick = 0;
const intervalId = setInterval(() => {
  console.log("Interval Tick:", tick);
  tick++;
  if (tick > 4) {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 40);

// --- Nested Timeout + Promise ---
setTimeout(() => {
  console.log("Timeout B");
  Promise.resolve().then(() => {
    console.log("Promise inside Timeout B");
  });
}, 10);

// --- Async Function Demo ---
async function asyncTask(name, delay) {
  console.log(AsyncTask ${name} started);
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(AsyncTask ${name} finished after ${delay}ms);
}

asyncTask("One", 100);
asyncTask("Two", 200);

// --- Microtasks ---
Promise.resolve().then(() => {
  console.log("Microtask A");
  return Promise.resolve();
}).then(() => {
  console.log("Microtask B");
});

// --- Deep Nesting ---
setTimeout(() => {
  console.log("Timeout C");
  setTimeout(() => {
    console.log("Nested Timeout C1");
    Promise.resolve().then(() => console.log("Microtask inside Nested Timeout"));
  }, 0);
}, 0);

// --- Sync log mid ---
console.log("Middle of Script");

// --- Async IIFE ---
(async () => {
  console.log("Async IIFE start");
  await Promise.resolve();
  console.log("Async IIFE after await");
  await asyncTask("Three", 150);
  console.log("Async IIFE end");
})();

// --- Heavy Promise Chain ---
Promise.resolve("Chain Start")
  .then(msg => {
    console.log(msg);
    return "Chain Step 1";
  })
  .then(msg => {
    console.log(msg);
    return "Chain Step 2";
  })
  .then(msg => {
    console.log(msg);
    return new Promise(resolve => setTimeout(() => resolve("Chain Step 3 (delayed)"), 30));
  })
  .then(msg => {
    console.log(msg);
    return "Chain End";
  })
  .then(msg => console.log(msg));

// --- Immediate with nested promise ---
if (typeof setImmediate === "function") {
  setImmediate(() => {
    console.log("Immediate B");
    Promise.resolve().then(() => console.log("Microtask inside Immediate B"));
  });
}

// --- Extra Timeouts ---
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log("Extra Timeout:", i), i * 20);
}

// --- Extra Microtasks ---
Promise.resolve().then(() => {
  console.log("Extra Microtask 1");
  return Promise.resolve("Extra Microtask 2");
}).then(msg => console.log(msg));

if (typeof setImmediate === "function") {
  setImmediate(() => console.log("Extra Immediate"));
}

// --- Async Generator Demo ---
async function* asyncGen() {
  yield "Gen Step 1";
  await new Promise(r => setTimeout(r, 40));
  yield "Gen Step 2";
  await new Promise(r => setTimeout(r, 40));
  yield "Gen Step 3";
}
(async () => {
  for await (const step of asyncGen()) {
    console.log("AsyncGen:", step);
  }
})();

// --- More async tasks ---
asyncTask("Four", 250);
asyncTask("Five", 300);

// --- Promise Storm ---
for (let i = 0; i < 10; i++) {
  Promise.resolve().then(() => console.log("Storm Microtask", i));
}

// --- Timeout Storm ---
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log("Storm Timeout", i), i * 15);
}

// --- Interval Storm ---
let stormTick = 0;
const stormInterval = setInterval(() => {
  console.log("Storm Interval:", stormTick);
  stormTick++;
  if (stormTick > 5) {
    clearInterval(stormInterval);
    console.log("Storm Interval cleared");
  }
}, 25);

// --- Async/Await chain ---
(async () => {
  console.log("Async Chain start");
  await asyncTask("Six", 120);
  await asyncTask("Seven", 180);
  console.log("Async Chain end");
})();

// --- Nested Promises ---
Promise.resolve("Nested Start")
  .then(msg => {
    console.log(msg);
    return Promise.resolve("Nested Step 1");
  })
  .then(msg => {
    console.log(msg);
    return Promise.resolve("Nested Step 2");
  })
  .then(msg => {
    console.log(msg);
    return Promise.resolve("Nested End");
  })
  .then(msg => console.log(msg));

// --- Final sync log ---
console.log("End of Script Scheduling");

// === Filler to push ~200 lines ===
for (let i = 0; i < 20; i++) {
  setTimeout(() => console.log("Filler Timeout", i), i * 5);
}

for (let i = 0; i < 20; i++) {
  Promise.resolve().then(() => console.log("Filler Microtask", i));
}

if (typeof setImmediate === "function") {
  for (let i = 0; i < 5; i++) {
    setImmediate(() => console.log("Filler Immediate", i));
  }
}

console.log("All tasks scheduled, watch the chaos unfold!");