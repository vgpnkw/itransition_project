import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateCountry from "../components/modals/CreateCountry";
import CreateCompany from "../components/modals/CreateCompany";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [countryVisible, setCountryVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [companyVisible, setCompanyVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCountryVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCompanyVisible(true)}
            >
                Добавить устройство
            </Button>
            <CreateCountry show={countryVisible} onHide={() => setCountryVisible(false)}/>
            <CreateCompany show={companyVisible} onHide={() => setCompanyVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
