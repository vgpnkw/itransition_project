/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './App';
import UserStore from './store/UserStore';
import CompanyStore from './store/CompanyStore';
import localizations from './localizations.json';

export const Context = createContext(null);
// настройки плагина
i18n
  .use(initReactI18next)
  .init({
    resources: localizations,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    company: new CompanyStore(),
  }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
