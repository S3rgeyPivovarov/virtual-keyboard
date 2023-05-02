const keyArray = [
  { key: "`", altKey: "~", ruKey: "ё", ruAltKey: "Ё" },
  { key: "1", altKey: "!", ruKey: "1", ruAltKey: "!" },
  { key: "2", altKey: "@", ruKey: "2", ruAltKey: '"' },
  { key: "3", altKey: "#", ruKey: "3", ruAltKey: "№" },
  { key: "4", altKey: "$", ruKey: "4", ruAltKey: ";" },
  { key: "5", altKey: "%", ruKey: "5", ruAltKey: "%" },
  { key: "6", altKey: "^", ruKey: "6", ruAltKey: ":" },
  { key: "7", altKey: "&", ruKey: "7", ruAltKey: "?" },
  { key: "8", altKey: "*", ruKey: "8", ruAltKey: "*" },
  { key: "9", altKey: "(", ruKey: "9", ruAltKey: "(" },
  { key: "0", altKey: ")", ruKey: "0", ruAltKey: ")" },
  { key: "-", altKey: "_", ruKey: "-", ruAltKey: "_" },
  { key: "=", altKey: "+", ruKey: "+", ruAltKey: "" },
  {
    key: "Backspace",
    altKey: "",
    ruKey: "Backspace",
    ruAltKey: "",
    addWidth: 1,
  },
  { key: "Tab", altKey: "", ruKey: "Tab", ruAltKey: "" },
  { key: "Q", altKey: "", ruKey: "Й", ruAltKey: "" },
  { key: "W", altKey: "", ruKey: "Ц", ruAltKey: "" },
  { key: "E", altKey: "", ruKey: "У", ruAltKey: "" },
  { key: "R", altKey: "", ruKey: "К", ruAltKey: "" },
  { key: "T", altKey: "", ruKey: "Е", ruAltKey: "" },
  { key: "Y", altKey: "", ruKey: "Н", ruAltKey: "" },
  { key: "U", altKey: "", ruKey: "Г", ruAltKey: "" },
  { key: "I", altKey: "", ruKey: "Ш", ruAltKey: "" },
  { key: "O", altKey: "", ruKey: "Щ", ruAltKey: "" },
  { key: "P", altKey: "", ruKey: "З", ruAltKey: "" },
  { key: "[", altKey: "{", ruKey: "Х", ruAltKey: "" },
  { key: "]", altKey: "}", ruKey: "Ъ", ruAltKey: "" },
  { key: "\\", altKey: "|", ruKey: "\\", ruAltKey: "/" },
  { key: "Del", altKey: "Delete", ruKey: "Del", ruAltKey: "Delete" },
  {
    key: "Caps Lock",
    altKey: "CapsLock",
    ruKey: "Caps Lock",
    ruAltKey: "CapsLock",
    addWidth: 1,
  },
  { key: "A", altKey: "", ruKey: "Ф", ruAltKey: "" },
  { key: "S", altKey: "", ruKey: "Ы", ruAltKey: "" },
  { key: "D", altKey: "", ruKey: "В", ruAltKey: "" },
  { key: "F", altKey: "", ruKey: "А", ruAltKey: "" },
  { key: "G", altKey: "", ruKey: "П", ruAltKey: "" },
  { key: "H", altKey: "", ruKey: "Р", ruAltKey: "" },
  { key: "J", altKey: "", ruKey: "О", ruAltKey: "" },
  { key: "K", altKey: "", ruKey: "Л", ruAltKey: "" },
  { key: "L", altKey: "", ruKey: "Д", ruAltKey: "" },
  { key: ";", altKey: ":", ruKey: "Ж", ruAltKey: "" },
  { key: "'", altKey: '"', ruKey: "Э", ruAltKey: "" },
  { key: "Enter", altKey: "", ruKey: "Enter", ruAltKey: "", addWidth: 1 },
  { key: "Shift", altKey: "", ruKey: "Shift", ruAltKey: "", addWidth: 1 },
  { key: "Z", altKey: "", ruKey: "Я", ruAltKey: "" },
  { key: "X", altKey: "", ruKey: "Ч", ruAltKey: "" },
  { key: "C", altKey: "", ruKey: "С", ruAltKey: "" },
  { key: "V", altKey: "", ruKey: "М", ruAltKey: "" },
  { key: "B", altKey: "", ruKey: "И", ruAltKey: "" },
  { key: "N", altKey: "", ruKey: "Т", ruAltKey: "" },
  { key: "M", altKey: "", ruKey: "Ь", ruAltKey: "" },
  { key: ",", altKey: "<", ruKey: "Б", ruAltKey: "" },
  { key: ".", altKey: ">", ruKey: "Ю", ruAltKey: "" },
  { key: "/", altKey: "?", ruKey: ".", ruAltKey: "," },
  { key: "Up", altKey: "ArrowUp", ruKey: "Up", ruAltKey: "" },
  { key: "Shift", altKey: "", ruKey: "Shift", ruAltKey: "", addWidth: 1 },
  { key: "Ctrl", altKey: "", ruKey: "Ctrl", ruAltKey: "" },
  { key: "Win", altKey: "Meta", ruKey: "Win", ruAltKey: "Meta" },
  { key: "Alt", altKey: "", ruKey: "Alt", ruAltKey: "" },
  {
    key: " ",
    altKey: " ",
    ruKey: " ",
    ruAltKey: " ",
    addWidth: 6,
  },
  { key: "Alt", altKey: "", ruKey: "Alt", ruAltKey: "" },
  { key: "Left", altKey: "ArrowLeft", ruKey: "Left", ruAltKey: "" },
  { key: "Down", altKey: "ArrowDown", ruKey: "Down", ruAltKey: "" },
  { key: "Right", altKey: "ArrowRight", ruKey: "Right", ruAltKey: "" },
  { key: "Ctrl", altKey: "Control", ruKey: "Ctrl", ruAltKey: "Control" },
];

