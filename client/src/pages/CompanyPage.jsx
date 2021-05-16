import React, { useEffect, useState } from 'react';
import {
  Button, Card, Col, Container, Image, Row,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import bigStar from '../assets/bigStar.png';
import { fetchOneCompany } from '../http/companyAPI';

const CompanyPage = () => {
  const [company, setCompany] = useState({ info: [] });
  const { t } = useTranslation();
  const { id } = useParams();
  useEffect(() => {
    fetchOneCompany(id).then((data) => setCompany(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + company.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{company.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64,
              }}
            >
              {company.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300, height: 300, fontSize: 32, border: '5px solid lightgray',
            }}
          >
            <h3>
              От:
              {company.amount}
              {' '}
              руб.
            </h3>
            <Button variant="outline-dark">
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>
          {' '}
          {t('Description')}
          {' '}
        </h1>
        {company.info.map((info, index) => (
          <Row key={info.id} style={{ background: index % 2 === 0 ? '#343a40' : 'transparent', padding: 10, color: index % 2 === 0 ? 'white' : 'black' }}>
            {info.title}
            :
            {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default CompanyPage;
