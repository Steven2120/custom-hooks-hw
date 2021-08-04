import React, { useState } from "react";

function CustomHooksUsingObjectFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  }

  function clearInput() {
    setValue("");
  }

  return { value, onChange, clearInput };
}

function App2() {
  const {
    value: username,
    onChange: usernameOnChange,
    clearInput: clearUsernameInput,
  } = CustomHooksUsingObjectFormat("");

  const {
    value: email,
    onChange: emailOnChange,
    clearInput: clearEmailInput,
  } = CustomHooksUsingObjectFormat("");

  const {
    value: password,
    onChange: passwordOnChange,
    clearInput: clearPasswordInput,
  } = CustomHooksUsingObjectFormat("");

  function handleOnSubmit(e) {
    e.preventDefault();

    clearUsernameInput();
    clearEmailInput();
    clearPasswordInput();
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => usernameOnChange(e)}
        />
        <br />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => emailOnChange(e)}
        />
        <br />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => passwordOnChange(e)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App2;
