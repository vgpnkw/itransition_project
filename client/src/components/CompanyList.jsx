/* eslint-disable import/no-cycle */
/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';
import { Context } from '../index';
import CompanyItem from './CompanyItem';

const CompanyList = observer(() => {
  const { company } = useContext(Context);
  // let itemsToRender;
  // if (company.companies) {
  //     itemsToRender = company.companies.map(company => {
  //         return  <CompanyItem key={company.id} company={company}/>
  //     });
  // }
  //
  // return <Row className="d-flex">{itemsToRender}</Row>;

  return (
    <Row className="d-flex">
      {company.companies.map((company) => <CompanyItem key={company.id} company={company} />)}
    </Row>
  );
});

export default CompanyList;
