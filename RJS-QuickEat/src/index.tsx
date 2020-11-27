// PLUGINS IMPORTS //
import React from "react"
import ReactDOM from "react-dom"
import serviceworker from "./serviceworker"

// FIREBASE SETTINGS //
import firebase from "firebase/app"
import { createFirestoreInstance } from "redux-firestore"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"

// REDUX SETTINGS //
import ReduxStore from "Redux/ReduxStore"
import { Provider } from "react-redux"

// COMPONENTS IMPORTS //
import App from "./Content/App"

/////////////////////////////////////////////////////////////////////////////

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: ReduxStore.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceworker(console.log)
