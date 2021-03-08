import React, { Component } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { MainBox, DescBox, DescTitle, Description, Images } from './MainContentElement'
import img from '../../assets/img/main1.png'
import Carousel, { consts } from 'react-elastic-carousel';
import './slider.css'

class MainContent extends React.Component {
    myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? '👈' : '👉'
        return (
            <Button onClick={onClick} disabled={isEdge}>
                {pointer}
            </Button>
        )
    }
    render() {
        return (
            <>
                <Container>
                    <Row clasName="h-100">
                        {/* <Col sm="12" md="4" lg={3}> */}
                        <Col sm="12">
                            <MainBox>
                                <Images>
                                    <img className="img-fluid" width="100" src={img}></img>
                                </Images>
                            </MainBox>
                        </Col>
                        {/* </Col> */}
                        <Col sm="12" md={{ offset: 2, span: 10 }} lg={{ offset: 1, span: 11 }}>
                            <DescBox>
                                <DescTitle>
                                    Various types of make up.
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
}


export default MainContent
