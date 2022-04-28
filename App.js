import Constants from "expo-constants";
import firebase from "firebase/app";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./src/redux/reducers";
import { AuthScreen } from "./src/screens";

const store = createStore(Reducers, applyMiddleware(thunk));

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
} else {
  firebase.app();
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthScreen />
    </Provider>
  );
}
