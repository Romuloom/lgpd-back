import userRepository from "../repositories/UserRepository.js";

const saveUser = (userModel) => {
    return userRepository.saveUser(userModel)
}

const getUserById = (id) => {
    return userRepository.getUserById(id)
}

const getAllUsers = () => {
    return userRepository.getAllUsers()
}

const deletUserById = (id) => {
    return userRepository.deletUserById(id)
}

const updateUserById = (id, userModel) => {
    return userRepository.updateUserById(id, userModel)
}

const service = {
    saveUser,
    getUserById,
    getAllUsers,
    deletUserById,
    updateUserById,
    updateUserById
}

export default service;

