import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { MainBox, DescBox, DescTitle, Description, Images } from './MainContentElement'
import img from '../../assets/img/main1.png'
import Carousel, { consts } from 'react-elastic-carousel';
import './slider.css'

const MainContent = (props) => {
    return (
        <>
            <Container>
                <Row>
                    {/* <Col sm="12" md="4" lg={3}> */}
                    <Col sm="12">
                        <MainBox type={props.type}>
                            <Images>
                                <img className="img-fluid" width="100" src={img}></img>
                            </Images>
                        </MainBox>
                    </Col>
                    {/* </Col> */}

                    <Col
                        md={{ offset: props.mdoffset, span: 10 }}
                        lg={{ offset: props.lgoffset, span: 11 }}
                    >
                        <DescBox type={props.type}>
                            <DescTitle type={props.type}>
                                {props.title}
                            </DescTitle>
                            <Description>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </Description>
                        </DescBox>
                    </Col>
                </Row>
                {/* <Carousel itemsToShow={3} renderArrow={this.myArrow}>
                        <img className="img-fluid" width="100" src={img}></img>
                        <img className="img-fluid" width="100" src={img}></img>
                        <img className="img-fluid" width="100" src={img}></img>
                        <img className="img-fluid" width="100" src={img}></img>
                        <img className="img-fluid" width="100" src={img}></img>
                        <img className="img-fluid" width="100" src={img}></img>
                    </Carousel> */}
            </Container>
        </>
    )
}

export default MainContent
