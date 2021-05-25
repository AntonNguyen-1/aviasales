import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSelectedStopsFilters } from "../redux/stopsFilter/stopsFilter.action";
import { StopsFilters } from "../redux/stopsFilter/types/types";
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

  const modifySelectedBoxes = (option: keyof typeof selectedBoxes) => {
    const filters = { ...selectedBoxes, [option]: !selectedBoxes[option] };
    const selectedStops = Object.keys(filters)
      .map((f) => {
        if (!filters[f as keyof StopsFilters]) return -1;
        switch (f) {
          case "non-stop": {
            return 0;
          }
          case "one-transfer": {
            return 1;
          }
          case "two-transfers": {
            return 2;
          }
          case "three-transfers": {
            return 3;
          }
          default: {
            return -1;
          }
        }
      })
      .filter((s) => s >= 0);
    if (!selectedStops.length) {
      return selectedStops.concat([0, 1, 2, 3]);
    }
    return selectedStops;
  };

  const handleOnChange = (option: keyof typeof selectedBoxes) => {
    setSelectedBoxes((prevState) => {
      return { ...prevState, [option]: !prevState[option] };
    });
    const selectedStops = modifySelectedBoxes(option);
    dispatch(updateSelectedStopsFilters(selectedStops));
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
      dispatch(updateSelectedStopsFilters([0, 1, 2, 3]));
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
        onChange={() => handleOnChange("non-stop")}
        name="non-stop"
        id="checkbox-non-stop"
        labelText="Без пересадок"
        checked={isChecked("non-stop")}
      />
      <CheckboxWithLabel
        onChange={() => handleOnChange("one-transfer")}
        name="one-transfer"
        id="checkbox-one"
        labelText="1 пересадка"
        checked={isChecked("one-transfer")}
      />
      <CheckboxWithLabel
        onChange={() => handleOnChange("two-transfers")}
        name="two-transfers"
        id="checkbox-two"
        labelText="2 пересадки"
        checked={isChecked("two-transfers")}
      />
      <CheckboxWithLabel
        onChange={() => handleOnChange("three-transfers")}
        name="three-transfers"
        id="checkbox-three"
        labelText="3 пересадки"
        checked={isChecked("three-transfers")}
      />
    </div>
  );
}
