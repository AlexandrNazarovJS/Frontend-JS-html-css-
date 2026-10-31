const btn = document.getElementById("check-btn");
const inp = document.getElementById("text-input");
const res = document.getElementById("result");

const normalized = (inp) => {
  return inp
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]/gi, "");
};

const palindrome = (inp) => {
  const cleaned = normalized(inp);
  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};

btn.addEventListener("click", () => {
  if (inp.value.trim() === "") {
    alert("Please input a value");
  } else {
    if (palindrome(inp.value)) {
      res.innerText = `${inp.value} is a palindrome`;
    } else {
      res.innerText = `${inp.value} is not a palindrome`;
    }
  }
});