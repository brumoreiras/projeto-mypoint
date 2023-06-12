import './LoginSucesso.css'
import { useLocation, Link } from 'react-router-dom'


const LoginSucesso = ({ location }) => {


    const { state } = useLocation();
    const name = state ? state.name : "";

    return (
        <div className='login_sucesso'>
            <h1>Bem-vindo ao MyPoint: Descubra o Melhor da Sua Cidade!</h1>
            <h2>Olá {name}</h2>
            <div className='botao_sair'>
                <Link to='/'>Sair</Link>
            </div>
        </div>
    )
}
export default LoginSucesso