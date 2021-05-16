/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import Container from 'react-bootstrap/Container';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { Context } from '../index';
import useTheme from '../context/useTheme';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
  };

  // const store = createStore(
  //     rootReducer,
  //     applyMiddleware(thunk, logger)
  // )
  //
  // store.subscribe(() => {
  //     const state = store.getState()
  //
  //     // document.body.className = state.theme.value;
  //     // document.getElementById("nav").bg = state.theme.value
  //
  //
  //
  // })
  //
  // store.dispatch({ type: 'INIT_APPLICATION' })

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    localStorage.setItem('language', i18n.language);
  };

  return (
    <Navbar
      bg={clsx(theme === 'dark' && 'dark', theme === 'light' && 'light')}
      variant={clsx(theme === 'dark' && 'dark', theme === 'light' && 'light')}
    >
      <Container>
        <NavLink style={{ color: `${clsx(theme === 'dark' && 'White', theme === 'light' && 'Black')}` }} to={SHOP_ROUTE}>
          {t('Title')}
        </NavLink>
        {user.isAuth
          ? (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button
                className="ml-2"
                variant={clsx(theme === 'dark' && 'outline-light', theme === 'light' && 'outline-dark')}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                {t('Admin')}

              </Button>

              <Button
                className="ml-2"
                variant={clsx(theme === 'dark' && 'outline-light', theme === 'light' && 'outline-dark')}
                onClick={() => {
                  changeTheme();
                }}
              >
                {t('Theme')}
              </Button>

              <Button
                className="ml-2"
                variant={clsx(theme === 'dark' && 'outline-light', theme === 'light' && 'outline-dark')}
                onClick={() => {
                  changeLanguage();
                }}
              >
                {t('Language')}
              </Button>

              <Button
                variant={clsx(theme === 'dark' && 'outline-light', theme === 'light' && 'outline-dark')}
                onClick={() => logOut()}
                className="ml-2"
              >
                Выйти
              </Button>
            </Nav>
          )
          : (
            <Nav className="ml-auto" style={{ color: 'white' }}>
              <Button
                variant={clsx(theme === 'dark' && 'outline-light', theme === 'light' && 'outline-dark')}
                onClick={() => history.push(LOGIN_ROUTE)}
              >
                {t('Authorization')}
              </Button>
              <Button
                className="ml-2"
                variant={clsx(theme === 'dark' && 'outline-light', theme === 'light' && 'outline-dark')}
                onClick={() => {
                  changeTheme();
                  console.log('click');
                }}
              >
                {t('Theme')}
              </Button>
              <Button
                className="ml-2"
                variant={clsx(theme === 'dark' && 'outline-light', theme === 'light' && 'outline-dark')}
                onClick={() => {
                  changeLanguage();
                }}
              >
                {t('Language')}
              </Button>
            </Nav>
          )}
      </Container>
    </Navbar>

  );
});

export default NavBar;
