window.onload = function() {
    //write your code here
    let who = [
      "A ghost",
      "An alien",
      "A ninja",
      "A pirate",
      "A dragon",
      "A wizard",
      "A robot",
      "A zombie",
    ];
    let action = [
      "stole",
      "burned",
      "hid",
      "threw away",
      "broke",
      "ate",
      "lost",
      "painted",
    ];
    let what = [
      "my keys",
      "my shoes",
      "my backpack",
      "my wallet",
      "my laptop",
      "my bike",
      "my homework",
      "my book",
    ];
    let when = [
      "last night",
      "this morning",
      "right before dinner",
      "while I was at the store",
      "just as I was leaving home",
      "during the meeting",
      "when I was taking a nap",
      "while I was watching TV",
    ];
    function getRandomIndex(array) {
      return Math.floor(Math.random() * array.length);
    }
  
    function generateExcuse() {
      let randomWho = who[getRandomIndex(who)];
      let randomAction = action[getRandomIndex(action)];
      let randomWhat = what[getRandomIndex(what)];
      let randomWhen = when[getRandomIndex(when)];
  
      let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
      return excuse;
    }
  
    function updateExcuse() {
      let excuseElement = document.getElementById("excuse");
      excuseElement.textContent = generateExcuse();
    }
  
    // Update excuse when the page loads
    updateExcuse();
  
    console.log(generateExcuse());
  
    console.log("Hello Rigo from the console!");
  };