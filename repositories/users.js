let {bd} = require('../databases/users')

const getUsers = () =>{
    return bd;
}

const getUserById = (idUser) => {
  return bd.filter((usuario) => usuario.id === idUser);
}

const createUser = (body) =>{
  const newUser = {
    id: (bd.length+1).toString(),
    name: body.name
  }
  bd.push(newUser);
  return newUser;

}

const deleteUser = (idUser) => {
  bd = bd.filter((usuario) => usuario.id != idUser);
  return null;
}

const updateUser = (idUser, body) => {

  bd = bd.map((usuario) => {
    if(usuario.id === idUser){
      usuario.name = body.name;
    }
    return usuario
  })

  return bd;

}



module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}