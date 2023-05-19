
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <section className='container_conteudo'> 
            <h1>
                Encontre o melhor da sua cidade
            </h1>
            <p>
                Não perca mais nenhum momento de diversão. Descubra o melhor que sua cidade tem a oferecer com o nosso site. Encontre os melhores restaurantes, bares, parques, cinemas, teatros, monumentos históricos e muito mais em apenas alguns cliques.
            </p>
            <div className='botoes_cabecalho__home'>
                <div className='botao_login__home'>
                    <Link to='/login'>Login</Link>
                </div>
                <div className='botao_cadastro__home'>
                    <Link to='/crie-sua-conta'>Cadastre-se</Link>
                </div>

            </div>
        </section>
    )
}
export default Home
