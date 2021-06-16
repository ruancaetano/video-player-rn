import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #000;
  ${props =>
    props.fullscreen &&
    css`
      width: ${parseInt(props.viewportWidth)}px;
      height: ${parseInt(props.viewportHeight)}px;
    `}
`;
