// ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো।
// for (i = 0; i <= 10; i++) {
//   // console.log(i);
// }

// ১০ থেকে ১ পর্যন্ত উল্টো করে সংখ্যা প্রিন্ট করো।
// for (i = 10; i > 0; i--) {
//   // console.log(i);
// }
// ১ থেকে ১০ পর্যন্ত শুধু জোড় সংখ্যা প্রিন্ট করো।
// for (i = 0; i <= 10; i++) {
//   // let sum=0;
//   // console.log(sum+=i)
//   if (i % 2 === 0) {
//     // console.log(i);
//   }
// }
// ১ থেকে ২০ পর্যন্ত শুধু বেজোড় সংখ্যা প্রিন্ট করো।
// for (i = 0; i <= 20; i++) {
//   // let sum=0;
//   // console.log(sum+=i)
//   if (i % 2 === 1) {
//     //  console.log(i);
//   }
// }
// ৫ এর নামতা (multiplication table) প্রিন্ট করো।
// for (x = 0; x <= 10; x++) {
//   //console.log(`${x} x 5=${x*5}`);
// }
// for loop with array
// const arr = [23, 34, 43, 2, 4, 5, 12, 100];
// একটি array এর সব value প্রিন্ট করো।
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i])
// }

// array এর সব value এর যোগফল বের করো।
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
//console.log(sum);
// array এর সর্বোচ্চ সংখ্যা বের করো।//
//0 index is initial value
// let maxNum = arr[0];
// for (i = 0; i < arr.length; i++) {
//   // joto bar loop colbe toto bar arr idex(i) check korbe max number tar theke coto naki boro arr loop cholor sathe maxnum update hobe
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }
//console.log(maxNum);
// array এর সর্বনিম্ন সংখ্যা বের করো।//
// const arr = [23, 34, 43, 2, 4, 5, 12, 100];

// let minNum=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<minNum){
//         minNum=arr[i]
//         // console.log(minNum)
//     }
// }
// console.log(minNum);

// একটি array থেকে শুধু জোড় সংখ্যা বের করো।
// const arr = [23, 34, 43, 2, 4, 5, 12, 100];
// for(i=0;i<arr.length;i++){
//   if(arr[i]%2===0)console.log(arr[i]);

// }
// while loop ব্যবহার করে ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো।
//var arr = [23, 34, 43, 2, 4, 5, 12, 100];
// let i=0;
// while(i<=10){
//   console.log(i);
//   i++
// }
// while loop দিয়ে ২ এর নামতা লেখো।
// let i=0
// while(i<=10){
//   console.log(`${i} x 2 =${i *2}`);
//   i++

// }
// ১০ থেকে ১ পর্যন্ত while loop দিয়ে countdown লেখো।
// let i =100;
// while(i>0){
//   console.log(i);
//   i--

// }
// for(i=10;i>=0;i--){
//   console.log(i);

// }
// while loop দিয়ে একটানা ৫ বার "Hello" প্রিন্ট করো।
// const h="hello"
// let i=0;
// while(i<5){
//   console.log(h);
//   i++

// }
//  একটি সংখ্যা n দেওয়া থাকবে, while loop দিয়ে ১ থেকে n পর্যন্ত যোগফল বের করো।
// const n=30;
// let sum=0;
// let x=0;
// while(x<=n){
//   sum+=x;
//   x++
// }
// console.log(sum);

// do…while দিয়ে ১ থেকে ৫ পর্যন্ত সংখ্যা প্রিন্ট করো।
// let i=0;
// do{
//   console.log(i);
//   i++;

// }while(i<=5)

// do…while দিয়ে প্রথম ১০টি জোড় সংখ্যা লেখো।
// let i = 0;
// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 10);

// do…while ব্যবহার করে “Bangladesh” ৩ বার প্রিন্ট করো।
// let i = 0;
// do {
//   console.log("bangladesh");
//   i++;
// } while (i < 4);

// do…while দিয়ে ১০ থেকে ১ পর্যন্ত countdown লেখো।
// let i=10;
// do{
//   console.log(i);

//   i--
// }while(i>=1)

// do…while দিয়ে একটি array এর সব element প্রিন্ট করো।
// const arr = [23, 34, 43, 2, 4, 5, 12, 100];
// let i=0;
// do{
//   console.log(arr[i]);
//   i++
// }while(i<arr.length)
// for…of দিয়ে একটি array এর সব নাম প্রিন্ট করো।
//const arr = [23, 34, 43, 2, 4, 5, 12, 100];
// for(const item of arr){
//   console.log("for of" + item);
// }
// for(let i=0;i<arr.length;i++){
//   console.log("for loop"+arr[i])
// }

// for…of দিয়ে একটি array এর value গুলো যোগ করে total বের করো।
//  const arr = [23, 34, 43, 2, 4, 5, 12, 100];
//  let sum=0;
//  for(const item of arr){
//   sum +=item
//  }
//  console.log(sum);

// for…of দিয়ে একটি string এর প্রতিটি character প্রিন্ট করো।
// const arr='abcdefg'
// for(const item of arr){
//   console.log(item);

// }
// for…of দিয়ে array এর মধ্যে “apple” আছে কি না পরীক্ষা করো।
// const arr= ["a","b","c","apple","banana"]
// for(const item of arr){
//   if(item ==="apple"){
//     console.log(item);

//   }
// }
// for…of দিয়ে array থেকে ৫ এর বড় সংখ্যা গুলো বের করো।
// const arr = [23, 34, 43, 2, 4, 5, 12, 100];
// for (const item of arr) {
//   if (item > 5) {
//    console.log(item);
//   }
// }

// for…in দিয়ে object এর সব key প্রিন্ট করো।
// const obj = {
//   name: "sahadat",
//   proffesion: "student",
//   roll: "34435",
//   college: "govt debendra college",
// };
// for (const item in obj) {
//   console.log(item);
// }
// // for…in দিয়ে object-এর key এবং value দুটোই প্রিন্ট করো।
// for (const key in obj) {
//   // console.log(key + "=" + key[value] );
//   console.log(`${key} = ${obj[key]}`);
// }
// for…in দিয়ে object এর কতগুলো key আছে তা গণনা করো।
const obj = {
  name: "sahadat",
  proffesion: "student",
  roll: "34435",
  college: "govt debendra college",
};
// let keyLength=0;
// for(const key in obj){
//   // console.log(1);
//   keyLength++;
  
// }
// console.log(keyLength);


// for…in দিয়ে চেক করো object এর মধ্যে “age” নামের key আছে কি না।
// const ageKey=false;
// for(const key in obj){
//   if (key === "age") {
//     console.log(ageKey);
    
//   }
// }
// let hasAgeKey = false;
// for (const key in obj) {
//   if (key === "age") {
//     hasAgeKey = true;
//     break; // পাওয়া গেলে লুপ থামানো
//   }
// }
// console.log("Has 'age' key:", hasAgeKey); 

// for…in দিয়ে object এর সব value কে string এ convert করো।
// const newObj = {}; // নতুন অবজেক্ট তৈরি
// for (const key in obj) {
//   // মূল ভ্যালুকে স্ট্রিংয়ে কনভার্ট করে নতুন অবজেক্টে রাখা
//   newObj[key] = String(obj[key]);
// }
// console.log("Converted object:", newObj);
// console.log("Type of roll:", typeof newObj.roll); // আউটপুট: string (যেখানে মূলটি ছিল স্ট্রিং)
// console.log("Type of original roll:", typeof obj.roll); 