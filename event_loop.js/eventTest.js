console.log("start");
function step1 (){
    console.log("step1");
    
}
function step2 (){
    console.log("step2");
    
}
function step3 (){
   Promise.resolve().then(()=>{
        console.log("promise step1");
      Promise.resolve().then(()=>console.log("nested promis")
        )
    })
    console.log("say somthing");
    
    
}
function step4(){
    Promise.reject().then(()=>console.log("step 4 ")
    ).catch((error)=>console.log("error")
    )
}
setTimeout(() => {
    console.log("set timeout ");
    Promise.resolve().then(()=>console.log("set time promis")
    )
    
}, 1000);
step1()
step2()
step4()
step3()
console.log("end");
