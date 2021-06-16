import React, {useState} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as Styles from './styles';

const SpeedButton = ({onChangeSpeed}) => {
  const [showSelector, setShowSelector] = useState(false);

  const handleButtonPress = () => {
    setShowSelector(prevState => !prevState);
  };

  const handleSpeedSelect = newSpeed => {
    onChangeSpeed(newSpeed);
    setShowSelector(false);
  };

  return (
    <>
      <Styles.Button onPress={handleButtonPress}>
        <Icon name={'speed'} color="#fff" size={30} />
      </Styles.Button>

      {showSelector && (
        <Styles.SelectorContainer>
          <Styles.SelectorButton onPress={() => handleSpeedSelect(0.5)}>
            <Text>0.5x</Text>
          </Styles.SelectorButton>
          <Styles.SelectorButton onPress={() => handleSpeedSelect(1)}>
            <Text>1.0x</Text>
          </Styles.SelectorButton>
          <Styles.SelectorButton onPress={() => handleSpeedSelect(2)}>
            <Text>2.0x</Text>
          </Styles.SelectorButton>
        </Styles.SelectorContainer>
      )}
    </>
  );
};

export default SpeedButton;
