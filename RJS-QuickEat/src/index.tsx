import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./Content/App"
import serviceworker from "./serviceworker"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceworker(console.log)
