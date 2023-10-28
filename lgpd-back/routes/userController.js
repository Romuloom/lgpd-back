import express from "espress";
import UserService from "../services/UserService.js"

let router = express.Router();

router.post("/addUser", async (req, res)=>{
    const userModel = {
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        gender:req.body.gender
    }

    const addUser = await UserService.saveUser(userModel);
    return res.status(200).json(addUser);
});

router.get("/getAllUsers", async (req, res)=>{
    const allUsers = await UserService.getAllUsers();
    return res.status(200).json(allUsers);
})

router.get("/user/:id", async (req, res)=>{
    const userById = await UserService.getUserById(req.params.id);
    return res.status(200).json(userById);
})

router.delete("/deleteUser/:id", async (req, res)=>{
    const deleteUser = await UserService.deletUserById(req.params.id);
    return res.status(200).json(deleteUser);
})

router.put("/updateUser/:id", async (req, res)=>{
    const userModel = {
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        gender:req.body.gender
    }

    const updateUser = await UserService.updateUserById(req.params.id ,userModel);
    return res.status(200).json(addUser);
});


export default router;
