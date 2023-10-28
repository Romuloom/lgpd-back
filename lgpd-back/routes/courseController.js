import express from "espress";
import CourseService from "../services/CourseService.js"

let router = express.Router();


router.post("/addCourse", async (req, res)=>{
    const CourseModel = {
        name: req.body.name,
    }

    const addCourse = await CourseService.saveCourse(CourseModel);
    return res.status(200).json(addCourse);
});

router.get("/getAllCourses", async (req, res)=>{
    const allCourses = await CourseService.getAllCourses();
    return res.status(200).json(allCourses);
})

router.get("/Course/:id", async (req, res)=>{
    const CourseById = await CourseService.getCourseById(req.params.id);
    return res.status(200).json(CourseById);
})

router.delete("/deleteCourse/:id", async (req, res)=>{
    const deleteCourse = await CourseService.deletCourseById(req.params.id);
    return res.status(200).json(deleteCourse);
})

router.put("/updateCourse/:id", async (req, res)=>{
    const CourseModel = {
        name: req.body.name,
    }

    const updateCourse = await CourseService.updateCourseById(req.params.id ,CourseModel);
    return res.status(200).json(updateCourse);
});

export default router;