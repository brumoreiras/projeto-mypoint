
import express from 'express'

const app = express()

app.use(express.json())

const cadastroDoUsuario = [
    {
        id: 1,
        "eMail": 'bruhnno.ms@gmail.com',
        "senha": '12345'
    },
]

app.get('/', (req, res) => {
    res.send("Seja bem vindo")
})

app.get('/crie-sua-conta', (req, res) => {
    res.status(200).json(cadastroDoUsuario)
})

app.get('/crie-sua-conta/:id', (req, res) => {
    let { id } = req.params
    let index = buscarUsuario(id)
    res.status(200).json(cadastroDoUsuario[index])
})

app.post('/crie-sua-conta', (req, res) => {
    cadastroDoUsuario.push(req.body)
    res.status(201).send('Cadastro realizado com sucesso')
})

app.put('/crie-sua-conta/:id', (req, res) => {
    let { id } = req.params
    let index = buscarUsuario(id)
    cadastroDoUsuario[index].eMail = req.body.eMail
    cadastroDoUsuario[index].senha = req.body.senha
    res.status(200).json(cadastroDoUsuario)

})

app.delete('/crie-sua-conta/:id', (req, res) => {
    let { id } = req.params
    let index = buscarUsuario(id)
    cadastroDoUsuario.splice(index, 1)
    res.send(`Usuário ${id} foi removido com sucesso!`)
})

function buscarUsuario(id) {
    return cadastroDoUsuario.findIndex(cadastroDoUsuario => cadastroDoUsuario.id == id)
}

export default app
