
import { Link } from 'react-router-dom'
import imagemTeste from '../imagens/imgTeste.png'
import './Home.css'
import Sobre from '../Sobre'

const Home = () => {
    return (
        <section className='container_conteudo'>
            <div className='container_conteudo__principal'>
                <h1>
                    <span>Encontre o melhor</span> da sua cidade no <span>MyPoint</span>
                </h1>
                <p>
                    <strong>Não perca mais nenhum momento de diversão.</strong> Descubra o melhor que sua cidade tem a oferecer com o nosso site. Encontre os melhores <strong>restaurantes, bares, parques, cinemas, teatros, monumentos históricos</strong> e muito mais em apenas alguns cliques.
                </p>
                <div className='botoes_cabecalho__home'>
                    <div className='botao_login__home'>
                        <Link to='/login'>Login</Link>
                    </div>
                    <div className='botao_cadastro__home'>
                        <Link to='/crie-sua-conta'>Cadastre-se</Link>
                    </div>
                </div>
            </div>
            <div className='container_conteudo__secundario'>
                <img src={imagemTeste} alt='imagem teste' />
            </div>
            <div className='sobre'>
                <Sobre />
            </div>

        </section>

    )
}
export default Home
