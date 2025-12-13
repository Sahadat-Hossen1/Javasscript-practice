//array splice method arrayName.splice(indexNum,DeleteCount,adding item1,adding item2.....)
//const letters = ['a', 'b', 'c', 'd', 'e']

// splice ব্যবহার করে 'c' অ্যারে থেকে সরান
//letters.splice(2,1);
//console.log(letters)
// splice ব্যবহার করে position 2 এ 'x', 'y' ঢোকান
// letters.splice(3,0,"x","y")
// console.log(letters);

// splice ব্যবহার করে 'd' কে 'z' দিয়ে রিপ্লেস করুন
// letters.splice(3,1,"z")
// console.log(letters);
// reverse ম্যানিপুলেশন:

//const nums = [1, 2, 3, 4, 5]

// অ্যারে reverse করুন
//nums.reverse()
// তারপর শুরুতে 6 এবং শেষে 0 যোগ করুন
// nums.unshift(6)
// nums.push(0)
// console.log(nums);
//************* */
//  sort চ্যালেঞ্জ:

// const mixed = [3, 1, 4, 1, 5, 9, 2]
// mixed - সংখ্যাগুলো সর্ট করুন
// console.log(mixed.sort());

//  const words = ['banana', 'apple', 'cherry']
//- বর্ণানুক্রমে সর্ট করুন
//  console.log(words.sort());

// const people = [{name: 'John', age: 30}, {name: 'Alice', age: 25}]
// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 40 },
//   { name: 'Sara', age: 20 },
//   { name: 'Mike', age: 35 },
//   { name: 'Emma', age: 28 },
//   { name: 'Tom', age: 50 },
//   { name: 'Lily', age: 22 },
//   { name: 'David', age: 33 },
//   { name: 'Sophia', age: 27 },
//   { name: 'Chris', age: 45 },
//   { name: 'Anna', age: 29 },
//   { name: 'James', age: 31 },
//   { name: 'Olivia', age: 24 },
//   { name: 'Daniel', age: 26 }
// ];

//- বয়স অনুযায়ী সর্ট করুন
// console.log(people.sort((a,b)=>a.age-b.age))
// const colors = ["red", "green", "blue", "yellow", "purple"];
//'green' এবং 'blue' সরিয়ে তাদের জায়গায় 'cyan' এবং 'magenta' ঢোকান
// colors.splice(1,2,"cyan","magenta")
//console.log(colors);
//শেষের দুটি কালার সরিয়ে শুরুতে 'black' এবং 'white' যোগ করুন

// colors.splice(3, 2);
// colors.unshift("black", "white");
// console.log(colors);
//*********** */
// let num;
// num.fill(0,0,5);
// console.log(num);
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Coffee Mug', category: 'Kitchen' },
  { name: 'Headphones', category: 'Electronics' }
];

const groupedProducts = products.reduce(function(accumulator, product) {
  const category = product.category;
  if (!accumulator[category]) {
    accumulator[category] = [];
  }
  accumulator[category].push(product);
  return accumulator;
}, {});

console.log(groupedProducts);
