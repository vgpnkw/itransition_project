/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import CreateCountry from '../components/modals/CreateCountry';
import CreateCompany from '../components/modals/CreateCompany';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [countryVisible, setCountryVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [companyVisible, setCompanyVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
      >
        {t('AddType')}
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => setCountryVisible(true)}
      >
        {t('AddCountry')}
      </Button>
      <Button
        variant="outline-dark"
        className="mt-4 p-2"
        onClick={() => setCompanyVisible(true)}
      >
        {t('AddCompany')}
      </Button>
      <CreateCountry show={countryVisible} onHide={() => setCountryVisible(false)} />
      <CreateCompany show={companyVisible} onHide={() => setCompanyVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
