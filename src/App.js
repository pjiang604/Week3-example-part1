import "./styles.css";
import Boxes from "./components/Boxes";

export default function App() {
  function handleClick() {
    alert("You clicked me");
  }

  function handleMouseOver(event) {
    const element = event.target;
    element.textContent = "You are hovering over me";
  }

  function handleMouseOut(event) {
    const element = event.target;
    element.textContent = "Click me";
    element.style.color = "pink";
  }

  function handleClick(e) {
    const element = e.currentTarget;
    element.style.border = "1px solid red";
  }

  return (
    //if you click the inner box, it is nested within the App larger div, so the larger div function will run too
    <div className="App" onClick={handleClick}>
      <h1>Example 1 OnClick</h1>
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Click Me
      </button>

      <h1>Example 2</h1>
      <Boxes />
    </div>
  );
}
