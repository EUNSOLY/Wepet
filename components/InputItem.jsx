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
  FormControl,
  Input,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
export default function InputItem({ title, icon, type, error, setFunc }) {
  return (
    <FormControl>
      <FormControl.Label
        alignItems={"center"}
        w={"80%"}
        borderWidth={1}
        borderColor={"#E2E6EB"}
        borderRadius={50}
        mt={4}
        px={3}
        py={1}
        overflow={"hidden"}
      >
        <Center
          w={10}
          h={10}
          textAlign={"center"}
          justifyContent={"center"}
          borderRadius={50}
          backgroundColor={"#53DBA1"}
          mr={1}
        >
          <AntDesign name={icon} size={20} color="#fff" />
        </Center>
        <Input
          w={"100%"}
          borderWidth={0}
          placeholder={`${title}을 입력해주세요.`}
          type={type}
          fontSize={12}
          fontFamily={"SUITE-Bold"}
          onChangeText={(text) => setFunc(text.trim())}
        />
      </FormControl.Label>
      <Text fontFamily={"SUITE-Light"} fontSize={11} color={"red.500"} pl={5}>
        {error}
      </Text>
    </FormControl>
  );
}
