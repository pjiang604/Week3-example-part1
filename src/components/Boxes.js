import "./boxes.css";

export default function Boxes() {
  function random(n) {
    return Math.floor(Math.random() * n);
  }

  function handleInnerClick(e) {
    //e is the same thing as "event"
    const red = random(255);
    const blue = random(255);
    const green = random(255);

    const element = e.target;
    element.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
  }

  function handleOuterClick(e) {
    const element = e.currentTarget; //when the event (i.e., inner box) is clicked, target the outer box
    setTimeout(function () {
      element.style.backgroundColor = "teal";
    }, 2000);
  }

  return (
    <div className="outer" onClick={handleOuterClick}>
      <div className="inner" onClick={handleInnerClick}></div>
    </div>
  );
}
