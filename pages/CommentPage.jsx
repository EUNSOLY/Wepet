import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import {
  VStack,
  HStack,
  ScrollView,
  Pressable,
  FormControl,
  Input,
} from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";
import HeaderComponent from "../components/HeaderComponent";
import CommemtComponent from "../components/CommemtComponent";
const userImage = require("../assets/post.png");
export default function CommentPage({ navigation, route, data }) {
  return (
    <ScrollView backgroundColor={"#fff"}>
      {/* <HeaderComponent navigation={navigation} route={route} /> */}
      <HStack
        w={"100%"}
        backgroundColor={"#EBEBEB"}
        h={"70px"}
        mt={5}
        alignItems="center"
      >
        <FormControl>
          <FormControl.Label
            alignItems={"center"}
            w={"100%"}
            borderRadius={50}
            mt={4}
            px={3}
            py={1}
            overflow={"hidden"}
            justifyContent={"space-around"}
          >
            <ImageBlurLoading
              thumbnailSource={userImage}
              source={userImage}
              style={styles.sumnail}
            />

            <Input
              w={"80%"}
              borderWidth={0}
              placeholder={`댓글을 입력해주세요.`}
              type={"text"}
              fontSize={12}
              backgroundColor={"#fff"}
              fontFamily={"SUITE-Bold"}
              borderRadius={50}
            />
          </FormControl.Label>
        </FormControl>
      </HStack>

      <VStack px={5} mt={5}>
        <CommemtComponent />
      </VStack>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  sumnail: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
