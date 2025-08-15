import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Filme from './pages/Filme';

// Certifique-se de que o arquivo Favoritos.js existe em ./pages/
// Se o nome do arquivo for diferente (por exemplo, 'Favoritos.js' com letra minúscula), ajuste o import:
import Favoritos from './pages/Favoritos/favoritos';
// Ou, se o arquivo for 'favoritos.js':
// import Favoritos from './pages/favoritos';

import Erro from './pages/Erro';

import Header from './components/Header';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/favoritos" element={<Favoritos />} />


                <Route path="*"element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
