import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CustomHeaderBurron = (props) => {
  return (
    <FontAwesome.Button
      name="star"
      backgroundColor="#3b5998"
      onPress={() => {
        alert("Hi There");
      }}
    >
      Title
    </FontAwesome.Button>
  );
};

export default CustomHeaderBurron;
