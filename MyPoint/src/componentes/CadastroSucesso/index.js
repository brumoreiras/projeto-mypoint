import './CadastroSucesso.css'
import { Link } from 'react-router-dom'

const CadastroSucesso = () => {
    return (
        <div className='cadastro_sucesso'>
            <h1>Bem-vindo ao MyPoint: Viva Experiências Incríveis em Sua Cidade!</h1>
            <h2>Cadastro concluido com sucesso</h2>
            <div>
                <span>Para realizar o seu acesso </span>
                <Link to='/login'>clique</Link>
            </div>
        </div>
    )
}
export default CadastroSucesso