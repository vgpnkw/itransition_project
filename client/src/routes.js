/* eslint-disable import/no-cycle */
import Admin from './pages/Admin';
import {
  ADMIN_ROUTE, BASKET_ROUTE, COMPANY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE,
} from './utils/consts';
import Basket from './pages/Basket';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import CompanyPage from './pages/CompanyPage';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: `${COMPANY_ROUTE}/:id`,
    Component: CompanyPage,
  },
];
