import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress, Typography } from '@mui/material';
import { Alert } from '@mui/material';
import { Pagination } from '@mui/material';

import { CoursersAPI } from '@/api/CoursesApi/CoursersAPI';
import CardCourse from '@/components/common/card-course';
import Navbar from '@/components/common/navbar';

import styles from './CoursesPage.module.scss';
const CoursesPage = () => {
  const [pagesCount, setPagesCount] = useState(0);
  const {
    isLoading: isLoadingCourses,
    isError: isErrorCourses,
    data: courses,
  } = useQuery(['courses'], () => CoursersAPI.getCourses(), {
    retry: false,
    refetchOnWindowFocus: false,
  });
  const coursesPerElement = 10;
  const elementsVisited = pagesCount * coursesPerElement;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
        courseId={course.id}
        title={course.title}
        description={course.description}
        image={course.previewImageLink}
        rating={course.rating}
        skills={course.meta.skills}
        tags={course.tags}
        previewVideo={course.meta.courseVideoPreview.link}
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
                className={styles['pagination']}
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

export default CoursesPage;
