import React from 'react';
import { Chip, Rating } from '@mui/material';

import Video from '@/components/common/video';

import styles from './MediaContentCourse.module.scss';

export interface MediaContentCourseProps {
  title?: string;
  courseDescription?: string;
  rating?: number;
  launchDate?: Date;
  status?: string;
  skills?: string[];
  videoLink?: string;
}

const MediaContentCourse: React.FC<MediaContentCourseProps> = ({
  title,
  courseDescription,
  rating,
  launchDate,
  status,
  skills,
  videoLink,
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const date = new Date(launchDate);
  const stringDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
  return (
    <div className={styles['main-container']}>
      {videoLink && <Video source={videoLink} hasControls={true} />}
      <p className={styles['title']}>{title}</p>
      <p className={styles['description']}>{courseDescription}</p>
      <div className={styles['course-information']}>
        <div className={styles['rating']}>
          <Rating value={rating} precision={0.5} size="large" readOnly />
          <div className={styles['course-rating']}>Course Rating</div>
        </div>
        <div className={styles['skills']}>
          {skills?.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>
        <div className={styles['date-and-status']}>
          <div>{'Launch date: ' + stringDate}</div>
          <div className={styles['status']}>
            {'Status:'}
            <Chip
              size={'small'}
              label={status}
              variant={'outlined'}
              color={'primary'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaContentCourse;
