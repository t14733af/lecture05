var greeting = function(message){
  window.alert(message);
};

var helloWorld = function(event){
  console.log("helloWorld: start");
  greeting("Hello, world");
  console.log("helloWorld: end");
};

var boot = function(event){
  console.log("boot: start");
  var button = document.querySelector("button");
  button.addEventListener("click", helloWorld);
  console.log("boot: end");
};

window.addEventListener("load", boot);
