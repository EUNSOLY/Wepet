import React from "react";
import { Dimensions } from "react-native";
import ImageBlurLoading from "react-native-image-blur-loading";

const imgWidth = Dimensions.get("window").width / 3;
const image = require("../assets/post.png");
export default function ImageComponent() {
  return (
    <ImageBlurLoading
      source={image}
      thumbnailSource={image}
      style={{ width: imgWidth, height: imgWidth }}
    />
  );
}
