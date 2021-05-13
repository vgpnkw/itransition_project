import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import CountryBar from "../components/CountryBar";
import CompanyList from "../components/CompanyList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes, fetchCountries, fetchCompanies} from "../http/companyAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {company} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => company.setTypes(data))
        fetchCountries().then(data => company.setCountries(data))
        fetchCompanies(null, null).then(data => {
            company.setCompanies(data)
        })
    }, [])

    useEffect(() => {
        fetchCompanies(company.selectedType.id, company.selectedCountry.id).then(data => {
            company.setCompanies(data)
        })
    }, [company.selectedType, company.selectedCountry,])




    // useEffect(() => {
    //     fetchTypes().then(data => company.setTypes(data))
    //     fetchCountries().then(data => company.setCountries(data))
    //     fetchCompanies(company.selectedType.id, company.selectedCountry.id).then(data => company.setCompanies(data))
    // }, [company.selectedType, company.selectedCountry])






    // useEffect(() => {
    //     fetchCompanies(company.selectedType.id, company.selectedCountry.id).then(data => {
    //         company.setCompanies(data.rows)
    //     })
    // }, [company.selectedType, company.selectedCountry])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <CountryBar/>
                    <CompanyList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
