import React from "react";
import { StyleSheet } from "react-native";
import { VStack, HStack, Text, Box, Pressable, ScrollView } from "native-base";
import ImageBlurLoading from "react-native-image-blur-loading";

export default function AnimalList({ item, navigation, route }) {
  const goDetail = () => {
    navigation.navigate("AnimalDetailPage", { content: item });
  };
  return (
    <Pressable onPress={goDetail}>
      <VStack my={2} px={2}>
        <HStack>
          <ImageBlurLoading
            thumbnailSource={{ uri: item.image }}
            source={{ uri: item.image }}
            style={styles.image}
          />
          <Box px={2} overflow={"hidden"} w={"100%"}>
            <Text color={"#232323"} fontFamily={"SUITE-Bold"} w={"80%"}>
              {item.name}
            </Text>
            <Text color={"#232323"} fontFamily={"SUITE-Light"}>
              {item.adrees}
            </Text>
            <ScrollView w={"80%"} horizontal={true}>
              {item.comment.map((item, i) => {
                return (
                  <Text key={i} color={"#C8C8C8"} fontFamily={"SUITE-Light"}>
                    {item}
                  </Text>
                );
              })}
            </ScrollView>
          </Box>
        </HStack>
      </VStack>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
});
