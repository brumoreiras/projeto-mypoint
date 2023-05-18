import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentes/Home'
import Sobre from './componentes/Sobre'
import Cabecalho from './componentes/Cabecalho'
import Container from './componentes/Login'
import Formulario from './componentes/Cadastro'


const RouterApp = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/login' element={<Container />} />
                <Route path='/crie-sua-conta' element={<Formulario />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp