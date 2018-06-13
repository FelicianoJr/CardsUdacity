import React from "react";
import { Touchable, TextButton } from "../../component/styled";

const Button = ({ onpress, text, icon }) => {
  return (
    <Touchable onPress={onpress}>
     
      <TextButton>{text}</TextButton>
    </Touchable>
  );
};

export default Button;
