import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/Home'
import Sobre from './componentes/Sobre'
import Cabecalho from './componentes/Cabecalho'
import Container from './componentes/Login'
import Formulario from './componentes/Cadastro'
import CadastroSucesso from './componentes/CadastroSucesso'
import LoginSucesso from './componentes/LoginSucesso'


const RouterApp = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/login' element={<Container />} />
                <Route path='/crie-sua-conta' element={<Formulario />} />
                <Route path='/cadastro-com-sucesso' element={<CadastroSucesso />} />
                <Route path='/login-com-sucesso' element={<LoginSucesso />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp