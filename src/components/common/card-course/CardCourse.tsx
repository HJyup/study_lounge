import React from 'react';
import { Card, Chip, Rating, Typography } from '@mui/material';
import Link from 'next/link';

import styles from './Card.module.scss';
interface CardCourseProps {
  image: string;
  courseId: string;
  title: string;
  tags: string;
  rating: number;
  description: string;
  skills: string[];
}
const CardCourse: React.FC<CardCourseProps> = ({
  image,
  courseId,
  title,
  tags,
  rating,
  description,
  skills,
}) => {
  return (
    <Link href={`/course/${courseId}`} className={styles['link']}>
      <Card className={styles['card']}>
        <img
          src={image + '/cover.webp'}
          className={styles['image']}
          alt={'Course preview image'}
        />
        <div className={styles['information']}>
          <Typography variant="subtitle1" className={styles['title']}>
            {title}
          </Typography>
          <div className={styles['tags']}>
            {/*Desktop Version*/}
            <Chip
              label={tags}
              color="primary"
              variant="outlined"
              className={styles['chip-desktop']}
            />
            <Rating
              name="Course Rating"
              value={rating}
              readOnly
              className={styles['rating-desktop']}
            />
            {/*Mobile Version*/}
            <Chip
              label={tags}
              color="primary"
              variant="outlined"
              size={'small'}
              className={styles['chip-mobile']}
            />
            <Rating
              name="Course Rating"
              value={rating}
              readOnly
              size={'small'}
              className={styles['rating-mobile']}
            />
          </div>
          <div className={styles['description']}>{description}</div>
          <div className={styles['skills']}>
            {skills?.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CardCourse;
