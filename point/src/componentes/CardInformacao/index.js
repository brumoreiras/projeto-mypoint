import './CardInformacao.css'
const CardInformacao = ({ titulo, descricao }) => {
    return (
        <article className="card">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </article>
    )
}
export default CardInformacao