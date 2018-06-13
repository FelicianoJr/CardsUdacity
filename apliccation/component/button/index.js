import React from "react";
import { Touchable, TextButton } from "../../util/style";

const Button = ({ onpress, text, icon }) => {
  return (
    <Touchable onPress={onpress}>
     
      <TextButton>{text}</TextButton>
    </Touchable>
  );
};

export default Button;
