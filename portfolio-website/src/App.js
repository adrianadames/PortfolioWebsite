import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';

function App() {

    return (
        <>
            {/* Home */}
            <Route exact path = '/' render = {() => <Home />} />
        </>
    )
};

export default App;