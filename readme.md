
---

````markdown
# ⚡ QR Code Generator

A simple Node.js CLI app that takes user input (name and URL), generates a QR code image from the URL, and saves both the image and input data to a `.txt` file.

---

## 🚀 Features

- ✅ Interactive CLI using `inquirer`
- ✅ Generates QR code from a URL using `qr-image`
- ✅ Saves user input to a text file
- ✅ Easy-to-use and lightweight

---

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/itslokeshx/QR-Code-Generator.git
cd QR-Code-Generator
npm install
````

---

## 🛠️ Usage

Run the app with:

```bash
node index.js
```

---

### Example Output

* You’ll be asked:

  * Your **name**
  * The **URL** to generate a QR code for
* The script will:

  * Generate a QR code image as `qrcode.png`
  * Save your inputs to a `user_data.txt` file

---

## 📁 Project Structure

```
QR-Code-Generator/
├── index.js         # Main script
├── package.json     # Project metadata and dependencies
├── qrcode.png       # Generated QR code image
└── user_data.txt    # Saved user inputs
```

---

## 📦 Dependencies

* [inquirer](https://www.npmjs.com/package/inquirer) – CLI prompts
* [qr-image](https://www.npmjs.com/package/qr-image) – QR code generation
* Node.js built-in `fs` module – for file operations

Install them manually with:

```bash
npm install inquirer qr-image
```

---

## 📝 License

This project is licensed under the [MIT License](LICENSE)

---
```
