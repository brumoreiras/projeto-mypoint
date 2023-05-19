
import './Header.css'
import { Link } from 'react-router-dom'

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <h1>MyPoint</h1>
            <div className='cabecalho_menu'>
                <Link to='/'>Home</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
            <div className='botoes_cabecalho'>
                <div className='botao_login'>
                    <Link to='/login'>Login</Link>
                </div>
                <div className='botao_cadastro'>
                    <Link to='/crie-sua-conta'>Cadastre-se</Link>
                </div>

            </div>
        </header>
    )
}

export default Cabecalho