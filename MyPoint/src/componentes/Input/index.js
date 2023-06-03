
import './Input.css'

const Input = (props) => {


    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        
    }
    
    return (
        <div className="container">
            <label>{props.label}</label>
            <input
                type={props.type}
                onChange={aoDigitado}
                name = {props.name }
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    )
}
export default Input