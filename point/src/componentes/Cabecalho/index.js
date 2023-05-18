
import './Header.css'
import Botao from '../Botao'
import { Link } from 'react-router-dom'

const Cabecalho = () => {
    return (
        <header className="header">
            <h1>MyPoint</h1>
            <div className='header-menu'>
                <Link to='/'>Home</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
            <div>
                <Botao>
                    <Link to='/login'>login</Link>
                </Botao>
                <Botao>
                    <Link to='/crie-sua-conta'>Cadastre-se</Link>
                </Botao>
            </div>
        </header>
    )
}

export default Cabecalho