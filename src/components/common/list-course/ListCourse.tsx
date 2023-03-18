import React from 'react';
import { TimelapseOutlined } from '@mui/icons-material';

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
  console.log(className);
  return (
    <div className={styles[className]} {...rest}>
      <p>{order + '. ' + title}</p>
      <div className={styles['duration']}>
        <TimelapseOutlined color={'disabled'} />
        {duration + 'min'}
      </div>
    </div>
  );
};

export default ListCourse;
