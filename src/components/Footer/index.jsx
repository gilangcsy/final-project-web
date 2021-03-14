import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FooterContainer, FooterContent, FooterHead, FooterDesc, AdviceBox, AdviceTitle, AdviceDesc, AdviceInput, AdviceButton } from "./FooterElement"

class Footer extends Component {
    render() {
        return (
            <>
                <FooterContainer id="footer">
                    <Container fluid>
                        <Row>
                            <Col xs={{ order: 2, span: 12 }} lg md={{ order: 1, span: 6 }} className="p-0">
                                <FooterContent>
                                    <Row className="no-gutters">
                                        <Col>
                                            <FooterHead>
                                                Product
                                            </FooterHead>
                                            <FooterDesc>
                                                Make Up
                                            </FooterDesc>
                                            <FooterDesc>
                                                Skin Care
                                            </FooterDesc>
                                            <FooterDesc>
                                                Hair Care
                                            </FooterDesc>
                                            <FooterDesc>
                                                Body Care
                                            </FooterDesc>
                                            <FooterDesc>
                                                Instaperfect
                                            </FooterDesc>
                                        </Col>

                                        <Col>
                                            <FooterHead>
                                                Activities
                                            </FooterHead>
                                            <FooterDesc>
                                                Shopping
                                            </FooterDesc>
                                            <FooterDesc>
                                                Marketplace
                                            </FooterDesc>
                                        </Col>
                                        <Col>
                                            <FooterHead>
                                                Social Media
                                            </FooterHead>
                                            <FooterDesc>
                                                Instagram
                                            </FooterDesc>
                                            <FooterDesc>
                                                Twitter
                                            </FooterDesc>
                                        </Col>
                                    </Row>
                                </FooterContent>
                            </Col>
                            <Col xs={{ order: 1, span: 12 }} lg md={{ order: 2, span: 6 }} className="p-0">
                                <AdviceBox>
                                    <Row>
                                        <Col>
                                            <AdviceTitle>
                                                Stay Connected with Us! But how?
                                            </AdviceTitle>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <AdviceDesc>

                                            </AdviceDesc>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <AdviceInput>

                                            </AdviceInput>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <AdviceButton>
                                                Submit
                                            </AdviceButton>
                                        </Col>
                                    </Row>
                                </AdviceBox>
                            </Col>
                        </Row>
                    </Container>
                </FooterContainer>
            </>
        )
    }
}

export default Footer
