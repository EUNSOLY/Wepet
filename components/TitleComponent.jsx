import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
  data,
}) {
  const goCommu = () => {
    if (more == "블로그목록더보기") {
      navigation.navigate("CommunityPage", { content: data });
    } else if (more == "동물병원더보기") {
      navigation.navigate("AnimalhospicePage");
    } else if (more == "꿀팁더보기") {
      navigation.navigate("TipPage");
    }
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
            style={route.name == "TabNavigation" ? styles.hidden : null}
            textAlign="center"
          >
            더보기
            <Ionicons name="md-chevron-forward" size={14} color="#c8c8c8" />
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
