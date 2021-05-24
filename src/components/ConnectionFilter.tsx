import React, { useState } from "react";
import CheckboxWithLabel from "./CheckboxWithLabel";

const initialState = {
  "non-stop": false,
  "one-transfer": false,
  "two-transfer": false,
  "three-transfer": false,
};

export default function ConnectionFilter() {
  const [selectedBoxes, setSelectedBoxes] = useState(initialState);

  const isCheckedAll = Object.values(selectedBoxes).every((name) => name);

  const setCheckboxOption = (option: keyof typeof selectedBoxes) => {
    setSelectedBoxes((prevState) => {
      return { ...prevState, [option]: !prevState[option] };
    });
  };

  const setAll = () => {
    if (isCheckedAll) {
      setSelectedBoxes(initialState);
    } else {
      setSelectedBoxes((prevState) =>
        Object.keys(prevState).reduce((acc, currKey) => {
          return { ...acc, [currKey]: true };
        }, prevState)
      );
    }
  };

  const isChecked = (option: keyof typeof selectedBoxes) => {
    return selectedBoxes[option];
  };

  return (
    <div className="connection-filter-container">
      <h3 className="connection-filter-title">Количество пересадок</h3>
      <CheckboxWithLabel
        onChange={setAll}
        name="all"
        id="checkbox-all"
        labelText="Все"
        checked={isCheckedAll}
      />
      <CheckboxWithLabel
        onChange={() => setCheckboxOption("non-stop")}
        name="non-stop"
        id="checkbox-non-stop"
        labelText="Без пересадок"
        checked={isChecked("non-stop")}
      />
      <CheckboxWithLabel
        onChange={() => setCheckboxOption("one-transfer")}
        name="one-transfer"
        id="checkbox-one"
        labelText="1 пересадка"
        checked={isChecked("one-transfer")}
      />
      <CheckboxWithLabel
        onChange={() => setCheckboxOption("two-transfer")}
        name="two-transfer"
        id="checkbox-two"
        labelText="2 пересадки"
        checked={isChecked("two-transfer")}
      />
      <CheckboxWithLabel
        onChange={() => setCheckboxOption("three-transfer")}
        name="three-transfer"
        id="checkbox-three"
        labelText="3 пересадки"
        checked={isChecked("three-transfer")}
      />
    </div>
  );
}
