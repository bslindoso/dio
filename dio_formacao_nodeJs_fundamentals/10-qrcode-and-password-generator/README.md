# QR Code & Password Generator

A terminal-based application that allows users to:
1. Generate a QR code from a URL.
2. Generate a password based on environment-defined parameters.

## Features
- **QR Code Generation**: Input a URL via the terminal and choose to either save the QR code as an image or display it directly in the terminal.
- **Password Generation**: Configure password characteristics using environment variables and generate secure passwords, which are displayed in the terminal and copied to the clipboard.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file to define password generation parameters. Example:
   ```env
   UPPERCASE_LETTERS=true
   LOWERCASE_LETTERS=true
   NUMBERS=true
   SPECIAL_CHARACTERS=true
   PASSWORD_LENGTH=12
   ```

---

## Usage

### 1. QR Code Generation

1. Run the application:
   ```bash
   node src/index.js
   ```

2. Select 1 for QRCODE GERENATOR

3. Follow the prompts to:
   - Input a URL.

   - Choose to save the QR code as an image or display it in the terminal.

---

### 2. Password Generation

1. Ensure the `.env` file is properly configured with the desired parameters.

2. Run the application:
   ```bash
   node src/index.js
   ```

3. Select 2 for PASSWORD GERENATOR

4. A secure password will be generated based on the `.env` file configuration, displayed in the terminal, and copied to your clipboard.

---

## Packages Used

- [prompt](https://www.npmjs.com/package/prompt): For user input in the terminal.
- [qrcode](https://www.npmjs.com/package/qrcode): To generate QR codes.
- [clipboardy](https://www.npmjs.com/package/clipboardy): To copy the generated password to the clipboard.
- [chalk](https://www.npmjs.com/package/chalk): To beauti{{i1}}fy the terminal.

---