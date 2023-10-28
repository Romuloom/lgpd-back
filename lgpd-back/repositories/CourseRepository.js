import Course from "../models/Course.js";

const saveCourse = async (CourseModel) => {
    const save = await Course.create(CourseModel);
    return save;
}

const getAllCourses = async () => {
    return await Course.findAll(
        {
            order: [
                ['id', 'ASC']
            ]
        }
    );
}

const getCourseById = async (id) => {
    return await Course.findByPk(id);
}

const deletCourseById = async (id) => {
    return await Course.destroy({ where: { id: id } });
}

const updateCourseById = async (id, CourseModel) => {

    try {
        const result = await Course.update(CourseModel, { where: { id: id } })
        if (result[0] === 1) {
            return { message:"Course updated with sucess"};
        }else {
            return { message:"can't find " + `${id}` +" to update", status: 404};
        }
    } catch (error) {
        console.log(error)
    }

}

const factory = {
    saveCourse,
    getAllCourses,
    getCourseById,
    deletCourseById,
    updateCourseById

}

export default factory;