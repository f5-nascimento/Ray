const express = require('express')
const userService = require('./services/users')
const app = express()
const port = 3000
app.use(express.json());

app.get('/users', (request, response) => {
  response.json(userService.getUsers());
})

app.get('/users/:id', (request, response) =>{
  const idUser = request.params.id;
  response.json(userService.getUserById(idUser));
})

app.post("/users", (request, response) =>{
  const body = request.body;
  response.status(201).json(userService.createUser(body));
})

app.delete("/users/:id", (request, response)=>{
  const idUser = request.params.id;
  userService.deleteUser(idUser);
  response.json("Apagado com sucesso");
})

app.patch("/users/:id", (request, response) => {
  const idUser = request.params.id;
  const body = request.body;
  userService.updateUser(idUser, body);
  response.status(200).json();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
