import { useEffect, useState } from "react";
import { sendToAI } from "./sendAi";

function App() {
  const [apiKey, setApiKey] = useState("")

  useEffect(() => {
    if (localStorage.getItem("api_key"))
      setApiKey(localStorage.getItem("api_key"))
    else
      setApiKey("")
  }, [])

  const handleClick = () => {

    if (document.getElementById("remember_checkbox").checked)
      localStorage.setItem("api_key", apiKey)

    sendToAI(document.getElementById("message_input").value, apiKey)
      .then(res => document.getElementById("response_show").innerText = res)
      .catch(err => console.error(err));
  }

  return (
    <>
      <center className="mt-24">
        <h1>
          Enter your Hugging Face API key
        </h1>
        <br />
        <input type="text" id="api_input" className="rounded border-2 border-blue-600" onChange={(e) => setApiKey(e.target.value)} value={apiKey} />
        <br />
        <input type="checkbox" name="" id="remember_checkbox" />
        <br />
        <label htmlFor="remember_checkbox">Remember API key</label>
        <br />
        <h1>
          Enter your message
        </h1>
        <input type="text" id="message_input" className="rounded border-2 border-blue-600" />
        <br />
        <button onClick={handleClick} className="bg-blue-600 border-2 border-blue-600 text-white rounded px-4 py-2 mt-4">Send</button>
        <p id="response_show"></p>
      </center>
    </>
  )
}

export default App;