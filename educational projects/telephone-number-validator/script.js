const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkButton.addEventListener("click", ()=>{

  if(userInput.value === ""){

    alert("Please provide a phone number");

  }else if(isValidPhoneNumber(userInput.value) === true){

    const message = document.createElement("p");
    message.textContent = "Valid US number: " + userInput.value;
    result.appendChild(message);

  }else{

    const message = document.createElement("p");
    message.textContent = "Invalid US number: " + userInput.value;
    result.appendChild(message);

  }
  userInput.value = "";
})

clearButton.addEventListener("click",()=>{
  result.textContent = "";
})

const isValidPhoneNumber = (number) => {
  const regex = /^(1\s?)?(\([0-9]{3}\)\s?[0-9]{3}-[0-9]{4}|[0-9]{3}[-\s][0-9]{3}[-\s][0-9]{4}|[0-9]{10})$/;

  return regex.test(number);
}