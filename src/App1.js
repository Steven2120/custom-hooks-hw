import React from "react";
import CustomHooksUsingArrayFormat from "./inputHooks";

function App1() {
  const [username, usernameOnChange, clearUsernameInput] =
    CustomHooksUsingArrayFormat("");
  const [email, emailOnChange, clearEmailInput] =
    CustomHooksUsingArrayFormat("");
  const [password, passwordOnChange, clearPasswordInput] =
    CustomHooksUsingArrayFormat("");

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

export default App1;
