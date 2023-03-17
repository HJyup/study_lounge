import Navbar from "@/components/common/navbar";
import styles from './CoursePage.module.scss'
import {CircularProgress, Typography} from "@mui/material";
import {useQuery} from "react-query";
import {CoursersAPI} from "@/api/CoursesApi/CoursersAPI";
import {Card, Chip, Rating, Alert, Button} from "@mui/material";
const CoursePage = () => {
    const courseId = '352be3c6-848b-4c19-9e7d-54fe68fef183';
    const {isLoading: isLoadingCourses, isError: isErrorCourses, data: courses} = useQuery(
        ['courses'],
        () => CoursersAPI.getCourses(),
        {
            refetchOnWindowFocus: false,
            retry: false,
        },
    )
    return(
        <div className={styles['page-container']}>
            <Navbar/>
            {isLoadingCourses && <CircularProgress />}
            {isErrorCourses &&
                <Alert variant="filled" severity="error">
                Finding problems with uploading data - Check later!
                </Alert>}
            <div className={styles['card-container']}>
                {courses?.courses.map((course, index) => {
                    return(
                        <Card key={index} className={styles['card']}>
                            <img src={course.previewImageLink + '/cover.webp'} />
                            <Typography variant="subtitle1" className={styles['card-title']}>
                                {course.title}
                            </Typography>
                            <div className={styles['card-info']}>
                                <Chip label={course.tags} color="primary" variant="outlined"/>
                                <Rating name="Course Rating" value={course.rating} readOnly />
                            </div>
                            <Typography variant="body1" className={styles['card-description']}>
                                {course.description}
                            </Typography>
                            <Typography variant="body2">
                                {course.meta.skills}
                            </Typography>
                            <Button variant="text" className={styles['card-button']}>Explore Course</Button>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default CoursePage;