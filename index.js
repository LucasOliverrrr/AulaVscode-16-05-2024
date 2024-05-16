const express = require("express")
const mysql   = require("mysql2")
const app     = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(express.json())
//////////////////////////////////////////////
app.get('/listar', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'webDev',
        password:'root123'
    })
    connection.query('SELECT * FROM tb_funcionario', (err, results, fields) => {
        console.log(results)
        console.log(fields)
        res.send('Ok')
    })
})
/////////////////////////////////////////////
app.post("/inserir", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'webDev',
        password:'root123'
    })
    
    const nome = req.body.nome
    console.log(nome)

    const sql = "INSERT INTO tb_departamento(nome) VALUES('"+nome+"');"
    connection.query(sql, (err, results) => {
        console.log(results)
        res.send("ok")
    })
})
///////////////////////////////////////////////
app.delete("/apagar", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'webDev',
        password:'root123'
    })
    const nome = req.body.nome
    const sql  = "DELETE FROM tb_departamento WHERE nome = '"+nome+"';"
        connection.query(sql, (err, results)=>{
        console.log(results)
        res.send('ok')
    })
})
//////////////////////////////////////////////
app.put("/atualizar", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'webDev',
        password:'root123'
    })
    const id_dep = req.body.nome
    const nome = req.body.nome
    const sql  = "UPDATE tb_departamento SET nome = '"+nome+"' WHERE id_dep_pk = "+id_dep+";"
    connection.query(sql, (err, results)=>{
        console.log(results)
        res.send('ok')
    })
})
const porta = 3000
app.listen(porta, () => console.log("Executando na porta 3000..."))