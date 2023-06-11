import { useState } from "react"
import Botao from "../Botao"
import Input from "../Input"
import { useNavigate } from "react-router-dom";
import './Login.css'



const Container = () => {
    const [email, setEmail] = useState('')
    const [password, setSenha] = useState('')
    const navigate = useNavigate()

    async function aoSalvar(evento) {
        evento.preventDefault()
        try {
            const response = await fetch('http://localhost:3033/MyPoint/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const data = await response.json();
            if (response.ok && data.nomeUsuario) {
                // Login válido
                navigate("/login-com-sucesso", { state: { name: data.nomeUsuario } });
                /* console.log("Login realizado com sucesso ",data.nomeUsuario); */
            } else {
                // Login inválido
                console.log("erro de acesso")
            }

            console.log(data.nomeUsuario);
            console.log(data.name)
            console.log(data)
        } catch (error) {
            console.error('Ocorreu um erro ao fazer login:', error);
        }

        console.log('botao clicado => ', email, password)
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
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <Input
                    type="password"
                    obrigatorio={true}
                    label="Senha"
                    placeholder="Digite sua senha"
                    valor={password}
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