const express = require("express"); //importa o mÃ³dulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Trabalho Av2 (Apresentação)</h1>");
})

//rota do cadastro de produtos
app.get("/equipe", function(req,res){
    res.send("<h1>Equipe:</h1> <br> <h3> Mikaelly Mota 2024760- <br> Ravi Felipe - 2012909 <br> Gabriel Pedrosa - 2024706 <h3>");
})

app.listen(process.env.PORT || 3000,function(erro){  // cria a aplicaÃ§Ã£o na porta 3000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})