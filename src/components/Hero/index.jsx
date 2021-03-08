import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/img/hero.png'

import { HeroTitle, HeroBg, HeroImg, RowContainer, HeroDesc, HeroButton } from './HeroElements'

const Hero = () => {
    return (
        <>
            <Container>
                <RowContainer className="d-flex align-items-center">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col xs={{ order: 2, span: 12 }} lg md={{ order: 1, span: 6 }}>
                            <HeroTitle>
                                Shining, Shimering, Splendid
                            </HeroTitle>
                            <HeroDesc>
                                A whole ner world, a whole new look. All you need is change.
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
                </RowContainer>
            </Container>
        </>
    )
}

export default Hero
