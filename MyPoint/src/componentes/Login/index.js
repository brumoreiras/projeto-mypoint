import { useState } from "react"
import Botao from "../Botao"
import Input from "../Input"
import './Login.css'

const Container = () => {
    const [eMail, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('botao clicado => ', eMail, senha)
    }
    return (
        <section className="container-login">
            <form className="container_formulario" onSubmit={aoSalvar}>
                <div className="container_texto">
                    <h1>Login</h1>
                    <h2>Seja bem-vindo ao Point</h2>
                </div>
                <Input
                    type="email"
                    obrigatorio={true}
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    valor={eMail}
                    aoAlterado={valor => setEmail(valor)}
                />
                <Input
                    type="password"
                    obrigatorio={true}
                    label="Senha"
                    placeholder="Digite sua senha"
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}

                />
                <div>
                     <span>Esqueceu a senha?</span>
                </div>
               
                <div className="container_botao__login">

                    <Botao>
                        Entrar
                    </Botao>
                </div>


            </form>
        </section>
    )
}
export default Container