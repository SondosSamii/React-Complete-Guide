import { useState } from "react";
import { Section } from "../Section";
import { TabContent } from "./TabContent";
import { TabButtons } from "./TabButtons";
import { TabButton } from "./TabButton";
import "./Examples.css";

export function Examples({ concepts }) {
  const [selectedBtn, setSelectedBtn] = useState(null);

  function handleSelect(btn) {
    setSelectedBtn(btn.toLowerCase());
  }

  let tabContent = <p>Please select a tab</p>;

  selectedBtn && (tabContent = <TabContent selectedBtn={selectedBtn} />);

  return (
    <Section id="examples" title="Tab Buttons">
      <TabButtons
        ButtonsContainer="menu"
        buttons={concepts.map(({ title }, index) => (
          <TabButton
            key={index}
            title={title}
            isSelected={selectedBtn === title.toLowerCase()}
            onClick={() => handleSelect(title)}
          >
            {title}
          </TabButton>
        ))}
      />
      {tabContent}
    </Section>
  );
}
