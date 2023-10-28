import express from "espress";
import TeacherService from "../services/TeacherService.js";

let router = express.Router();

router.post("/addTeacher", async (req, res)=>{
    const teacherModel = {
        name: req.body.name,
    }

    const addTeacher = await TeacherService.saveTeacher(TeacherModel);
    return res.status(200).json(addTeacher);
});

router.get("/getAllTeachers", async (req, res)=>{
    const allTeachers = await TeacherService.getAllTeachers();
    return res.status(200).json(allTeachers);
})

router.get("/Teacher/:id", async (req, res)=>{
    const TeacherById = await TeacherService.getTeacherById(req.params.id);
    return res.status(200).json(TeacherById);
})

router.delete("/deleteTeacher/:id", async (req, res)=>{
    const deleteTeacher = await TeacherService.deletTeacherById(req.params.id);
    return res.status(200).json(deleteTeacher);
})

router.put("/updateTeacher/:id", async (req, res)=>{
    const TeacherModel = {
        name: req.body.name,
    }

    const updateTeacher = await TeacherService.updateTeacherById(req.params.id ,TeacherModel);
    return res.status(200).json(updateTeacher);
});




export default router;