
import { Link } from 'react-router-dom'
import Botao from '../Botao'
import './Home.css'

const Home = () => {
    return (
        <section className='container-conteudo'> 
            <h1>
                Encontre o melhor da sua cidade
            </h1>
            <span>
                Não perca mais nenhum momento de diversão. Descubra o melhor que sua cidade tem a oferecer com o nosso site. Encontre os melhores restaurantes, bares, parques, cinemas, teatros, monumentos históricos e muito mais em apenas alguns cliques.
            </span>
            <div className='botao'>
                <Botao>
                    <Link to='/login'>login</Link>
                </Botao>
                <Botao>
                    <Link to='/crie-sua-conta'>Cadastre-se</Link>
                </Botao>
            </div>
        </section>
    )
}
export default Home
