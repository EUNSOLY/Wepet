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
const image2 = require("../assets/post2.png");
export default function BlogComponent() {
  return (
    <HStack>
      <VStack>
        <Text>ddd</Text>
        <Text>ddd</Text>
        <Text>ddd</Text>
      </VStack>
      <ImageBlurLoading
        thumbnailSource={image2}
        source={image2}
        style={styles.image}
      />
    </HStack>
  );
}

const styles = StyleSheet.create({
  image: {},
});
