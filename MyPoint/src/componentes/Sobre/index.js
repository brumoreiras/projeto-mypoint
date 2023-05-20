import CardInformacao from '../CardInformacao'
import './Sobre.css'

const Sobre = () => {
    return (
        <article className='container_sobre'>
            <div className='titulo_sobre'>
                <h1>Descubra a cidade ao seu redor</h1>
               <h2>Encontre as melhores experiências de lazer, gastronomia e entretenimento na sua região</h2>
            </div>

            <div className='container_card'>
                <CardInformacao
                    titulo={"Explore a sua cidade"}
                    descricao={"Descubra os melhores lugares para comer, se divertir e relaxar na sua cidade. Navegue por uma ampla seleção de restaurantes, bares, parques e muito mais."}
                />
                <CardInformacao
                    titulo={"Receba recomendações personalizadas"}
                    descricao={"Com base nos seus interesses e localização, o nosso aplicativo irá recomendar atividades sob medida para você. Nunca mais perca uma experiência incrível na sua cidade."}
                />
                <CardInformacao
                    titulo={"Interface intuitiva"}
                    descricao={"Nosso aplicativo foi projetado para ser fácil de usar. Navegue pelas categorias, aplique filtros e encontre as melhores opções de lazer de forma rápida e simples."}
                />
                <CardInformacao
                    titulo={"Compartilhe suas experiências"}
                    descricao={"Gostou de um restaurante? Viu um show incrível? Compartilhe suas experiências com outros usuários e ajude a criar uma comunidade engajada de amantes do lazer."}
                />
            </div>


        </article>

    )
}
export default Sobre