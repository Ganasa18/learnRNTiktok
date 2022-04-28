import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";

const AuthDetails = ({ authPage, setDetailsPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDetailsPage(false)}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {authPage == 0 ? "Sign In" : "Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthDetails;
