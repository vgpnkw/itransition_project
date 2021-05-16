/* eslint-disable import/no-cycle */
import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  Button, Dropdown, Form, Row, Col,
} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { createCompany, fetchCountries, fetchTypes } from '../../http/companyAPI';
import DragNDrop from '../dragNdrop';

const CreateCompany = observer(({ show, onHide }) => {
  const { company } = useContext(Context);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  const [drag, setDrag] = useState(false);
  const [dragItems, setDragItems] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => company.setTypes(data));
    fetchCountries().then((data) => company.setCountries(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    setDragItems(files);
    setDrag(false);
  };

  const addCompany = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('amount', `${amount}`);
    formData.append('img', file);
    formData.append('countryId', company.selectedCountry.id);
    formData.append('typeId', company.selectedType.id);
    formData.append('info', JSON.stringify(info));
    dragItems.map((dragItem) => formData.append('img', dragItem, dragItem.name));
    createCompany(formData).then(() => onHide());
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{company.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {company.types.map((type) => (
                <Dropdown.Item
                  onClick={() => company.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{company.selectedCountry.name || 'Выберите тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {company.countries.map((country) => (
                <Dropdown.Item
                  onClick={() => company.setSelectedCountry(country)}
                  key={country.id}
                >
                  {country.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-3"
            placeholder="Введите стоимость устройства"
            type="number"
          />
          <Form.Control
            className="mt-3"
            type="file"
            onChange={selectFile}
          />
          <DragNDrop
            drag={drag}
            dragStartHandler={dragStartHandler}
            dragLeaveHandler={dragLeaveHandler}
            onDropHandler={onDropHandler}
          />
          <hr />
          <Button
            variant="outline-dark"
            onClick={addInfo}
          >
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant="outline-danger"
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addCompany}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateCompany;
