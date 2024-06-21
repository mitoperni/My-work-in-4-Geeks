const names = [
    "fuzzy",
    "giggle",
    "bouncy",
    "whacky",
    "snuggle",
    "cheesy",
    "wobble",
    "goofy",
    "jolly",
    "fluffy"
];

const adjectives = ["", "silly", "crazy", "weird", "", "funky", "odd"];

const nouns = [
    "banana",
    "pickle",
    "ninja",
    "potato",
    "panda",
    "unicorn",
    "taco",
    "moose",
    "dinosaur",
    "sloth",
    "burrito",
    "hippopota"
];

const endings = [
    ".com",
    ".es",
    ".eu",
    ".net",
    ".org",
    ".io",
    ".biz",
    ".co",
    ".info",
    ".tech",
    ".nana",
    ".kle",
    ".nja",
    ".ato",
    ".nda",
    ".corn",
    ".co",
    ".rse",
    ".oth",
    ".ta"
];

const getRandomNumber = arr => arr[Math.floor(Math.random() * arr.length)];

const generateDomain = () => {
    const name = getRandomNumber(names);
    const adjective = getRandomNumber(adjectives);
    const noun = getRandomNumber(nouns);
    const ending = getRandomNumber(endings);

    let domain;

    if (noun.endsWith(ending.slice(1))) {
        domain = `${name}${adjective}${noun.slice(0, -ending.length + 1)}${ending}`;
        document.querySelector("#generated").innerHTML = [
            "<strong>",
            domain,
            "</strong>"
        ].join("");
        document.querySelector("#generated").classList.remove("alert-warning");
        document.querySelector("#generated").classList.add("alert-success");
        document.querySelector("#generated").classList.add("fs-1");
        document.querySelector("#tryAgain").classList.add("d-none");
        document.querySelector("#sure").classList.remove("d-none");
        document.querySelector("#sure").classList.add("d-block");
        document.querySelector("#h1Tittle").classList.add("text-success");
        document.querySelector("#h1Tittle").innerHTML = [
            "<strong>HEY YOU HAVE FOUND A DOMAIN HACK!</strong>"
        ];
        document.querySelector("#image").src =
            "https://fbi.cults3d.com/uploaders/24560499/illustration-file/130359b4-6c34-4848-8bc5-e6b52ad20a3d/338-3388311_plantilla-de-pikachu-confundido-sorprendido-sonriendo-surprised-pikachu.png";
    } else {
        domain = `${name}${adjective}${noun}${ending}`;
        document.querySelector("#generated").innerHTML = domain;
        document.querySelector("#generated").classList.add("alert-warning");
        document.querySelector("#generated").classList.remove("alert-success");
        document.querySelector("#generated").classList.remove("fs-1");
        document.querySelector("#h1Tittle").classList.remove("text-success");
        document.querySelector("#h1Tittle").innerHTML = ["Here is a new Domain:"];
        document.querySelector("#image").src =
            "https://plantillasdememes.com/img/plantillas/yo-habia-ponido-mis-cosas-aqui01561772600.jpg";
    }
};

const buttonsAction = () => {
    generateDomain();
    document.querySelector("#tryAgain").classList.remove("d-none");
    document.querySelector("#tryAgain").classList.add("d-block");
    document.querySelector("#sure").classList.add("d-none");
    document.querySelector("#sure").classList.remove("d-block");
};

document.querySelector("#tryAgain").addEventListener("click", generateDomain);

document.querySelector("#sure").addEventListener("click", buttonsAction);

window.onload = function () {
    generateDomain();
};