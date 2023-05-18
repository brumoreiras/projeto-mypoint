import './Botao.css'

const Botao = (props) =>{
    return(
        <button className="botao-logar">
            {props.children}
        </button>
    )
}
export default Botao