import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Title } from "./ContentTitle";
import 'bootstrap/dist/css/bootstrap.min.css';

const index = (props) => {
    return (
        <>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Title>
                        {props.title}
                    </Title>
                </Col>
            </Row>
        </>
    )
}

export default index