const body = document.querySelector("#body");

body.innerHTML =
  "<div>Привет:) Windows. Изменение языка: Ctrl+Alt</div><div class='box' id='box'></div>";

const box = document.querySelector("#box");

box.innerHTML =
  "<textarea class='textarea'></textarea> <div class='keyboard'></div>";

const textarea = document.querySelector(".textarea");

const keyboard = document.querySelector(".keyboard");

let keyLang = localStorage.getItem("keyLang") || "en";

let isCapsLock = false;

let isShift = false;

keyArray.forEach((element) => {
  keyboard.innerHTML +=
    "<div class='button' " +
    (element.addWidth === 1
      ? 'style="width: 100px"'
      : element.addWidth === 6
      ? 'style="width: 375px"'
      : "") +
    "></div>";
});

const button = document.querySelectorAll(".button");

function addInscriptionButton() {
  let i = 0;
  button.forEach((element) => {
    element.textContent =
      keyArray[i].key.length < 2
        ? keyLang === "en"
          ? isShift
            ? keyArray[i].altKey
              ? keyArray[i].altKey
              : isCapsLock
              ? keyArray[i].key.toLowerCase()
              : keyArray[i].key.toUpperCase()
            : isCapsLock
            ? keyArray[i].key.toUpperCase()
            : keyArray[i].key.toLowerCase()
          : isShift
          ? keyArray[i].ruAltKey
            ? keyArray[i].ruAltKey
            : isCapsLock
            ? keyArray[i].ruKey.toLowerCase()
            : keyArray[i].ruKey.toUpperCase()
          : isCapsLock
          ? keyArray[i].ruKey.toUpperCase()
          : keyArray[i].ruKey.toLowerCase()
        : keyArray[i].ruKey;
    element.id = i;
    i += 1;
  });
}

addInscriptionButton();

