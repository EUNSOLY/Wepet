import React from "react";
import {
  Text,
  Center,
  Box,
  ScrollView,
  Pressable,
  Input,
  TextArea,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import ImageBlurLoading from "react-native-image-blur-loading";
import HeaderComponent from "../components/HeaderComponent";
import { auth, db, storage } from "../config/fireBase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useState, useEffect } from "react";

const tempImage =
  "https://firebasestorage.googleapis.com/v0/b/wepet-2c5d8.appspot.com/o/Ellipse%204.png?alt=media&token=355053e9-5f90-4eb6-a527-9cf16529857b&_gl=1*18y8ght*_ga*MjQyNTU5MTUuMTY4NTkyOTY5Ng..*_ga_CW55HF8NVT*MTY4NTk0MzY3MC4yLjEuMTY4NTk0NTUzMy4wLjAuMA..";
export default function WritingPage({ navigation, route }) {
  console.log();
  const [image, setImage] = useState(tempImage); // 게시글 이미지
  const [imageUri, setImageUri] = useState(""); // 미리보기 이미지
  const [title, setTitle] = useState(""); // 게시글 제목
  const [titleError, setTitleError] = useState(""); // 게시글 제목 에러
  const [content, setContent] = useState(""); // 게시글 내용
  const [contentError, setContentError] = useState(""); // 게시글 내용 에러
  // 로딩 상태관리
  const [process, setProcess] = useState(false);

  
  // 현재 유저 정보 가져오기
  const user = auth.currentUser;
  console.log("유저확인중",user);
  if (user) {
    console.log("현재유저 ---", user.uid);
  } else {
    console.log("글쓰기페이지유저없음");
  }

  const upload = async () => {
    let date = new Date(); // 현재 시간 저장
    if (title.trim() === "") {
      setTitleError("제목을 입력해주세요.");
      return false;
    } else {
      setTitleError("");
    }
    if (content.trim() === "") {
      setContentError("내용을 입력해주세요.");
      return false;
    } else {
      setContentError("");
    }
    console.log("업로드 준비중");
    setProcess(true);

    let data = {
      // 게시글 데이터
      title: title,
      author: user.email,
      desc: content,
      date: date.getTime(),
      uid: user.uid,
      image: image,
    };

    // 이미지 업로드 함수 실행
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const imageUrl = await imageUpload(blob, data.date);
    data.image = imageUrl;

    let result = addDiary(data);
    if (result) {
      // Alert.alert("게시글 등록 완료");
      console.log("게시글 등록 완료");
      setProcess(false);
      setImageUri("");
      setTitle("");
      setContent("");
      setImage(tempImage);
      navigation.navigate("MyPage");
    }
  };

  async function imageUpload(blob, date) {
    const storageRef = ref(storage, "diary/" + date);
    const snapshot = await uploadBytes(storageRef, blob);
    const imageUrl = await getDownloadURL(snapshot.ref);
    blob.close();
    return imageUrl;
  }

  async function addDiary(content) {
    try {
      const userRef = doc(db, "users", content.uid);
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        //해당 사용자 문서가 존재하면
        const userData = userDoc.data();
        console.log("입력될 닉네임 ", userData.nickName);
        content.author = userData.nickName;
        await setDoc(doc(db, "diary", `${content.date}D`), content);
        return true;
      } else {
        console.log("해당 사용자 문서가 존재하지 않습니다.");
        return false;
      }
    } catch (e) {
      console.log(err.message);
      alert("글 작성에 문제가 있습니다!", err.message);
      return false;
    }
  }

  // 이미지피커 함수
  useEffect(() => {
    getPermission();
  }, []);
  const getPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("카메라 권한을 허용해주세요.");
      }
    }
  };

  const pickImage = async () => {
    console.log("이미지 선택 함수 실행");
    try {
      let results = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9], //이미지 비율
        quality: 1, //이미지 퀄리티
      });

      if (!results.canceled && results !== null) {
        // 이미지 선택 취소가 아닐경우
        const imageData = results.assets[0];
        getImageUri(imageData);
      } else {
        setImage(tempImage);
        setImageUri("");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getImageUri = async (imageData) => {
    setImageUri(imageData.uri);
  };

  return (
    <ScrollView backgroundColor={"#fff"}>
      <HeaderComponent navigation={navigation} route={route} />
      <Center p={4}>
        <Box w={"100%"}>
          <Text fontSize={14} fontFamily={"SUITE-Bold"} color={"#7DC9FD"}>
            나만 보기 아까운 울애기 자랑하기~
          </Text>
        </Box>
        {imageUri === "" ? (
          <Pressable
            borderWidth={1}
            borderColor={"#c8c8c8c8"}
            w={"100%"}
            h={150}
            borderRadius={10}
            mt={4}
            mb={4}
            justifyContent={"center"}
            onPress={pickImage}
          >
            <Text color={"#c8c8c8c8"} fontSize={35} textAlign={"center"}>
              +
            </Text>
          </Pressable>
        ) : (
          <Box
            w={"100%"}
            h={150}
            borderRadius={10}
            mt={4}
            mb={4}
            borderWidth={2}
            borderColor={"#999"}
            borderStyle={"dotted"}
            overflow="hidden"
          >
            <ImageBlurLoading
              withIndicator
              thumbnailSource={{ uri: imageUri }}
              source={{ uri: imageUri }}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        )}

        <Input
          placeholder="제목을 입력해세요"
          fontSize={14}
          borderRadius={10}
          mb={4}
          onChangeText={(text) => setTitle(text)}
          value={title}
        />

        <TextArea
          onChangeText={(text) => setContent(text)}
          value={content}
          borderRadius={10}
          h={150}
          placeholder="내용을 입력해세요"
        />
        <Pressable
          onPress={upload}
          w={120}
          py={2}
          my={8}
          backgroundColor={"#7DC9FD"}
        >
          <Text
            fontFamily={"SUITE-Bold"}
            fontSize={14}
            color={"#fff"}
            textAlign={"center"}
          >
            등록
          </Text>
        </Pressable>
      </Center>
    </ScrollView>
  );
}
