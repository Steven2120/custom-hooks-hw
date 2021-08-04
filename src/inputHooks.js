import { useState } from "react";

function CustomHooksUsingArrayFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  function clearInput(e) {
    setValue("");
  }

  return [value, onChange, clearInput];
}

export default CustomHooksUsingArrayFormat;
