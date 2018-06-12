import styled from "styled-components";
import { Dimensions } from "react-native";


export const ContentOption = styled.View`
  flex-direction: row;
  margin: 40px 0;
  align-items: center;
`;

export const BaseView = styled.View`
  flex: 1;
  padding: 10px;
`;

export const TopView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: ${props => props.justify || "center"};
  width: ${Dimensions.get("window").width - 55};
  background-color: ${props => props.color || "transparent"};
`;

export const BottonView = styled.View`
  flex: ${props => props.weight || 1};
`;

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  background: #9c27b0;
  padding: 16px;
  margin-top: 15px;
`;

export const TextInput = styled.TextInput`
  background: #ffffff;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextTitle = styled.Text`
  height: 80px;
  align-items: center;
  margin-top: 10px;
  font-size: 26px;
  color: ${props => props.color || "#ba68c8"};
  font-weight: bold;
  padding-left:20px;
`;

export const TextButton = styled.Text`
  align-items: center;
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`;

export const TouchableItem = styled.TouchableOpacity`
  background-color: #ffffff;
  align-items: center;
  padding: 20px;
  margin-top: 2px;
`;

export const ButtonCircle = styled.TouchableOpacity`
  background-color: #9C27B0;
  align-items: center;
  justify-content: center;
  border-radius:100px;
  width: 40px;
  height: 40px;
  border-width:0px;
`;

export const TxtSub = styled.Text`
  font-size: ${props => props.fsize || "16px"};
  color: ${props => props.color || "#ba68c8"};
  font-weight: bold;
  padding-bottom: 5px;
  padding-top: 5px;
`;

export const Buttons = styled.View`
    flex-direction:row;
    width:100%;
    justify-content:space-between
    padding:20px`;
