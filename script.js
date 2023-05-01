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
  { key: "Del", altKey: "", ruKey: "Del", ruAltKey: "" },
  {
    key: "Caps Lock",
    altKey: "",
    ruKey: "Caps Lock",
    ruAltKey: "",
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
  { key: "Up", altKey: "", ruKey: "Up", ruAltKey: "" },
  { key: "Shift", altKey: "", ruKey: "Shift", ruAltKey: "", addWidth: 1 },
  { key: "Ctrl", altKey: "", ruKey: "Ctrl", ruAltKey: "" },
  { key: "Win", altKey: "", ruKey: "Win", ruAltKey: "" },
  { key: "Alt", altKey: "", ruKey: "Alt", ruAltKey: "" },
  { key: "Spacebar", altKey: "", ruKey: "Spacebar", ruAltKey: "", addWidth: 6 },
  { key: "Alt", altKey: "", ruKey: "Alt", ruAltKey: "" },
  { key: "Left", altKey: "", ruKey: "Left", ruAltKey: "" },
  { key: "Down", altKey: "", ruKey: "Down", ruAltKey: "" },
  { key: "Right", altKey: "", ruKey: "Right", ruAltKey: "" },
  { key: "Ctrl", altKey: "", ruKey: "Ctrl", ruAltKey: "" },
];

const body = document.querySelector("#body");

body.innerHTML = "<div class='box' id='box'></div>";

const box = document.querySelector("#box");

box.innerHTML =
  "<textarea class='textarea'></textarea> <div class='keyboard'></div>";

const textarea = document.querySelector(".textarea");

const keyboard = document.querySelector(".keyboard");

keyArray.forEach((element) => {
  keyboard.innerHTML +=
    "<div class='button' " +
    (element.addWidth === 1
      ? 'style="width: 100px"'
      : element.addWidth === 6
      ? 'style="width: 375px"'
      : "") +
    ">" +
    (element.key.length < 2 ? element.key.toLowerCase() : element.key) +
    "</div>";
});

const button = document.querySelectorAll(".button");

let isCapsLock = false;

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "CapsLock") {
    isCapsLock = !isCapsLock;
    button.forEach((element) => {
      element.textContent =
        element.textContent.length === 1
          ? isCapsLock
            ? element.textContent.toUpperCase()
            : element.textContent.toLowerCase()
          : element.textContent;
    });
  }
});

button.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.textContent === "Caps Lock") {
      isCapsLock = !isCapsLock;
      console.log(isCapsLock);
      button.forEach((element) => {
        element.textContent =
          element.textContent.length === 1
            ? isCapsLock
              ? element.textContent.toUpperCase()
              : element.textContent.toLowerCase()
            : element.textContent;
      });
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    let i = 0;
    button.forEach((element) => {
      element.textContent =
        element.textContent.length === 1
          ? element.textContent.toUpperCase() ===
            element.textContent.toLowerCase()
            ? keyArray[i].altKey
            : isCapsLock
            ? element.textContent.toUpperCase()
            : element.textContent.toLowerCase()
          : element.textContent;
      i += 1;
    });
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    let i = 0;
    button.forEach((element) => {
      element.textContent =
        element.textContent.length === 1
          ? element.textContent.toUpperCase() ===
            element.textContent.toLowerCase()
            ? keyArray[i].key
            : isCapsLock
            ? element.textContent.toLowerCase()
            : element.textContent.toUpperCase()
          : element.textContent;
      i += 1;
    });
  }
});

button.forEach((element) => {
  element.addEventListener("mousedown", (event) => {
    if (element.textContent === "Shift") {
      let i = 0;
      button.forEach((element) => {
        element.textContent =
          element.textContent.length === 1
            ? element.textContent.toUpperCase() ===
              element.textContent.toLowerCase()
              ? keyArray[i].altKey
              : isCapsLock
              ? element.textContent.toLowerCase()
              : element.textContent.toUpperCase()
            : element.textContent;
        i += 1;
      });
    }
  });
});

button.forEach((element) => {
  element.addEventListener("mouseup", (event) => {
    if (element.textContent === "Shift") {
      let i = 0;
      button.forEach((element) => {
        element.textContent =
          element.textContent.length === 1
            ? element.textContent.toUpperCase() ===
              element.textContent.toLowerCase()
              ? keyArray[i].key
              : isCapsLock
              ? element.textContent.toUpperCase()
              : element.textContent.toLowerCase()
            : element.textContent;
        i += 1;
      });
    }
  });
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
    } else if (text === "Spacebar") {
      text = " ";
    }
    textarea.value =
      textarea.value.substring(0, textarea.selectionStart) +
      (text.length < 3 ? text : "") +
      textarea.value.substring(textarea.selectionEnd, textarea.value.length);
    textarea.selectionEnd = textarea.value.length - selectionNegativePos;
    textarea.focus();
  });
});
