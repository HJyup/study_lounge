import React from 'react';
import { TimelapseOutlined } from '@mui/icons-material';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';

import styles from './ListCourse.module.scss';

interface ListCourseProps extends React.ComponentPropsWithoutRef<'div'> {
  order: number;
  title: string;
  duration: number;
  className: string;
}

const ListCourse: React.FC<ListCourseProps> = ({
  order,
  title,
  duration,
  className,
  ...rest
}) => {
  return (
    <div className={styles[className]} {...rest}>
      <div className={styles['title']}>
        <p>{order + '. ' + title}</p>
        {className === 'list-content-locked' && (
          <LockClockOutlinedIcon color={'disabled'} fontSize={'small'} />
        )}
      </div>
      <div className={styles['duration']}>
        <TimelapseOutlined color={'disabled'} fontSize={'small'} />
        {(duration / 60).toFixed(1) + ' minutes to complete'}
      </div>
    </div>
  );
};

export default ListCourse;
