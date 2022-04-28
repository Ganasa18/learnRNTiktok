import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase/app";
import Constants from "expo-constants";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "./src/redux/reducers";
import { AuthScreen } from "./src/screens";

const store = createStore(Reducers, applyMiddleware(thunk));

// Initialize Firebase
if (firebase.apps.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

export default function App() {
  return (
    <Provider store={store}>
      <AuthScreen />
    </Provider>
  );
}
