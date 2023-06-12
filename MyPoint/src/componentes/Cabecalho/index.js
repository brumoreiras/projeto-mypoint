import './Header.css'
import { Link, useLocation } from 'react-router-dom'

const Cabecalho = () => {
  const location = useLocation();

  const hideCadastroButton = location.pathname === '/cadastro-com-sucesso';
  const hideLoginButton = location.pathname === '/login-com-sucesso';

  return (
    <header className="cabecalho">
      <h1>MyPoint</h1>
      <nav className='cabecalho_menu'>
        <Link to='/'>Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
      <div className='botoes_cabecalho'>
        {!hideLoginButton && (
          <div className='botao_login'>
            <Link to='/login'>Login</Link>
          </div>
        )}
        {!hideCadastroButton && !hideLoginButton && (
          <div className='botao_cadastro'>
            <Link to='/crie-sua-conta'>Cadastre-se</Link>
          </div>
        )}
        {hideLoginButton && (
          <div className='botao_login'>
            <Link to='/'>Sair</Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Cabecalho
