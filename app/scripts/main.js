var greeting = function(message){
  window.alert(message);

  var output = document.querySelector("#answer");
  output.value = message;
};

var helloWorld = function(event){
  var input = document.querySelector("input");
  var inputText = input.value;

  var message = "こんにちは！" + inputText + "さん！";

  console.log("helloWorld: start");
  greeting(inputText);
  console.log("helloWorld: end");
};

var boot = function(event){
  console.log("boot: start");
  var button = document.querySelector("button");
  button.addEventListener("click", helloWorld);
  console.log("boot: end");
};

window.addEventListener("load", boot);
