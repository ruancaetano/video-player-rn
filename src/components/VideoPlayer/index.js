import React, {useState, useRef} from 'react';
import {Dimensions} from 'react-native';
import Video from 'react-native-video';

import ControllBar from './ControllBar';

import * as Styles from './styles';
const VideoPlayer = () => {
  const playerRef = useRef();

  const [paused, setPaused] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentSpeedRate, setCurrentSpeedRate] = useState(1);

  const viewportWidth = Dimensions.get('screen').width;

  const handleLoad = ({duration}) => {
    setVideoDuration(duration);
  };

  const handlePause = () => {
    setPaused(prevState => !prevState);
  };

  const handleSlide = newPositionPercent => {
    playerRef.current.seek(videoDuration * newPositionPercent);
  };

  const handleProgress = ({currentTime: newPosition}) => {
    setCurrentPosition(newPosition);
  };

  const handleChangeSpeed = newSpeed => {
    setCurrentSpeedRate(newSpeed);
  };

  return (
    <Styles.Container>
      <Video
        paused={paused}
        ref={playerRef}
        source={{
          uri: 'https://player.vimeo.com/external/508896480.m3u8?s=e6b2599abce2801965869e8b07c27d0c423add2e',
        }}
        style={{
          width: viewportWidth,
          minHeight: viewportWidth * 0.5625,
        }}
        onLoad={handleLoad}
        onProgress={handleProgress}
        rate={currentSpeedRate}
      />
      <ControllBar
        paused={paused}
        currentPosition={currentPosition}
        videoDuration={videoDuration}
        onPause={handlePause}
        onSlide={handleSlide}
        onChangeSpeed={handleChangeSpeed}
      />
    </Styles.Container>
  );
};

export default VideoPlayer;
