// const result = [1, 2, 3].reduce((acc, curr) => {
//   acc.push(curr);
//   return acc;
// }, []);
// console.log(result);
// Task 2: Product

// একটি number array দেওয়া আছে।
// 👉 সব সংখ্যাকে গুণ করে একটি final product বের করুন।
// const arr=[2,9,5]
// const result=arr.reduce((acc,curr)=>acc*curr,1);
// console.log(result);
// output=90
/****** */
// Task 3: Count frequency

// একটি string array দেওয়া আছে।
// const arr= ["apple", "banana", "apple", "mango", "banana"]
// const result=arr.reduce((acc,curr)=>{
//      acc[curr]=(acc[curr] ||0)+1
//      return acc;
// },{})
// console.log(result);
// 👉 reduce() ব্যবহার করে প্রতিটি item কতবার আছে তা object আকারে বের করুন।
// Task 4: Max value

// একটি number array দেওয়া আছে।

// const arr= [12, 5, 30, 18, 7]
// const result=arr.reduce((acc,curr)=>{
//  curr>acc && curr
//  return acc
// },arr[0])
// console.log(result);


// 👉 reduce() দিয়ে সবচেয়ে বড় সংখ্যাটি বের করুন।