import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { StyleSheet, ImageBackground } from "react-native";

const loadingLogo = require("../assets/lodingLogo.png");
export default function LoadingPage() {
  return (
    <Center flex={1}>
      <ImageBackground
        source={loadingLogo}
        resizeMode="cover"
        style={styles.loadingImg}
      >
        <Text
          fontSize={20}
          color={"#7DC9FD"}
          py={200}
          // fontFamily={"SUITE-Bold"}
          style={{ fontFamily: "SUITE-Bold" }}
        >
          우리동네 동물모임
        </Text>
      </ImageBackground>
    </Center>
  );
}

const styles = StyleSheet.create({
  loadingImg: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logoImg: {
    marginTop: 140,
    resizeMode: "cover",
  },
});
