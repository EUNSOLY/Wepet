import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
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
export default function TitleComponent({
  title,
  subtitle,
  more,
  navigation,
  route,
}) {
  console.log(route, "타이틀");

  const goCommu = () => {
    console.log("실행");
    console.log("타이틀", navigation);
    if (route.name == "CommunityPage") {
      return false;
    }
    navigation.navigate("CommunityPage");
  };
  return (
    <HStack pr={2} justifyContent={"space-between"}>
      <Text px={3} pb={2} color={"#232323"} fontFamily={"SUITE-Bold"}>
        <Text color={"#53DBA1"}>{title}</Text>
        {subtitle}
      </Text>

      {more ? (
        <TouchableOpacity onPress={goCommu}>
          <Text
            color={"#c8c8c8"}
            fontFamily={"SUITE-Light"}
            fontSize={12}
            // style={styles.hidden}
            style={route.name == "CommunityPage" ? styles.hidden : null}
          >
            더보기
          </Text>
        </TouchableOpacity>
      ) : null}
    </HStack>
  );
}
const styles = StyleSheet.create({
  hidden: {
    display: "none",
  },
});
