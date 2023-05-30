import React from "react";
import { StyleSheet, Dimensions } from "react-native";
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
  ScrollView,
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";
const image3 = require("../assets/post3.png");
export default function AnimalList() {
  return (
    <VStack my={2} px={2}>
      <HStack>
        <ImageBlurLoading
          thumbnailSource={image3}
          source={image3}
          style={styles.image}
        />
        <Box px={2} overflow={"hidden"} w={"100%"}>
          <Text color={"#232323"} fontFamily={"SUITE-Bold"} w={"80%"}>
            제은이네 동물병원
          </Text>
          <Text color={"#232323"} fontFamily={"SUITE-Light"}>
            주소
          </Text>
          <Box w={"80%"}>
            <Text color={"#C8C8C8"} fontFamily={"SUITE-Light"}>
              “친절해요”
            </Text>
          </Box>
        </Box>
      </HStack>
    </VStack>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
});
