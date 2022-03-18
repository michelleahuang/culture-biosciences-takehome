import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ImagesIndexContainer from './images/images_index_container';
import ImagesShowContainer from './images/images_show_container';
import Header from './header/header.jsx';

const App = () => {

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="images/:id" component={ImagesShowContainer}></Route>
                <Route exact path="/" component={ImagesIndexContainer}></Route>
            </Switch>
        </div>
    )
}

export default App;