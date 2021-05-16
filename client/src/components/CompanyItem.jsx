/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png';
import { COMPANY_ROUTE } from '../utils/consts';

// eslint-disable-next-line react/prop-types
const CompanyItem = ({ company }) => {
  const history = useHistory();
  return (
    <Col md={3} className="mt-3" onClick={() => history.push(`${COMPANY_ROUTE}/${company.id}`)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border="light">
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + company.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div>{company.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{company.name}</div>
      </Card>
    </Col>
  );
};

export default CompanyItem;
