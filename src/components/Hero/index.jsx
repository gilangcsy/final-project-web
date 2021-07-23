import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/img/android.svg'


import { HeroTitle, HeroBg, RowContainer, HeroDesc, HeroButton, HeroContainer } from './HeroElements'

const Hero = () => {
    return (
        <>
            <Container id="home">
                <HeroContainer>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col xs={{ order: 2, span: 12 }} lg md={{ order: 1, span: 6 }}>
                            <HeroTitle>
                                KSM Android UPN "Veteran" Jakarta
                            </HeroTitle>
                            <HeroDesc>
                                Official Webstie KSM Android UPN "Veteran" Jakarta
                            </HeroDesc>
                            <HeroButton>
                                Getting Started
                            </HeroButton>
                        </Col>
                        <Col xs={{ order: 1, span: 12 }} lg md={{ order: 2, span: 6 }} className="justify-content-center">
                            <HeroBg>
                                <img className="img-fluid" src={img}></img>
                            </HeroBg>

                        </Col>
                    </Row>
                    {/* <div className="styling-example">
                    <Carousel itemsToShow={2}>
                        <img className="img-fluid" width="100" src="../../assets/img/catalog1.png"></img>
                        <img className="img-fluid" width="100" src="../../assets/img/catalog1.png"></img>
                        <img className="img-fluid" width="100" src="../../assets/img/catalog1.png"></img>
                        <img className="img-fluid" width="100" src="../../assets/img/catalog1.png"></img>
                        <img className="img-fluid" width="100" src="../../assets/img/catalog1.png"></img>
                        <img className="img-fluid" width="100" src="../../assets/img/catalog1.png"></img>
                    </Carousel>
                </div> */}
                </HeroContainer>
            </Container>

        </>
    )
}

export default Hero
