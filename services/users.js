const userRepository = require("../repositories/users")

const getUsers = () => {
    return userRepository.getUsers();
}

const getUserById = (idUser) => {
    return userRepository.getUserById(idUser);
}

const createUser = (body) => {
    return userRepository.createUser(body);
}

const deleteUser = (idUser) => {
    return  userRepository.deleteUser(idUser);
}
const updateUser = (idUser, body) => {
    return userRepository.updateUser(idUser, body);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}