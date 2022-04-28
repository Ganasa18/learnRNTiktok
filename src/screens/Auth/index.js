import { Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AuthDetails, AuthMenu } from "../../components";
const AuthScreen = () => {
  const [authPage, setAuthPage] = useState(0);
  const [detailsPage, setDetailsPage] = useState(false);
  return (
    <View style={styles.page}>
      {detailsPage ? (
        <AuthDetails
          authPage={authPage}
          detailsPage={detailsPage}
          setDetailsPage={setDetailsPage}
        />
      ) : (
        <AuthMenu
          authPage={authPage}
          setAuthPage={setAuthPage}
          detailsPage={detailsPage}
          setDetailsPage={setDetailsPage}
        />
      )}
    </View>
  );
};

export default AuthScreen;
