import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import { ThemeContext } from './context/useTheme';


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <NavBar />
                <AppRouter />
            </ThemeContext.Provider>
        </BrowserRouter>
    );
});

export default App;
