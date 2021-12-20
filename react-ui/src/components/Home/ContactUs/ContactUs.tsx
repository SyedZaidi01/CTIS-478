import React from 'react';
import { Col, Form } from 'react-bootstrap';
import Widget from '../../Common/Widget';

const ContactUs = () => {
    return (
        <Widget id="contact-us-section">
            <Col md={6} id="contact-form-section">
                <Form id="contact-form">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Ad ve Soyadınız" />
                        <Form.Control type="text" placeholder="Departman" />
                    </Form.Group>
                </Form>
            </Col>

            <Col md={6} id="happy-customers-section">
                asd
            </Col>
        </Widget>
    );
};

export default ContactUs;