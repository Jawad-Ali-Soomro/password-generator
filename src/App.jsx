import { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [password, setPassword] = useState("");

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return setPassword(result);
  }

  function saveToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  const type = [4, 5, 6, 7, 8];
  return (
    <div className="main">
      <Toaster />
      <div className="btn-sect">
        {type.map((btn) => {
          return (
            <button key={btn} onClick={() => generateRandomString(btn)}>
              {btn}
            </button>
          );
        })}
      </div>
      <h1>Generated Password:</h1>
      <h1
        className="pass"
        onClick={() =>
          saveToClipboard(password) + toast.success("Copied To Clipboard")
        }
      >
        {password}
      </h1>
    </div>
  );
}

export default App;
