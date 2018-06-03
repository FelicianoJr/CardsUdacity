import React from "react";
import { Touchable, TextButton } from "../../util/style";
//import Icon from "react-native-vector-icons/FontAwesome";

const Button = ({ onpress, text, icon }) => {
  return (
    <Touchable onPress={onpress}>
      {/* {icon && <Icon name={icon} size={25} color="#9c27b0" />} */}
      <TextButton>{text}</TextButton>
    </Touchable>
  );
};

export default Button;
