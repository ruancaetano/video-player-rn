import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Button = styled.TouchableOpacity``;

export const SelectorContainer = styled.View`
  position: absolute;
  background: #28a745;
  width: 100px;
  padding: 5px;
  z-index: 1;
  bottom: 42px;

  padding: 0;
`;

export const SelectorButton = styled(TouchableOpacity)`
  padding: 10px 5px;
  z-index: 2;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
`;

export const SelectorButtonText = styled.Text``;
