import React from "react";
const Checkbox = ({ checked, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
};

export default Checkbox;
