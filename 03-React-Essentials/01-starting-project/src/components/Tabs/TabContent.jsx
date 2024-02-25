import { EXAMPLES } from "../../data";
import "./TabContent.css";

export function TabContent({ selectedBtn }) {
  const example = EXAMPLES[selectedBtn];
  return (
    <div id="tab-content">
      <h3>{example.title}</h3>
      <p>{example.description}</p>
      <pre>
        <code>{example.code}</code>
      </pre>
    </div>
  );
}
