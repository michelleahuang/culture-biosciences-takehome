import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ImagesIndexContainer from './images/images_index_container';
import ImagesShowContainer from './images/images_show_container';
import Header from './header/header.jsx';

const App = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Route path="images/:id" element={<ImagesShowContainer />}></Route>
                <Route path="/" element={<ImagesIndexContainer />}></Route>
            </Routes>
        </div>
    )
}

export default App;