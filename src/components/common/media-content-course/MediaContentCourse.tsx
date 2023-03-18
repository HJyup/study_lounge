import React from 'react';

import styles from './MediaContentCourse.module.scss';

export interface MediaContentCourseProps {
  image?: string;
  title?: string;
  order?: number;
}

const MediaContentCourse: React.FC<MediaContentCourseProps> = ({
  image,
  title,
  order,
}) => (
  <div className={styles['main-container']}>
    {/*<img*/}
    {/*  src={image + '/' + order + '.webp'}*/}
    {/*  className={styles['image']}*/}
    {/*  alt={'Course preview image'}*/}
    {/*/>*/}
    {title}
  </div>
);

export default MediaContentCourse;
