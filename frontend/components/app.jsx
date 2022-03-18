import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ImagesIndexContainer from './images/images_index_container';
import Header from './header/header.jsx';

const App = () => {

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ImagesIndexContainer />}></Route>
            </Routes>
        </div>
    )
}

export default App;