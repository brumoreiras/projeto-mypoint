import { useState } from 'react'
import Input from '../Input'
import './Cadastro.css'
import Botao from '../Botao'

const Formulario = () => {

    const [name, setNome] = useState('')
    const [email, setEmailCadastro] = useState('')
    const [password, setSenhaCadastro] = useState('')

    //Foi criado o consumo da API com Banco de dados
    //Enviando os dados do formulario para o banco de dados
    async function enviarDados(event) {
        event.preventDefault()

        try {
            const response = await fetch('http://localhost:3033/MyPoint/userinsert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })

            console.log(response)
        } catch {
            console.log('Ocorreu um erro : ')
        }
    }


    return (
        <section className='formulario-cadastro'>
            <form onSubmit={enviarDados}>

                <div className="cabecalho_formulario">
                    <h1>Cadastre-se</h1>
                </div>

                <Input
                    type="text"
                    obrigatorio={true}
                    label="Nome Completo"
                    placeholder="Digite seu nome completo"
                    valor={name}
                    aoAlterado={valor => setNome(valor)}
                />
                <Input
                    type="email"
                    obrigatorio={true}
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    valor={email}
                    aoAlterado={valor => setEmailCadastro(valor)}
                />
                <Input
                    type="password"
                    obrigatorio={true}
                    label="Senha"
                    placeholder="Digite sua senha"
                    valor={password}
                    aoAlterado={valor => setSenhaCadastro(valor)}
                />
                <div className="container_botao__cadastro">

                    <Botao>
                        Entrar
                    </Botao>
                </div>
            </form>
        </section>
    )
}
export default Formulario