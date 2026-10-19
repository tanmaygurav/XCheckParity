# XCheckParity

A clean and responsive React application built with Vite and CSS Modules that checks whether a given number is even or odd, with built-in input validation.

## 🔗 Links

- **Live Demo:** [https://x-check-parity-tanmay-gurav.vercel.app/](https://x-check-parity-tanmay-gurav.vercel.app/)
- **GitHub Repository:** [https://github.com/tanmaygurav/XCheckParity](https://github.com/tanmaygurav/XCheckParity)

---

## ✨ Features

- **Even/Odd Evaluation:** Accurately determines the parity of input numbers using arbitrary-precision arithmetic (`BigInt`).
- **Input Validation:** Catches non-numeric inputs, empty submissions, and `NaN` with clear error messaging (`"Not a valid number!"`).
- **Keyboard Friendly:** Press `Enter` to quickly check the number without clicking the button.
- **Modern Styling:** Built with CSS Modules for scoped, modular, and maintainable styling.
- **Fast Build:** Powered by Vite and React 19.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler / Build Tool:** [Vite](https://vite.dev/)
- **Styling:** CSS Modules
- **Testing:** [Cypress](https://www.cypress.io/) E2E Testing
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tanmaygurav/XCheckParity.git
   cd XCheckParity
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 🧪 Testing

To run the Cypress end-to-end test suite:

1. Ensure the app is running on `http://localhost:5173`.
2. In a separate terminal, navigate to the `assessment` directory and install test dependencies:
   ```bash
   cd assessment
   npm install
   ```
3. Run the Cypress tests:
   ```bash
   npx cypress run
   ```

---

## 📁 Project Structure

```
XCheckParity/
├── assessment/                 # End-to-end Cypress test suite
│   └── cypress/e2e/spec.cy.js  # Parity checker test specifications
├── src/
│   ├── App.jsx                 # Core Even/Odd Checker component
│   ├── App.module.css          # Modular styles for App component
│   ├── index.css               # Global base styles
│   └── main.jsx                # React root mount
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and scripts
└── vite.config.js              # Vite configuration
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

