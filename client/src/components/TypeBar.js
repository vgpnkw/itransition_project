import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import clsx from "clsx";
import Navbar from "react-bootstrap/Navbar";
import useTheme from "../context/useTheme";
const TypeBar = observer(() => {
    const {company} = useContext(Context)
    const { theme, setTheme } = useTheme();
    return (
        <ListGroup>
            {company.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === company.selectedType.id}
                    onClick={() => company.setSelectedType(type)}
                    key={type.id}


                    variant={clsx(theme === "dark" && "dark", theme === "light" && "light")}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;
