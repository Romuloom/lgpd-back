import teacherRepository from "../repositories/TeacherRepository.js";

const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher(teacherModel)
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(id)
}

const getAllTeachers = () => {
    return teacherRepository.getAllTeachers()
}

const deletTeacherById = (id) => {
    return teacherRepository.deletTeacherById(id)
}

const updateTeacherById = (id, teacherModel) => {
    return teacherRepository.updateTeacherById(id, teacherModel)
}

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeachers,
    getAllTeachers,
    deletTeacherById,
    updateTeacherById
}

export default service;