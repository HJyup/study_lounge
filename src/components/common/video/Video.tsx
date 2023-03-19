import React from 'react';
import Hls from 'hls.js';

import styles from './Video.module.scss';

interface VideoProps {
  source: string;
  hasControls: boolean;
}
const Video: React.FC<VideoProps> = ({ source, hasControls }) => {
  const hls = new Hls();
  const videoEl = React.useRef(null);

  React.useEffect(() => {
    if (videoEl.current) {
      hls.attachMedia(videoEl.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(source);
      });
    }
  });

  return (
    <div className={styles['video']}>
      {hasControls ? (
        <video ref={videoEl} controls className={styles['video']} />
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
