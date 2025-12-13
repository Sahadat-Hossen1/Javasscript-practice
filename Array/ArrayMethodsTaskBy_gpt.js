// 30 Array Methods Practice Questions (No Solution)
// 🟢 Basic Array Methods
// push(), pop(), shift(), unshift(), includes(), indexOf()

// একটি array = [10, 20] → শেষে 30 যোগ করো।

// Array = [5, 10, 15] → শেষ element remove করো।

// Array = ["a", "b"] → শুরুতে "z" যোগ করো।

// Array = [100, 200, 300] → প্রথম element remove করো।

// Array = [1, 2, 3, 4] → 3 আছে কি না চেক করো।

// Array = ["apple", "banana", "mango"] → “banana” কোন index এ আছে বের করো।

// Array = [3, 6, 9] → শেষে 12 এবং 15 দুইটা element যোগ করো।

// Array = [50, 60, 70] → প্রথম থেকে element remove করে নতুন array প্রিন্ট করো।

// Array = [2, 4, 6, 8] → includes() দিয়ে 10 আছে কি না দেখো।

//  const arr = ["red", "blue", "green"] // "green" index খুঁজে বের করো।
//  console.log(arr.includes("green"));

// 🟡 Intermediate Array Methods
// map(), filter(), find(), findIndex(), some(), every(), reduce()

// Array = [1, 2, 3, 4] → সব value 2 দিয়ে multiply করে নতুন array বানাও।
// const arr =  [1, 2, 3, 4]
//  console.log(arr.map((n)=>n*2));

// Array = [12, 5, 8, 130, 44] → কেবল 10 এর বেশি সংখ্যাগুলো filter করো।
// var arr=[12, 5, 8, 130, 44]
// const newarr=arr.filter(n=>n>10)
// console.log(newarr);

// Users array → id = 2 এমন user find() দিয়ে বের করো।

// const arr=[
//   { id: 1, name: "Sami" },
//   { id: 2, name: "Rafi" },
//   { id: 3, name: "Nila" }
// ]
// console.log(arr.find(obj=>obj.id ===2));

// Array = [3, 5, 8, 12] → findIndex() দিয়ে 8 এর index বের করো।
// const arr=[3, 5, 8, 12]
// console.log(arr.findIndex(n=>n==8));

// Array = [2, 4, 6, 8] → some() দিয়ে চেক করো কোনো number কি 7 এর বেশি?

// Array = [5, 10, 15] → every() দিয়ে চেক করো সব value কি 4 এর বেশি?

// Array = [1, 2, 3, 4] → reduce() ব্যবহার করে total sum বের করো।

// Array = [5, 10, 20] → কিছু element কে map() দিয়ে double করে প্রিন্ট করো।

// Array = [7, 11, 22, 25] → filter() দিয়ে জোড় সংখ্যা বের করো।

// Array = [100, 200, 50, 40] → reduce() দিয়ে সবচেয়ে বড় সংখ্যা বের করো।

// 🔵 Advanced Array Methods
// sort(), reverse(), flat(), flatMap(), slice(), splice()

// Array = [40, 100, 1, 5, 25] → ascending sort করো।

// Array = [10, 20, 30] → reverse() করে দেখাও।

// Array = [1, [2, 3], [4, [5]]] → flat() দিয়ে এক লেভেল flatten করো।
// const array = [1, [2, 3], [4, [5]]]
// console.log(array.flat().flat());

// Array = [1, 2, 3] → flatMap() দিয়ে প্রতিটি element কে double করো।
// const array = [1, 2, 3]
// console.log(array.flatMap(n=>n*2));

// Array = [10, 20, 30, 40, 50] → slice() দিয়ে মাঝের 3টা item বের করো।

// Array = ["a", "b", "c", "d"] → splice() দিয়ে "b" replace করে "x" বসাও।

// Array = [5, 10, 15, 20, 25] → splice() দিয়ে মধ্যের 2টা element remove করো।

// Array = [1, 1, 2, 2, 3, 3] → filter() দিয়ে unique numbers বের করো।

// Array = ["dog", "cat", "lion", "rat"] → sort() দিয়ে alphabetically সাজাও।

// Array = [1, 2, 3, 4, 5] → slice() দিয়ে শেষ 3টা number বের করো।

// চাইলে আমি দিতে পারি:

// ✔️ আরও 50+ প্রশ্ন
// ✔️ job interview–level প্রশ্ন
// 30 Complex Array Methods Questions (No Solution)
// 🟣 1. Complex Filtering & Mapping

