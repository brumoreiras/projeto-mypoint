import './LoginSucesso.css'


const LoginSucesso = ({name}) => {
    return (
        <div className='login_sucesso'>
            <h1>Bem-vindo ao MyPoint: Descubra o Melhor da Sua Cidade!</h1>
            <h2>Olá {name}</h2>
        
        </div>
    )
}
export default LoginSucesso