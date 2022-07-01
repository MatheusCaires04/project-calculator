function insert(number) {
  let numberSave = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = numberSave + number;
}

document.querySelector(".clear").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";
});

document.querySelector(".back").addEventListener("click", function () {
  let result = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = result.substring(
    0,
    result.length - 1
  );
});

function calculate() {
  let result = document.getElementById("result").innerHTML;
  if (result) {
    document.getElementById("result").innerHTML = eval(result);
  }
}
