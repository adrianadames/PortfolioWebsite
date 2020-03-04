import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';

function App() {

    return (
        <>
            {/* Home */}
            <Route exact path = '/' render = {() => <Home />} />

            {/* About */}
            <Route exact path = '/about' render = {() => <About />} />
        </>
    )
};

export default App;