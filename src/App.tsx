import React, { useState } from "react";
import data from "./data";

function App() {
  const [paraCounter, setParaCounter] = useState<number>(0);
  const [paragraph, setParagraph] = useState<string[] | []>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (paraCounter <= 0) {
      setParagraph(data.slice(0));
    }
    if (paraCounter > 20) {
      setParagraph(data);
    }
    setParagraph(data.slice(0, paraCounter));
  };

  return (
    <section className="section-center">
      <h2 className="header">Lorem Ipsum makes it all perfect :)</h2>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={paraCounter}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setParaCounter(parseInt(event.target.value))
          }
        />
        <button type="submit" className="btn">
          Generate!
        </button>
      </form>
      <article className="lorem-text">
        {paragraph.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
