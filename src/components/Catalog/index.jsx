import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from "../ContentTitle/";
import CatalogElement from "./CatalogElement"
import Carousel from 'react-elastic-carousel'
import './slider.css'

class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
            { width: 850, itemsToShow: 3 },
            { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
            { width: 1450, itemsToShow: 5 },
            { width: 1750, itemsToShow: 6 },
        ]
    }
    render() {
        return (
            <>
                <Container id="discover">
                    <Title
                        title="Best Seller"
                    />
                    <Row className=" mx-auto d-flex justify-content-around">
                        <Col xs={12} sm={6} lg={2}>
                            <CatalogElement
                                title="Nivea Lip Balm"
                                desc="Lorem ipsum sir dolot comet"
                                price="Rp. 20.000,-"
                                source="catalog1.png"
                            />
                        </Col>

                        <Col xs={12} sm={6} lg={2}>
                            <CatalogElement
                                title="Nivea Lip Balm"
                                desc="Lorem ipsum sir dolot comet"
                                price="Rp. 20.000,-"
                                source="catalog2.png"
                            />
                        </Col>
                        <Col xs={12} sm={6} lg={2}>
                            <CatalogElement
                                title="Nivea Lip Balm"
                                desc="Lorem ipsum sir dolot comet"
                                price="Rp. 20.000,-"
                                source="catalog3.png"
                            />
                        </Col>
                        <Col xs={12} sm={6} lg={2}>
                            <CatalogElement
                                title="Nivea Lip Balm"
                                desc="Lorem ipsum sir dolot comet"
                                price="Rp. 20.000,-"
                                source="catalog4.png"
                            />
                        </Col>
                    </Row>
                    <Title
                        title="More From Wardah"
                    />
                    <Row>
                        <Col>
                            <div className="styling-example mt-5">
                                <Carousel breakPoints={this.breakPoints}>
                                    <img className="img-fluid" width="300" src="../../assets/img/slides-1.png"></img>
                                    <img className="img-fluid" width="400" src="../../assets/img/slides-2.png"></img>
                                    <img className="img-fluid" width="300" src="../../assets/img/slides-4.png"></img>
                                    <img className="img-fluid" width="300" src="../../assets/img/slides-5.png"></img>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
export default Catalog
