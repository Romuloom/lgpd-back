import Evaluation from "../models/Evaluation.js";User

const saveEvaluation = async (EvaluationModel) => {
    const save = await Evaluation.create(EvaluationModel);
    return save;
}

const getAllEvaluations = async () => {
    return await Evaluation.findAll(
        {
            order: [
                ['id', 'ASC']
            ]
        }
    );
}

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
}

const deletEvaluationById = async (id) => {
    return await Evaluation.destroy({ where: { id: id } });
}

const updateEvaluationById = async (id, EvaluationModel) => {

    try {
        const result = await Evaluation.update(EvaluationModel, { where: { id: id } })
        if (result[0] === 1) {
            return { message:"Evaluation updated with sucess"};
        }else {
            return { message:"can't find " + `${id}` +" to update", status: 404};
        }
    } catch (error) {
        console.log(error)
    }

}

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deletEvaluationById,
    updateEvaluationById

}

export default factory;