import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Home2 from './Components/Home2';


function App() {

    return (
        <>
            {/* Home */}
            {/* <Route exact path = '/' render = {() => <Home />} /> */}

            {/* Home2 */}
            <Route exact path = '/' render = {() => <Home2 />} />
        </>
    )
};

export default App;