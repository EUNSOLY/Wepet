import { StyleSheet, Dimensions } from "react-native";
import React from "react";
import { HStack, Text, Pressable } from "native-base";

export default function PagePressComponent({ navigation, route, content }) {
  const goHome = () => {
    navigation.navigate("MainPage");
  };
  const goBoast = () => {
    navigation.navigate("CommunityPage", { data: content });
  };
  const goAnimal = () => {
    navigation.navigate("AnimalhospicePage");
  };
  const goShoping = () => {
    navigation.navigate("ShopingmallPage");
  };
  return (
    <HStack px={12} pb={2}>
      <Pressable mr={3} onPress={goHome}>
        <Text fontSize={17} fontFamily={"SUITE-Light"}>
          홈
        </Text>
      </Pressable>
      <Pressable mr={3} onPress={goBoast}>
        <Text fontSize={17} fontFamily={"SUITE-Light"}>
          자랑
        </Text>
      </Pressable>
      <Pressable mr={3} onPress={goAnimal}>
        <Text fontSize={17} fontFamily={"SUITE-Light"}>
          동물병원
        </Text>
      </Pressable>
      <Pressable mr={3} onPress={goShoping}>
        <Text fontSize={17} fontFamily={"SUITE-Light"}>
          쇼핑몰
        </Text>
      </Pressable>
    </HStack>
  );
}
