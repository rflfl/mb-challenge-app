const express = require("express");
const app = express();
const path = require("path");
const port = 3000;


app.get("/registration", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/index.html"));
});

app.post("/registration", (req, res) => {
    console.log('req.body')
    res.send({status: 201,msg: "Cadastro realizado com sucesso!"})
});

app.listen(port, () => {
  console.log(`API Server runnnig on port port ${port}!`);
});
