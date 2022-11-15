import { useState } from "react";
import "./App.css";
import Error from "./Error";

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [error, setError] = useState(false);

  const convertToDecimal = () => {
    //checking for values other than 0 and 1
    if (/[^01]/.test(binary) || binary === "") {
      setError(true);
      setDecimal("");
    } else {
      // converting
      let sum = 0;
      for (let i = 0; i < binary.length; i++) {
        if (binary.at(binary.length - 1 - i) == 1) {
          sum += binary.at(binary.length - 1 - i) * 2 ** i;
        }
      }
      setDecimal(sum);
      setError(false);
    }
  };

  return (
    <section>
      <h1>Binary to Decimal Converter</h1>
      <article className="converter">
        {error && <Error />}
        <label htmlFor="binary">Binary Input</label>
        <input
          type="text"
          id="binary"
          onChange={(e) => setBinary(e.target.value)}
          value={binary}
        />
        <br />
        <br />
        <label htmlFor="decimal">Decimal Output</label>
        <input type="text" id="decimal" defaultValue={decimal} disabled />
        <br />
        <br />
        <button onClick={convertToDecimal}>Convert</button>
      </article>
    </section>
  );
}

export default App;
