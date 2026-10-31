const button = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");


button.addEventListener("click",()=>{
  if(input.value === ""){
    output.innerText = "Please enter a valid number."
    
  }else if(input.value < 1){
    output.innerText = "Please enter a number greater than or equal to 1"
    
  }else if (input.value > 3999){
    output.innerText = "Please enter a number less than or equal to 3999"
    
  }else{
    romanNumberConverter(input.value)
  }
})


const romanNumberConverter = (input)=> {
  
  const mass = [
    [1000,"M"],
    [900,"CM"],
    [500,"D"],
    [400,"CD"],
    [100,"C"],
    [90,"XC"],
    [50,"L"],
    [40,"XL"],
    [10,"X"],
    [9,"IX"],
    [5,"V"],
    [4,"IV"],
    [1,"I"]
  ]
  const result = []
  for(let pair of mass){
    let value = pair[0];
    let symbol = pair[1];
    
    while(input>=value){
      input-=value
      result.push(symbol)
    }
  }





  
  
  output.innerText = result.join("");

}