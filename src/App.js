import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Website from './pages/Website'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header';
import Main from './components/section/Main';
import Footer from './components/section/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/website' element={<Website />} />
                <Route path='/video/:videoId' element={<Video />} />
                <Route path='/search/:searchId' element={<Search />} />
                <Route path='*' element={<Not />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    );
}
export default App;

