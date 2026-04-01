function createCounter(){
    let counter=0;
    function inner(){
      return  counter=counter + 1;
        // console.log(counter);
        
    }
  // return  inner
  return inner
}
///////
// const inner=createCounter()
// inner()
// inner()
// inner()
// inner()
/////////
// createCounter()
// createCounter()
console.log(createCounter());

