import React from "react";
import "./CheckboxWithLabel.style.scss";

interface CheckboxWithLabelProps {
  onChange: () => void;
  name: string;
  id: string;
  labelText: string;
  checked?: boolean;
}

export default function CheckboxWithLabel({
  onChange,
  name,
  id,
  labelText,
  checked = false,
}: CheckboxWithLabelProps) {
  return (
    <div className="checkbox-with-label-container">
      <input
        onChange={onChange}
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
}
