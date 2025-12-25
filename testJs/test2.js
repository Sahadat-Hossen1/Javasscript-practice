const failPromise = new Promise((resolve, reject) => {
    // resolve("done")
  reject("Sorry, no money 😢");
});

failPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// function createCounter() {
//   let count = 0;

//   return function () {
//     count = count + 1;
//     console.log(count);
//   };
// }
// const counter = createCounter();

// setTimeout(() => {
//   for (let i = 0; i < 20; i++) {
//     counter();
//   }
// }, 4000);

///////////
// const user = {
//   name: "Sahadat",
//   sayName() {
//     console.log(this.name);
//   }
// };

// const fn = user.sayName;
// fn();
// user.sayName()
// console.log("line"+user.sayName())
