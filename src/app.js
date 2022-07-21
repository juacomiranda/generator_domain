/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  // .com, .net, .us, .io, etc.
  var ext = [".com", ".net", ".us", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let p = 0; p < noun.length; p++) {
        for (let f = 0; f < ext.length; f++)
          console.log(pronoun[i] + adj[j] + noun[p] + ext[f]);
      }
    }
  }
};
