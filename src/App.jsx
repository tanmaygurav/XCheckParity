import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultMessage, setResultMessage] = useState('');

  const handleCheck = () => {
    const trimmed = inputValue.trim();

    if (trimmed === '' || isNaN(Number(trimmed))) {
      setResultMessage('Not a valid number!');
      return;
    }

    try {
      const num = BigInt(trimmed);
      if (num % 2n === 0n) {
        setResultMessage(`The number ${trimmed} is even!`);
      } else {
        setResultMessage(`Oops, ${trimmed} is odd!`);
      }
    } catch {
      const num = Number(trimmed);
      if (num % 2 === 0) {
        setResultMessage(`The number ${trimmed} is even!`);
      } else {
        setResultMessage(`Oops, ${trimmed} is odd!`);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Even or Odd Checker</h1>
        <input
          type="text"
          name="number"
          placeholder="Enter a number"
          className={styles.inputField}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className={styles.button}
          onClick={handleCheck}
        >
          Check
        </button>
        {resultMessage && (
          <p className={styles.result}>{resultMessage}</p>
        )}
      </div>
    </div>
  );
}

export default App;

