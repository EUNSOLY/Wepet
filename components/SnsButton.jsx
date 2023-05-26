import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  Center,
  Box,
  Image,
} from "native-base";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
const kakao = require("../assets/kakao.png");
export default function SnsButton({ icon }) {
  return (
    <HStack w={"40%"} justifyContent={"space-between"}>
      <Button
        mt={2}
        borderWidth={1}
        borderColor={"#e9e9e9"}
        backgroundColor={"#fafafa"}
        w={38}
        h={38}
        borderRadius={50}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <AntDesign name="google" size={16} color="#da454d" />
      </Button>
      <Button
        mt={2}
        borderWidth={1}
        borderColor={"#e9e9e9"}
        backgroundColor={"#fafafa"}
        w={38}
        h={38}
        borderRadius={50}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FontAwesome name="facebook-f" color="#3E89FB" size={16} />
      </Button>

      <Button
        mt={2}
        borderWidth={1}
        borderColor={"#e9e9e9"}
        backgroundColor={"#fafafa"}
        w={38}
        h={38}
        borderRadius={50}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image source={kakao} size={8} resizeMode={"contain"} alt={"카카오"} />
      </Button>
    </HStack>

    // <IconButton borderWidth={1}>
    //
    //   {/*
    //   <FontAwesome5 name="" size={24} color="black" /> */}
    // </IconButton>
  );
}
