import evaluationRepository from "../repositories/EvaluationRepository.js";

const saveEvaluation = (evaluationModel) => {
    return evaluationRepository.saveEvaluation(evaluationModel)
}

const getEvaluationById = (id) => {
    return evaluationRepository.getEvaluationById(id)
}

const getAllEvaluations = () => {
    return evaluationRepository.getAllEvaluations()
}

const deletEvaluationById = (id) => {
    return evaluationRepository.deletEvaluationById(id)
}

const updateEvaluationById = (id, evaluationModel) => {
    return evaluationRepository.updateEvaluationById(id, evaluationModel)
}

const service = {
    saveEvaluation,
    getEvaluationById,
    getAllEvaluations,
    deletEvaluationById,
    updateEvaluationById
}

export default service;