import express from 'express'

const app = express()

app.use(express.json())

<<<<<<< HEAD
const cadastroDoUsuario = [
    {
        id: 1,
        "eMail": 'bruhnno.ms@gmail.com',
        "senha": '12345'
    },
]
=======
const cadastroDoUsuario = []
>>>>>>> 113e4f24519850177890f5eedab9a8be3f83c6df

app.get('/', (req, res) => {
    res.send("Seja bem-vindo")
})

app.get('/crie-sua-conta', (req, res) => {
    if (cadastroDoUsuario.length === 0) {
        res.status(200).send('Nenhum dado cadastrado')
    } else {
        res.status(200).json(cadastroDoUsuario)
    }
})

app.get('/crie-sua-conta/:id', (req, res) => {
    const { id } = req.params
    const index = buscarUsuario(id)
    if (index !== -1) {
        res.status(200).json(cadastroDoUsuario[index])
    } else {
        res.status(404).send('Usuário não encontrado')
    }
})

app.post('/crie-sua-conta', (req, res) => {
    cadastroDoUsuario.push(req.body)
    res.status(201).send('Cadastro realizado com sucesso')
})

app.put('/crie-sua-conta/:id', (req, res) => {
    const { id } = req.params
    const index = buscarUsuario(id)
    if (index !== -1) {
        cadastroDoUsuario[index].email = req.body.email
        cadastroDoUsuario[index].senha = req.body.senha
        res.status(200).json(cadastroDoUsuario)
    } else {
        res.status(404).send('Usuário não encontrado')
    }
})

app.delete('/crie-sua-conta/:id', (req, res) => {
    const { id } = req.params
    const index = buscarUsuario(id)
    if (index !== -1) {
        cadastroDoUsuario.splice(index, 1)
        res.send(`Usuário ${id} foi removido com sucesso!`)
    } else {
        res.status(404).send('Usuário não encontrado')
    }
})

function buscarUsuario(id) {
    return cadastroDoUsuario.findIndex(usuario => usuario.id == id)
}

export default app
