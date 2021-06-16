import React, {useState, useRef, useEffect} from 'react';
import {Dimensions, Platform} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';

import ControllBar from './ControllBar';

import * as Styles from './styles';

const CONTROLL_BAR_HEIGHT = 50;
const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? 25 : 0;
const PROPOTION_RATE_MULTIPLIER = 0.5625;

const VideoPlayer = () => {
  const playerRef = useRef();

  const [paused, setPaused] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [currentSpeedRate, setCurrentSpeedRate] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(
    Dimensions.get('window').width,
  );
  const [viewportHeight, setViewportHeight] = useState(
    Dimensions.get('window').height,
  );

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

  const handleFullscreen = () => {
    const newFullscreen = !fullscreen;
    setFullscreen(newFullscreen);

    if (newFullscreen) {
      Orientation.lockToLandscapeLeft();
    } else {
      Orientation.lockToPortrait();
    }
  };

  const onDimensionsChange = ({window}) => {
    setViewportWidth(window.width);
    setViewportHeight(window.height);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onDimensionsChange);
    return () => {
      Dimensions.removeEventListener('change', onDimensionsChange);
    };
  });

  const videoHeight = Math.floor(
    !fullscreen
      ? viewportWidth * PROPOTION_RATE_MULTIPLIER
      : viewportHeight - CONTROLL_BAR_HEIGHT - STATUS_BAR_HEIGHT,
  );
  return (
    <Styles.Container
      fullscreen={fullscreen}
      viewportWidth={viewportWidth}
      viewportHeight={viewportHeight}>
      <Video
        resizeMode="contain"
        paused={paused}
        ref={playerRef}
        source={{
          uri: 'https://player.vimeo.com/external/508896480.m3u8?s=e6b2599abce2801965869e8b07c27d0c423add2e',
        }}
        style={{
          width: parseInt(viewportWidth),
          height: parseInt(videoHeight),
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
        onFullscreen={handleFullscreen}
        fullscreen={fullscreen}
      />
    </Styles.Container>
  );
};

export default VideoPlayer;
