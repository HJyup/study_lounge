import React from 'react';
import { useQuery } from 'react-query';
import { Alert } from '@mui/material';
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
      {isError ? (
        <Alert variant="filled" severity="error">
          Finding problems with uploading data - Check later!
        </Alert>
      ) : (
        !isLoading && (
          <div className={styles['card-course-container']}>{data?.id}</div>
        )
      )}
    </div>
  );
};

export default CoursePage;
