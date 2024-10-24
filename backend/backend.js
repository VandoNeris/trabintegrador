const express = require('express')
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.listen(3001,()=>(console.log('Servidor rodando')));


server.post('/message', (req, res)=>{
        const message = req.body.message;
        const date = req.body.date;
        const time = req.body.time;
    res.status(201).send(`A mensagem foi enviada`)


});

server.get('/message', (req, res)=>{
    const message = req.body.message;
    const date = req.body.date;
    const time = req.body.time;
res.status(201).send(`A mensagem foi enviada`)
});

server.post('/ticket-status', (req, res)=>{
    const status = req.body.status
res.status(201).send(`Ok`)
});

server.get('/ticket-status', (req, res)=>{
    const status = req.body.status
res.status(201).send(`Ok`)
});

server.post('/ticket-criar', (req, res)=>{
    const titulo = req.body.titulo
    const descricao = req.body.descricao
res.status(201).send(`Ok`)
});

server.get('/ticket-criar', (req, res)=>{
    const titulo = req.body.titulo
    const descricao = req.body.descricao
res.status(201).send(`Ok`)
});

server.post('/user', (req, res)=>{
    const nome = req.body.nome
    const servicos = req.body.servicos
res.status(201).send(`Ok`)
});

server.get('/user', (req, res)=>{
    const nome = req.body.nome
    const servicos = req.body.servicos
res.status(201).send(`Ok`)
});

server.post('/contratos', (req, res)=>{
    const valor = req.body.valor
    const validade = req.body.validade
    const descricao = req.body.descricao
res.status(201).send(`Ok`)
});


server.get('/contratos', (req, res)=>{
    const valor = req.body.valor
    const validade = req.body.validade
    const descricao = req.body.descricao
res.status(201).send(`Ok`)
});
