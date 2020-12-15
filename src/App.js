import React, {useState, useRef, useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // need to useState to capture our state changes the react way.
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  /* With initial values for our color settings, we must capture the result of red, green, and blue in some way that is persistent and does not affect the state. Implement the useRef() function to help accomplish this for you. */
  const color = useRef(`rgb(${red},${green},${blue})`);

  /* useRef will set our color value, but useEffect() will help add the side effects to the DOM, enact that change each time we re-render. */
  useEffect(() => {
    color.current = `rgb(${red},${green},${blue})`;
  });

  const hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  function findHexCode(num) {
    let firstVal, secondVal;
    firstVal = Math.floor(num / 16);
    let diff = num / 16 - firstVal;
    secondVal = Math.floor(diff.toFixed(2) * 16);
    let colrCode = `${hexList[firstVal]}${hexList[secondVal]}`;
    return colrCode;
  }
  return (
    <main
      className="main"
      style={{width: "22", backgroundColor: color.current}}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Welcome to the React Color Picker! Find the code for any color, or
            play with the scrubbers below to find your favourite color!
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input
              type="range"
              onChange={(e) => {
                setRed(e.target.value);
              }}
              min="0"
              max="255"
              value={red}
            />
            <label className="text-danger px-3">
              <b>Red</b>
            </label>
          </li>
          <li className="list-group-item">
            <input
              type="range"
              onChange={(e) => {
                setGreen(e.target.value);
              }}
              min="0"
              max="255"
              value={green}
            />
            <label className="text-success px-3">
              <b>Green</b>
            </label>
          </li>
          <li className="list-group-item">
            <input
              type="range"
              onChange={(e) => {
                setBlue(e.target.value);
              }}
              min="0"
              max="255"
              value={blue}
            />
            <label className="text-primary px-3">
              <b>Blue</b>
            </label>
          </li>
        </ul>
        <div className="card-body row text-center">
          <p
            className="card-text col h5"
            id="rgb"
          >{`rgb(${red},${green},${blue})`}</p>
          <p className="card-text col h5">
            #
            <span id="hexcode">
              {findHexCode(red) + findHexCode(green) + findHexCode(blue)}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};
export default App;
