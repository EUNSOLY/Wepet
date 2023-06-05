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

import InputItem from "../components/InputItem";
import SnsButton from "../components/SnsButton";

import { auth, db } from "../config/fireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function SignUpPage({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nickName, setnickName] = useState("");
  const [NickNameError, setNickNameError] = useState("");

  const goSignUp = () => {
    if (nickName === "") {
      setNickNameError("반려견이름을 입력해주세요");
      return false;
    } else {
      setNickNameError("");
    }
    if (email === "") {
      setEmailError("이메일을 입력해주세요");
      return false;
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
      return false;
    } else {
      setPasswordError("");
    }

    //회원가입 처리
    createUserWithEmailAndPassword(auth, email, password, nickName)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        AsyncStorage.setItem("session", email);
        console.log("가입성공", user);
        const userRef = doc(db, "users", user.uid);
        setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          nickName: nickName,
        });
        AsyncStorage.getItem("session", (err, result) => {
          console.log("회원가입 페이지 ===session", result);
        });
        // goSignin();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("가입실패", errorCode, errorMessage);
      });

    navigation.navigate("SignInPage");
  };

  const setEmailFunc = (itemInputEmail) => {
    // 이메일 상태값 관리 함수
    setEmail(itemInputEmail);
  };
  const setPasswordFunc = (itemInputPassword) => {
    // 패스워드 상태값 관리 함수
    setPassword(itemInputPassword);
  };

  const setNickNameFunc = (itemInputNickName) => {
    // 닉네임 상태값 관리 함수

    setnickName(itemInputNickName);
  };

  return (
    <Center
      flex={1}
      borderWidth={1}
      backgroundColor={"#fff"}
      justifyContent={"flex-start"}
    >
      <Box safeAreaTop />
      <Text
        fontFamily={"SUITE-Bold"}
        fontSize={30}
        mt={"50px"}
        color={"#53DBA1"}
      >
        Sign Up
      </Text>
      <VStack px={3}>
        <InputItem
          title={"닉네임"}
          icon={"user"}
          type={"text"}
          error={NickNameError}
          setFunc={setNickNameFunc}
        />
        <InputItem
          title={"이메일"}
          icon={"mail"}
          type={"text"}
          error={emailError}
          setFunc={setEmailFunc}
        />
        <InputItem
          title={"비밀번호"}
          icon={"lock"}
          type={"password"}
          error={passwordError}
          setFunc={setPasswordFunc}
        />
      </VStack>

      <Button backgroundColor={"#009FF6"} w={"30%"} onPress={goSignUp}>
        <Text fontFamily={"SUITE-Light"} color={"#fff"} fontSize={12}>
          회원가입
        </Text>
      </Button>

      <Center flex={1} w={"100%"}>
        <Text fontSize={14} fontFamily={"SUITE-Bold"} color={"#232323"}>
          간편 로그인
        </Text>
        <SnsButton />
      </Center>
    </Center>
  );
}