document.addEventListener("keydown", function (event) {
  if (event.altKey && event.ctrlKey) {
    if (keyLang === "en") {
      keyLang = "ru";
    } else {
      keyLang = "en";
    }
    localStorage.setItem("keyLang", keyLang);
  }
  addInscriptionButton();
});

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "CapsLock") {
    isCapsLock = !isCapsLock;
    addInscriptionButton();
  }
});

button.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.textContent === "Caps Lock") {
      isCapsLock = !isCapsLock;
      addInscriptionButton();
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    isShift = true;
    addInscriptionButton();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    isShift = false;
    addInscriptionButton();
  }
});

button.forEach((element) => {
  element.addEventListener("mousedown", (event) => {
    if (element.textContent === "Shift") {
      isShift = true;
      addInscriptionButton();
    }
  });
});

button.forEach((element) => {
  element.addEventListener("mouseup", (event) => {
    if (element.textContent === "Shift") {
      isShift = false;
      addInscriptionButton();
    }
  });
});

function editTextArea(text) {
  let selectionNegativePos = textarea.value.length - textarea.selectionEnd;
  textarea.value =
    textarea.value.substring(0, textarea.selectionStart) +
    (text.length < 3 ? text : "") +
    textarea.value.substring(textarea.selectionEnd, textarea.value.length);
  textarea.selectionEnd = textarea.value.length - selectionNegativePos;
  textarea.focus();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    if (event.key == "Tab") {
      event.preventDefault();
      text = "\t";
      editTextArea(text);
    }
  }
});

button.forEach((element) => {
  element.addEventListener("click", (event) => {
    let text = element.textContent;
    let selectionNegativePos = textarea.value.length - textarea.selectionEnd;
    if (text === "Tab") {
      text = "\t";
    } else if (text === "Enter") {
      text = "\n";
    } else if (text === "Backspace") {
      textarea.value =
        textarea.value.substring(0, textarea.selectionStart - 1) +
        textarea.value.substring(textarea.selectionEnd, textarea.value.length);
    } else if (text === "Del") {
      textarea.value =
        textarea.value.substring(0, textarea.selectionStart) +
        textarea.value.substring(
          textarea.selectionEnd + 1,
          textarea.value.length
        );
      selectionNegativePos = selectionNegativePos - 1;
    } else if (text === "Up") {
      text = "▲";
    } else if (text === "Down") {
      text = "▼";
    } else if (text === "Left") {
      text = "◄";
    } else if (text === "Right") {
      text = "►";
    }

    textarea.value =
      textarea.value.substring(0, textarea.selectionStart) +
      (text.length < 3 ? text : "") +
      textarea.value.substring(textarea.selectionEnd, textarea.value.length);
    textarea.selectionEnd = textarea.value.length - selectionNegativePos;
    textarea.focus();
  });
});

document.addEventListener("keydown", (event) => {
  let i = 0;
  keyArray.forEach((element) => {
    if (
      event.key.toLowerCase() === element.key.toLowerCase() ||
      event.key.toLowerCase() === element.altKey.toLowerCase() ||
      event.key.toLowerCase() === element.ruKey.toLowerCase() ||
      event.key.toLowerCase() === element.ruAltKey.toLowerCase()
    ) {
      button[i].classList.add("clickStyle");
      console.log("yep");
    }
    i += 1;
  });
});

document.addEventListener("keyup", (event) => {
  let i = 0;
  keyArray.forEach((element) => {
    if (
      event.key.toLowerCase() == element.key.toLowerCase() ||
      event.key.toLowerCase() == element.altKey.toLowerCase() ||
      event.key.toLowerCase() == element.ruKey.toLowerCase() ||
      event.key.toLowerCase() == element.ruAltKey.toLowerCase()
    ) {
      button[i].classList.remove("clickStyle");
      console.log("yep");
    }
    i += 1;
  });
});

button.forEach((element) => {
  element.addEventListener("mouseup", (event) => {
    element.classList.remove("clickStyle");
  });
  element.addEventListener("mousedown", (event) => {
    element.classList.add("clickStyle");
  });
});
