import React, { useState } from 'react';
import { Card, Chip, Rating } from '@mui/material';
import Link from 'next/link';

import Video from '@/components/common/video';

import styles from './CardCourse.module.scss';
export interface CardCourseProps {
  image: string;
  courseId: string;
  title: string;
  tags: string;
  rating: number;
  description: string;
  skills: string[];
  previewVideo: string;
  lessonsCount: number;
}
const CardCourse: React.FC<CardCourseProps> = ({
  image,
  courseId,
  title,
  tags,
  rating,
  description,
  skills,
  previewVideo,
  lessonsCount,
}) => {
  const [isVideo, setIsVideo] = useState(false);
  const handleMouseEnter = () => {
    if (isVideo) {
      return <Video source={previewVideo} hasControls={false} />;
    }
  };

  return (
    <Link href={`/course/${courseId}`} className={styles['link']}>
      <Card
        className={styles['card']}
        onMouseEnter={() => setIsVideo(true)}
        onMouseLeave={() => setIsVideo(false)}
      >
        <img
          src={image + '/cover.webp'}
          className={styles['image']}
          alt={'Course preview image'}
        />
        <div className={styles['video']}>{handleMouseEnter()}</div>
        <div className={styles['information']}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['tags']}>
            <Chip
              label={tags}
              color="primary"
              variant="outlined"
              className={styles['chip']}
            />
            <Rating
              name="Course Rating"
              value={rating}
              readOnly
              className={styles['rating']}
              precision={0.5}
            />
          </div>
          <div className={styles['description']}>{description}</div>
          <div className={styles['skills']}>
            {skills?.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
        <div className={styles['lessons-count']}>Lessons: {lessonsCount}</div>
      </Card>
    </Link>
  );
};

export default CardCourse;
