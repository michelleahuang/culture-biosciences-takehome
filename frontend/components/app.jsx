import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ImagesIndexContainer from './images/images_index_container';

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<ImagesIndexContainer />}></Route>
        </Routes>
    )
}

export default App;