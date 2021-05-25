import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTicketsByFilters } from "../redux/ticket/ticket.api";
import CheckboxWithLabel from "./CheckboxWithLabel";

const initialState = {
  "non-stop": false,
  "one-transfer": false,
  "two-transfers": false,
  "three-transfers": false,
};

export default function StopsFilter() {
  const dispatch = useDispatch();
  const [selectedBoxes, setSelectedBoxes] = useState(initialState);

  const isCheckedAll = Object.values(selectedBoxes).every((name) => name);

  const setCheckboxOption = (option: keyof typeof selectedBoxes) => {
    setSelectedBoxes((prevState) => {
      return { ...prevState, [option]: !prevState[option] };
    });
    dispatch(
      fetchTicketsByFilters({
        ...selectedBoxes,
        [option]: !selectedBoxes[option],
      })
    );
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
      dispatch(fetchTicketsByFilters(initialState));
    }
  };

  const isChecked = (option: keyof typeof selectedBoxes) => {
    return selectedBoxes[option];
  };

  return (
    <div className="stops-filter-container">
      <h3 className="stops-filter-title">Количество пересадок</h3>
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
        onChange={() => setCheckboxOption("two-transfers")}
        name="two-transfers"
        id="checkbox-two"
        labelText="2 пересадки"
        checked={isChecked("two-transfers")}
      />
      <CheckboxWithLabel
        onChange={() => setCheckboxOption("three-transfers")}
        name="three-transfers"
        id="checkbox-three"
        labelText="3 пересадки"
        checked={isChecked("three-transfers")}
      />
    </div>
  );
}
