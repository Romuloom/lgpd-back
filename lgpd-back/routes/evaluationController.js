import express from "espress";
import EvaluationService from "../services/EvaluationService.js"

let router = express.Router();

router.post("/addEvaluation", async (req, res)=>{
    const EvaluationModel = {
        concept: req.body.concept,
    }

    const addEvaluation = await EvaluationService.saveEvaluation(EvaluationModel);
    return res.status(200).json(addEvaluation);
});

router.get("/getAllEvaluations", async (req, res)=>{
    const allEvaluations = await EvaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluations);
})

router.get("/Evaluation/:id", async (req, res)=>{
    const EvaluationById = await EvaluationService.getEvaluationById(req.params.id);
    return res.status(200).json(EvaluationById);
})

router.delete("/deleteEvaluation/:id", async (req, res)=>{
    const deleteEvaluation = await EvaluationService.deletEvaluationById(req.params.id);
    return res.status(200).json(deleteEvaluation);
})

router.put("/updateEvaluation/:id", async (req, res)=>{
    const EvaluationModel = {
        concept: req.body.concept,
    }

    const updateEvaluation = await EvaluationService.updateEvaluationById(req.params.id ,EvaluationModel);
    return res.status(200).json(updateEvaluation);
});

export default router;
