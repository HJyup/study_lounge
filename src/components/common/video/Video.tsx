import React from 'react';
import Hls from 'hls.js';

import styles from './Video.module.scss';

interface VideoProps {
  source: string;
  hasControls: boolean;
}

const Video: React.FC<VideoProps> = ({ source, hasControls }) => {
  const [playbackRate, setPlaybackRate] = React.useState(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setPlaybackRate(playbackRate - 0.2);
    } else if (e.key === '.') {
      setPlaybackRate(playbackRate + 0.2);
    }
  };

  const handleTimeUpdate = () => {
    if (videoEl.current) {
      localStorage.setItem(source, videoEl.current.currentTime.toString());
    }
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
