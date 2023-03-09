"use strict";

var header = document.querySelector("header");
var helloWithName = function helloWithName(name) {
  var htmlTemplate = "\n        <h1>Hello there, ".concat(name, "!!\n    ");
  header.innerHTML = htmlTemplate;
};
helloWithName("Ironman");
