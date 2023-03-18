import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress, Typography } from '@mui/material';
import { Alert } from '@mui/material';
import { Pagination } from '@mui/material';

import { CoursersAPI } from '@/api/CoursesApi/CoursersAPI';
import CardCourse from '@/components/common/card-course';
import Navbar from '@/components/common/navbar';

import styles from './CoursePage.module.scss';
const CoursePage = () => {
  const [pagesCount, setPagesCount] = useState(0);
  const {
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
    data: courses,
  } = useQuery(['courses'], () => CoursersAPI.getCourses(), { retry: false });
  const coursesPerElement = 10;
  const elementsVisited = pagesCount * coursesPerElement;
  const pagesNumber = Math.ceil(courses?.courses.length / coursesPerElement);
  const handleChangeElement = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPagesCount(value - 1);
  };
  const coursesSliced = courses?.courses
    .slice(elementsVisited, elementsVisited + coursesPerElement)
    .map((course, index) => (
      <CardCourse
        key={index}
        title={course.title}
        description={course.description}
        image={course.previewImageLink}
        rating={course.rating}
        skills={course.meta.skills}
        tags={course.tags}
      />
    ));
  return (
    <div className={styles['page-container']}>
      <Navbar />
      {isLoadingCourses && <CircularProgress />}
      {isErrorCourses ? (
        <Alert variant="filled" severity="error">
          Finding problems with uploading data - Check later!
        </Alert>
      ) : (
        !isLoadingCourses && (
          <div className={styles['card-course-container']}>
            <div className={styles['page-information']}>
              <Typography variant={'h6'}>
                Courses
                <p>{courses?.courses.length} results in Study Lounge</p>
              </Typography>
              <Pagination
                count={pagesNumber}
                color="primary"
                size={'small'}
                onChange={handleChangeElement}
              />
            </div>
            {coursesSliced}
          </div>
        )
      )}
    </div>
  );
};

export default CoursePage;
