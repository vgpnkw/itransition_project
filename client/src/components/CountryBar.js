import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";
import clsx from "clsx";
import ListGroup from "react-bootstrap/ListGroup";
import useTheme from "../context/useTheme";
import Navbar from "react-bootstrap/Navbar";

const CountryBar = observer(() => {
    const {company} = useContext(Context)
    const { theme, setTheme } = useTheme();
    return (
        <Row className="d-flex">
            {company.countries.map(country =>
                <Card
                    style={{cursor:'pointer'}}
                    key={country.id}
                    className="p-3"
                    onClick={() => company.setSelectedCountry(country)}
                    border={country.id === company.selectedCountry.id ? 'danger' : 'light'}

                    bg={clsx(theme === "dark" && "secondary", theme === "light" && "light")}
                >
                    {country.name}
                </Card>
            )}
        </Row>
    );
});

export default CountryBar;
