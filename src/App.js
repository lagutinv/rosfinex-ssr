import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <Switch>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </main>
        </>
    )
}

export default App;
