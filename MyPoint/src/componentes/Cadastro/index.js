import { useState } from 'react'
import Input from '../Input'
import './Cadastro.css'
import Botao from '../Botao'

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [eMailCadastro, setEmailCadastro] = useState('')
    const [senhaCadastro, setSenhaCadastro] = useState('')

    return (
        <section className='formulario-cadastro'>
            <form onSubmit={event => {
                event.preventDefault()
                console.log(nome, eMailCadastro, senhaCadastro)
            }}>
                <div className="cabecalho_formulario">
                    <h1>Cadastre-se</h1>
                </div>
                
                <Input
                    type="text"
                    obrigatorio={true}
                    label="Nome Completo"
                    placeholder="Digite seu nome completo"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Input
                    type="email"
                    obrigatorio={true}
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    valor={eMailCadastro}
                    aoAlterado={valor => setEmailCadastro(valor)}
                />
                <Input
                    type="password"
                    obrigatorio={true}
                    label="Senha"
                    placeholder="Digite sua senha"
                    valor={senhaCadastro}
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