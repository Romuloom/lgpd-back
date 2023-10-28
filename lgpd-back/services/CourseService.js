import courseRepository from "../repositories/CourseRepository.js";

const saveCourse = (courseModel) => {
    return courseRepository.saveCourse(courseModel)
}

const getCourseById = (id) => {
    return courseRepository.getCourseById(id)
}

const getAllCourses = () => {
    return courseRepository.getAllCourses()
}

const deletCourseById = (id) => {
    return courseRepository.deletCourseById(id)
}

const updateCourseById = (id, courseModel) => {
    return courseRepository.updateCourseById(id, courseModel)
}


const service = {
    saveCourse,
    getCourseById,
    getAllCourses,
    deletCourseById,
    updateCourseById
}

export default service;