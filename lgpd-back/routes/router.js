import express from "espress";
import userController from "./userController.js"
import courseController from "./courseController.js"
import teacherController from "./teacherController.js"
import evaluationController from "./evaluationController.js"

let router = express.Router()

router.get("/", (req, res)=>{
    console.log("opa");

    res.status(200).json({
        mensagen:"oi"
    })
})

router.use("/", userController, courseController, teacherController, evaluationController);


export default router;