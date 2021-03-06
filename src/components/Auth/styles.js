import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  containerMain: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
    color: "darkslategray",
    textAlign: "center",
  },

  providerButton: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  providerButtonText: {
    paddingRight: 20,
  },

  containerBottomButton: {
    backgroundColor: "ghostwhite",
    padding: 20,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "lightgray",
  },

  containerBottomButtonText: {
    fontWeight: "bold",
    color: "red",
  },
});

export default styles;
