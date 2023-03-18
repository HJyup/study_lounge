import React from 'react';
import { Button, Card, Chip, Rating, Typography } from '@mui/material';

import styles from './Card.module.scss';
interface CardCourseProps {
  image: string;
  title: string;
  tags: string;
  rating: number;
  description: string;
  skills: string[];
}
const CardCourse: React.FC<CardCourseProps> = ({
  image,
  title,
  tags,
  rating,
  description,
  skills,
}) => {
  return (
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
        <Chip label={tags} color="primary" variant="outlined" />
        <Rating name="Course Rating" value={rating} readOnly />
      </div>
      <Typography variant="body1" className={styles['description']}>
        {description}
      </Typography>
      <Typography variant="body2" className={styles['skills']}>
        {skills?.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </Typography>
      <Button variant="text" className={styles['button']}>
        Explore Course
      </Button>
    </Card>
  );
};

export default CardCourse;
