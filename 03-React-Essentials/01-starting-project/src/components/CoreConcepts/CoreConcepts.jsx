import { Section } from "../Section.jsx";
import { CoreConcept } from "./CoreConcept.jsx";
import "./CoreConcepts.css";

export function CoreConcepts({ concepts }) {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {concepts.map((concept, index) => (
          <CoreConcept key={index} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
