import React from 'react';
import Hls from 'hls.js';

import styles from './Video.module.scss';

interface VideoProps {
  source: string;
  hasControls: boolean;
}

const Video: React.FC<VideoProps> = ({ source, hasControls }) => {
  const [playbackRate, setPlaybackRate] = React.useState(1);
  const hls = new Hls();
  const videoEl = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    if (videoEl.current) {
      hls.attachMedia(videoEl.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(source);
      });
      const savedTime = localStorage.getItem(source);
      if (savedTime !== null) {
        videoEl.current.currentTime = parseFloat(savedTime);
      }
    }
  }, [hls, source]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLVideoElement>) => {
    if (e.key === ',') {
      if (playbackRate > 0.2) {
        setPlaybackRate(playbackRate - 0.2);
      }
    } else if (e.key === '.') {
      setPlaybackRate(playbackRate + 0.2);
    }
  };

  const handleTimeUpdate = () => {
    if (videoEl.current) {
      localStorage.setItem(source, videoEl.current.currentTime.toString());
    }
  };

  const handleRightCLick = (e: any) => {
    e.preventDefault();
    videoEl.current?.requestPictureInPicture();
  };

  React.useEffect(() => {
    if (videoEl.current) {
      videoEl.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className={styles['video']}>
      {hasControls ? (
        <video
          ref={videoEl}
          controls
          className={styles['video']}
          onKeyPress={handleKeyPress}
          onTimeUpdate={handleTimeUpdate}
          onContextMenu={handleRightCLick}
        />
      ) : (
        <video
          ref={videoEl}
          autoPlay={true}
          className={styles['video']}
          muted={true}
        />
      )}
    </div>
  );
};

export default Video;
