import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Alert, AlertTitle, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';

import { CoursersAPI } from '@/api/CoursesApi/CoursersAPI';
import ListCourse from '@/components/common/list-course';
import MediaContentCourse from '@/components/common/media-content-course/MediaContentCourse';
import Navbar from '@/components/common/navbar';

import styles from './CoursePage.module.scss';

const CoursePage = () => {
  const [selectedLesson, setSelectedLesson] = useState(0);
  const router = useRouter();
  const id = router.query.courseid as string;
  const { isLoading, isError, data } = useQuery(
    [['courses'], id],
    () => CoursersAPI.getCourse(id),
    { retry: false, refetchOnWindowFocus: false },
  );
  return (
    <div className={styles['page-container']}>
      <Navbar text={data?.title} />
      {isLoading && <CircularProgress />}
      {isError ? (
        <Alert variant="filled" severity="error" className={'alert-error'}>
          Finding problems with uploading data - Check later!
        </Alert>
      ) : (
        !isLoading && (
          <div className={styles['card-course-container']}>
            <div className={styles['video-container']}>
              <MediaContentCourse
                title={data?.lessons[selectedLesson].title}
                courseDescription={data?.description}
                rating={data?.rating}
                launchDate={data?.launchDate}
                status={data?.status}
                skills={data?.meta.skills}
                videoLink={data?.lessons[selectedLesson].link}
              />
            </div>
            <div className={styles['information-container']}>
              <Alert severity="info" className={styles['alert']}>
                <AlertTitle>Use Video Shortcuts</AlertTitle>
                Use (,) and (.) to set video speed. Use Right Click to enter
                Picture in Picture mode.
              </Alert>
              <div className={styles['list-content-title']}>
                <p>Course Content</p>
              </div>
              {data?.lessons
                .sort((s1, s2) => s1.order - s2.order)
                .map((lesson, index) =>
                  lesson.status === 'unlocked' ? (
                    <ListCourse
                      key={index}
                      className={'list-content'}
                      order={lesson.order}
                      title={lesson.title}
                      duration={lesson.duration}
                      onClick={() => setSelectedLesson(lesson.order - 1)}
                    />
                  ) : (
                    <ListCourse
                      key={index}
                      className={'list-content-locked'}
                      order={lesson.order}
                      title={lesson.title}
                      duration={lesson.duration}
                    />
                  ),
                )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CoursePage;
