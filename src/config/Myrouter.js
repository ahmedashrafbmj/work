import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,Routes,
    Link
} from "react-router-dom";

import Login from '../screen/login'
import Signup from './../screen/signup';
import Home from './../screen/home';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='signup' element={<Signup />}></Route>
                    <Route path='login' element={<Login />}></Route>

                </Routes>
            </Router>
        </>
    )
}

export default AppRouter;
