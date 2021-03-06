/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '../index';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? `${t('Authorization')}` : `${t('Registration')}`}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder={t('InputLogin')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder={t('InputPassword')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin
              ? (
                <div>
                  {t('DHaveAccount')}
                  {' '}
                  <NavLink to={REGISTRATION_ROUTE}>
                    {t('Registration')}
                    !
                  </NavLink>
                </div>
              )
              : (
                <div>
                  {t('HaveAccount')}
                  {' '}
                  <NavLink to={LOGIN_ROUTE}>
                    {t('Authorization')}
                    !
                  </NavLink>
                </div>
              )}
            <Button
              variant="outline-success"
              onClick={click}
            >
              {isLogin ? `${t('Authorization')}` : `${t('Registration')}`}
            </Button>
          </Row>

        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
