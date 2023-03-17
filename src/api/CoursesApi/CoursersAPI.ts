import {GetCourseDTO, GetCoursersDTO} from "@/api/CoursesApi/getCoursersDTO";
import {client} from "@/api/CoursesApi/instance";
import {getAuthorizationHeader} from "@/api/CoursesApi/getAuthorizationHeader";

export class CoursersAPI {

    static async getCourses(): Promise<GetCoursersDTO> {
        const { data } = await client.get(
            "/core/preview-courses",
            getAuthorizationHeader(),
        );
        return data;
    }

    static async getCourse(courseId: string): Promise<GetCourseDTO> {
        const { data } = await client.get(
            `/core/preview-courses/${courseId}`,
            getAuthorizationHeader(),
        );
        return data;
    }
}
