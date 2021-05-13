import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const CountryBar = observer(() => {
    const {company} = useContext(Context)

    return (
        <Row className="d-flex">
            {company.countries.map(country =>
                <Card
                    style={{cursor:'pointer'}}
                    key={country.id}
                    className="p-3"
                    onClick={() => company.setSelectedCountry(country)}
                    border={country.id === company.selectedCountry.id ? 'danger' : 'light'}
                >
                    {country.name}
                </Card>
            )}
        </Row>
    );
});

export default CountryBar;