// একটি products array থেকে কেবল সেই পণ্যগুলো বের করো যাদের

// price > 500

// এবং category = "electronics"
// তারপর শুধু name গুলো নতুন array তে রাখো।

// Students array থেকে যাদের marks ৫০ এর নিচে তাদের বাদ দিয়ে, বাকি students-এর name uppercase করে map করো।
const students = [
  {
    name: "Sahadat Hossain",
    roll: 101,
    marks: 85,
    department: "Computer Science",
    college: "Dhaka College",
  },
  {
    name: "Rahim Uddin",
    roll: 102,
    marks: 72,
    department: "Electrical Engineering",
    college: "City College",
  },
  {
    name: "Karim Ahmed",
    roll: 103,
    marks: 90,
    department: "Computer Science",
    college: "Dhaka College",
  },
  {
    name: "Salma Akter",
    roll: 104,
    marks: 65,
    department: "Business Studies",
    college: "National College",
  },
  {
    name: "Nusrat Jahan",
    roll: 105,
    marks: 78,
    department: "Computer Science",
    college: "Dhaka College",
  },
  {
    name: "Imran Khan",
    roll: 106,
    marks: 55,
    department: "Mechanical Engineering",
    college: "Polytechnic Institute",
  },
  {
    name: "Ayesha Rahman",
    roll: 107,
    marks: 88,
    department: "Business Studies",
    college: "Eden College",
  },
  {
    name: "Tanvir Hasan",
    roll: 108,
    marks: 92,
    department: "Computer Science",
    college: "City College",
  },
  {
    name: "Mehedi Hasan",
    roll: 109,
    marks: 60,
    department: "Electrical Engineering",
    college: "Dhaka College",
  },
  {
    name: "Farzana Akter",
    roll: 110,
    marks: 74,
    department: "Computer Science",
    college: "National College",
  },
];
const upper50 = students.filter((student) => student.marks > 49);
// const test1=upper50.forEach((stu)=>console.log(stu.name.toUpperCase()))
// const test2 = () => {
//   upper50.forEach((stu) => console.log(stu.name.toUpperCase()));
// };
// test();

// function test (){upper50.forEach((stu)=>console.log(stu.name.toUpperCase())
// )}
// test()
/*why whow console when i dont novoks test1  */
// একটি array তে mixed values আছে:
// [10, "20", true, 5, "5", 40]
// filter() দিয়ে কেবল number type data বের করো, তারপর সব number 2 দিয়ে multiply করো।
// const arr = [10, "20", true, 5, "5", 40];
// const newArr = arr.filter((item) => {
//   return typeof (item)=== "number";
// });
// const multi_by_2=newArr.map(item=>item*2)
// console.log(newArr);
// console.log(multi_by_2)

// একটি user list থেকে শুধু active user বের করো, এবং তাদের lastLogin date অনুযায়ী sort করো।
// const userList = [
//   {
//     id: 101,
//     username: "sahadat.hossain",
//     isActive: true,
//     lastLogin: new Date("2025-12-08T10:30:00Z"),
//     country: "Bangladesh"
//   },
//   {
//     id: 102,
//     username: "rahim.uddin",
//     isActive: false,
//     lastLogin: new Date("2025-11-20T15:45:00Z"),
//     country: "India"
//   },
//   {
//     id: 103,
//     username: "karim.ahmed",
//     isActive: true,
//     lastLogin: new Date("2025-12-12T05:10:00Z"), // Most Recent Login
//     country: "Bangladesh"
//   },
//   {
//     id: 104,
//     username: "salma.akter",
//     isActive: true,
//     lastLogin: new Date("2025-12-01T22:00:00Z"),
//     country: "USA"
//   },
//   {
//     id: 105,
//     username: "nusrat.jahan",
//     isActive: false,
//     lastLogin: new Date("2025-12-10T12:00:00Z"),
//     country: "Canada"
//   },
//   {
//     id: 106,
//     username: "tanvir.hasan",
//     isActive: true,
//     lastLogin: new Date("2025-12-05T08:00:00Z"),
//     country: "Bangladesh"
//   }
// ];
// const filterUser=userList.filter(user=>user.isActive=== true)
//   filterUser.sort((a,b)=>a.lastLogin-b.lastLogin)
// console.log(filterUser);

// Employee array থেকে যাদের salary ৩০k–৫০k এর মধ্যে, তাদের total salary reduce() দিয়ে বের করো।


