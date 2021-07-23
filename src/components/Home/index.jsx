import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from "../ContentTitle/"
import { HeroBg } from '../Hero/HeroElements'
import img from '../../assets/img/tujuan.svg'

const Home = () => {
    return (
        <>
            <Container className="mt-5">
                <Title title="Tujuan"/>
                <Row  className=" mt-5 mx-auto d-flex justify-content-around">
                    <Col lg={6}>
                        <HeroBg>
                            <img className="img-fluid" src={img}></img>
                        </HeroBg>
                    </Col>
                    <Col lg={6}>
                        <ol>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                            <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>It has survived not only five centuries.</li>
                        </ol>
                    </Col>
                </Row>

                <Title title="Visi"/>
                <Row  className=" mt-5 mx-auto d-flex justify-content-around">
                    <Col lg={6}>
                        <ol>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                            <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>It has survived not only five centuries.</li>
                        </ol>
                    </Col>
                    <Col lg={6}>
                        <HeroBg>
                            <img className="img-fluid" src={img}></img>
                        </HeroBg>
                    </Col>
                </Row>

                <Title title="Misi"/>
                <Row  className=" mt-5 mx-auto d-flex justify-content-around">
                    <Col lg={6}>
                        <HeroBg>
                            <img className="img-fluid" src={img}></img>
                        </HeroBg>
                    </Col>
                    <Col lg={6}>
                        <ol>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                            <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                            <li>It has survived not only five centuries.</li>
                        </ol>
                    </Col>
                </Row>
                
            </Container>
        </>
    )
}

export default Home