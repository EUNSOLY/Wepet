import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { VStack, HStack, Text, Center, Box, Pressable } from "native-base";
import HeaderComponent from "../components/HeaderComponent";
import ImageBlurLoading from "react-native-image-blur-loading";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
export default function DetailPage({ navigation, route, dataList }) {
  // console.log("디테알", route.params);
  let [list, setList] = useState(route.params.data);
  const goCommemt = (e) => {
    console.log("코멘트 페이지이동");
    e.preventDefault();
    navigation.navigate("CommentPage", { content: list });
  };
  return (
    <Box flex={1} backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Box py={2} px={2}>
        <HStack>
          <ImageBlurLoading
            thumbnailSource={{ uri: list.image }}
            source={{ uri: list.image }}
            style={styles.sumnail}
          />
          <VStack pl={1}>
            <Text fontSize={13} fontFamily={"SUITE-Light"}>
              유저이름
            </Text>
            <Text fontSize={11} color={"#c8c8c8"} fontFamily={"SUITE-Light"}>
              3시간전
            </Text>
          </VStack>
        </HStack>
        <Center>
          <ImageBlurLoading
            thumbnailSource={{ uri: list.image }}
            source={{ uri: list.image }}
            style={styles.image}
          />
        </Center>
        <Box px={2}>
          <Text pt={3} fontSize={18} fontFamily={"SUITE-Bold"}>
            {list.title}
          </Text>
          <Text
            pb={5}
            fontFamily={"SUITE-Light"}
            fontSize={11}
            color={"#5c5c5c"}
          >
            {list.tiem}
          </Text>
          <Text pb={3} fontFamily={"SUITE-Light"} fontSize={14}>
            {list.content}
          </Text>
          <HStack h={5}>
            <Pressable
              onPress={() => {
                console.log("좋아요");
              }}
            >
              <HStack px={1}>
                <Ionicons
                  name="md-heart-outline"
                  fontFamily={"SUITE-Light"}
                  size={15}
                  color="red"
                  style={{ marginHorizontal: 1 }}
                />
                <Text px={0.4} fontSize={13} fontFamily={"SUITE-Bold"}>
                  0
                </Text>
              </HStack>
            </Pressable>
            <Pressable onPress={goCommemt}>
              <HStack px={1} alignItems={"center"}>
                <Ionicons
                  fontFamily={"SUITE-Light"}
                  name="md-chatbubble-ellipses-outline"
                  size={15}
                  color="#232323"
                  style={{ marginHorizontal: 1 }}
                />

                <Text px={0.4} fontSize={13} fontFamily={"SUITE-Bold"}>
                  0
                </Text>
              </HStack>
            </Pressable>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 10,
    width: "95%",
    height: 240,
    objectFit: "cover",
    borderRadius: 10,
  },
  sumnail: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
