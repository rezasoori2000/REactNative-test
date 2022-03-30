import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HeaderButton = (props) => {
  return (
    <FontAwesome.Button
      name={props.iconName}
      backgroundColor="#3b5998"
      onPress={props.click}
    >
      {props.title}
    </FontAwesome.Button>
  );
};

export default HeaderButton;
