const express = require("express"); 
const app = express();


app.get("/", function(req,res){
    res.send("<h1>Site Iniciado!</h1>");
})


app.get("/login", function(req,res){
    res.send("<h1>Pagina de Login</h1>");
})


app.get("/pesquisa/:parametro", function(req,res){
    res.send("retorno pesquisa:" + req.params.parametro);
})

app.get("/publicar/:nome", function (req, res) {
    var nome = req.params.nome;
    res.send("<h1>postagem " + nome + " publicada</h1>!");
});

app.get("/publicar", function (req, res) {
    res.send("postagem publicada");
})

    


app.listen(process.env.PORT ?? 3000,function(erro){ 
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})
