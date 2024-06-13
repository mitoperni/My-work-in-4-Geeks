/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const who = [
  "The dog",
  "My grandmother",
  "An alien",
  "My neighbor",
  "A ghost",
  "A politician",
  "A bird",
  "The mailman"
];

const action = [
  "ate",
  "broke",
  "lost",
  "hid",
  "stole",
  "destroyed",
  "forgot",
  "mixed up"
];

const what = [
  "my homework",
  "the house key",
  "my backpack",
  "the car",
  "my computer",
  "the electricity bill",
  "the report",
  "my phone"
];

const when = [
  "this morning",
  "yesterday afternoon",
  "last night",
  "on my birthday",
  "a little while ago",
  "while I was sleeping",
  "during lunch",
  "when I was in class"
];
const where = [
  "in the garden",
  "in the kitchen",
  "in the living room",
  "in the car",
  "at the office",
  "in the park",
  "at school",
  "on the street"
];

const consequence = [
  "and now I can't find it",
  "and everything is ruined",
  "and I don't know what to do",
  "and I need help",
  "and I can't go to work",
  "and I have to fix it",
  "and I'm very worried",
  "and I don't know how to explain it"
];

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const dataset = [who, action, what, when, where, consequence];

const excuseDataset = () =>
  (document.querySelector("#excuse").innerHTML = dataset
    .map(el => getRandomItem(el))
    .join()
    .replaceAll(",", " "));

// Esta función se ejecuta cada vez que
window.onload = function() {
  excuseDataset();
};