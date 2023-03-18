import React from 'react';
import { useQuery } from 'react-query';
import { TimelapseOutlined } from '@mui/icons-material';
import { Alert, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';

import { CoursersAPI } from '@/api/CoursesApi/CoursersAPI';
import Navbar from '@/components/common/navbar';

import styles from './CoursePage.module.scss';

const CoursePage = () => {
  const router = useRouter();
  const id = router.query.courseid as string;
  const { isLoading, isError, data } = useQuery(
    [['courses'], id],
    () => CoursersAPI.getCourse(id),
    { retry: false },
  );
  return (
    <div className={styles['page-container']}>
      <Navbar />
      {isLoading && <CircularProgress />}
      {isError ? (
        <Alert variant="filled" severity="error">
          Finding problems with uploading data - Check later!
        </Alert>
      ) : (
        !isLoading && (
          <div className={styles['card-course-container']}>
            <div className={styles['video-container']}>
              <img
                src={data?.previewImageLink + '/cover.webp'}
                className={styles['image']}
                alt={'Course preview image'}
              />
              {data?.lessons[0].title}
            </div>
            <div className={styles['information-container']}>
              <div className={styles['list-content-title']}>
                <p>Course Content</p>
              </div>
              {data?.lessons
                .sort((s1, s2) => s1.order - s2.order)
                .map((lesson, index) => (
                  <div key={index} className={styles['list-content']}>
                    <p>{lesson.order + '. ' + lesson.title}</p>
                    <div className={styles['duration']}>
                      <TimelapseOutlined color={'disabled'} />
                      {lesson.duration + 'min'}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CoursePage;
