// Task 3: Count frequency (কতবার এসেছে)

// একটি string array দেওয়া আছে:
const arr=["apple", "banana", "apple", "mango", "banana"]
const  result=arr.reduce((acc,cur)=>{
    
    acc[cur]=(acc[cur] || 0)+1
    return acc;
},{})
// console.log(result);

// 👉 reduce() ব্যবহার করে প্রতিটি item কতবার এসেছে তা object আকারে বের করুন।

// ✅ Expected Result
// {
//   apple: 2,
//   banana: 2,
//   mango: 1
// }
// acc[cur]=acc[curr]
// x=x+5
const user={}
user["age"]=22;
