import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'


import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import {rootReducer} from "../redux/rootReducer";
import {applyMiddleware} from "redux";
import {changeTheme} from "../redux/actions";
import {createStore} from "../store/createStore";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    // const themeBtn = React.findDOMNode(this.refs.theme);

    // const store = createStore(
    //     rootReducer,
    //     composeWithDevTools(
    //         applyMiddleware(thunk, logger)
    //     )
    // )
    //
    // themeBtn.addEventListener('click', () => {
    //     const newTheme = document.body.classList.contains('light')
    //         ? 'dark'
    //         : 'light'
    //     store.dispatch(changeTheme(newTheme))
    // })
    //
    //
    // store.subscribe(() => {
    //     const state = store.getState()
    //
    //     document.body.className = state.theme.value;
    //
    //     themeBtn.forEach(btn => {
    //         btn.disabled = state.theme.disabled
    //     })
    // })
    //
    // store.dispatch({ type: 'INIT_APPLICATION' })

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Компании</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            className="ml-2" variant={"outline-light"}
                            id="theme"
                            // ref={ref => this.theme = ref}
                            // ref = "theme"

                        >Сменить тему</Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        <Button
                            className="ml-2" variant={"outline-light"}
                            id="theme"

                        >Сменить тему</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
