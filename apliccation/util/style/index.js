import styled from "styled-components";
import { Dimensions } from "react-native";

export const Icone = styled.View`
  padding: 8px;
`;

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
  justify-content: center;
`;

export const BottonView = styled.View`
  flex:  ${(props) => props.weight || 1};;
`;

export const Touchable = styled.TouchableOpacity`
  align-items: center;
  background: #9C27B0;
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
  color: #ba68c8;
  font-weight: bold;
  
`;

export const TextButton = styled.Text`
  align-items: center;
  font-size: 20px;
  color: #FFFFFF;
  font-weight: bold;
`;

export const TouchableItem = styled.TouchableOpacity`
  background-color: #FFFFFF;
  align-items: center;
  padding: 20px;
  margin-top: 2px;
`;

export const TxtSub = styled.Text`
  font-size:  ${(props) => props.fsize || '16px'};
  color: #ba68c8;
  font-weight: bold;
  padding-bottom:5px;
`;


