import { useState } from "react";
import "./secret.css";
import { useContext } from "react";
import { DarkContext } from "../../App";

const Secret = (props) => {
  const dark = useContext(DarkContext);
  const [number, setNumber] = useState(100);
  const [loading, setLoading] = useState(false);
  const [solution, setSolution] = useState(null);

  const sumOfAllNumbers = (e, chosenNumber) => {
    if (chosenNumber > 10000000) {
      alert(
        "woah woah woah, that number might be too for this little thing to calculate"
      );
      return;
    }
    setLoading(true);
    console.log("clicked");
    e.preventDefault();
    let sum = 0;
    for (let i = 0; i <= chosenNumber; i++) {
      sum += i;
    }
    setLoading(false);
    setSolution(sum);
    return sum;
  };

  return (
    <div
      className={`secret ${dark ? "secret-dark" : "secret-light"}`}
      onClick={props.closeAllNav}
    >
      <div
        className={`secret-container ${dark ? "secret-dark" : "secret-light"}`}
      >
        <p>Hi</p>
        <p>Ever wanted to know the sum of all numbers of a number? Well...</p>
        <form onSubmit={(e) => sumOfAllNumbers(e, number)}>
          <input
            type='number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button>Calculate</button>
        </form>

        {loading ? <p>Calculating...</p> : null}
        {solution ? <p>Your answer is: {solution}</p> : null}
      </div>
    </div>
  );
};

export default Secret;
