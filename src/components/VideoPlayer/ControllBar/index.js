import React from 'react';

import PlayButton from '../PlayButton';
import FullscreenButton from '../FullscreenButton';
import ProgressSlider from '../ProgressSlider';
import SpeedButton from '../SpeedButton';

import * as Styles from './styles';

const ControllBar = ({
  onPause,
  paused,
  videoDuration,
  currentPosition,
  onSlide,
  onChangeSpeed,
  onFullscreen,
  fullscreen,
}) => {
  return (
    <Styles.Container>
      <Styles.LeftBlock>
        <PlayButton onPress={onPause} paused={paused} />
      </Styles.LeftBlock>

      <Styles.MiddleBlock>
        <ProgressSlider
          currentPosition={
            videoDuration > 0 ? currentPosition / videoDuration : 0
          }
          onSlide={onSlide}
        />
      </Styles.MiddleBlock>

      <Styles.RightBlock>
        <SpeedButton onChangeSpeed={onChangeSpeed} />

        <FullscreenButton onPress={onFullscreen} fullscreen={fullscreen} />
      </Styles.RightBlock>
    </Styles.Container>
  );
};

export default ControllBar;
