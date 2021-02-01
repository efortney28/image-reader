const Tesseract = require("tesseract.js");
const fs = require("fs");

const img = require("path").join(__dirname, "menu.jpg");

Tesseract.recognize(img, "eng", { logger: (m) => console.log(m) }).then(
  ({ data: { text } }) => {
    fs.writeFile("menu.txt", text, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("The file was create.");
    });
  }
);
