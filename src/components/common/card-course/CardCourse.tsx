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
        <Typography variant="subtitle1" className={styles['title']}>
          {title}
        </Typography>
        <div className={styles['info']}>
          <Chip
            label={tags}
            color="primary"
            variant="outlined"
            className={styles['chip-desktop']}
          />
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
            className={styles['rating-desktop']}
          />
          <Rating
            name="Course Rating"
            value={rating}
            readOnly
            size={'small'}
            className={styles['rating-mobile']}
          />
        </div>
        <Typography variant="body1" className={styles['description']}>
          {description}
        </Typography>
        <Typography variant="body2" className={styles['skills']}>
          {skills?.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </Typography>
      </Card>
    </Link>
  );
};

export default CardCourse;
