import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const REACT_CONCEPTS = ["Fundamental", "Cruical", "Core"];

function generateIndexTitle(max) {
  return Math.floor(Math.random() * max);
}

export function Header() {
  const reactConcept =
    REACT_CONCEPTS[generateIndexTitle(REACT_CONCEPTS.length)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactConcept} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
