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
                    <Title title="Project Showcase KSM Android" />
                    <Row>
                        <Col>
                            <div className="styling-example mt-5">
                                <Carousel breakPoints={this.breakPoints}>
                                    <img className="img-fluid" width="300" src="../../assets/img/showcase.jpg"></img>
                                    <img className="img-fluid" width="250" src="../../assets/img/showcase1.jpg"></img>
                                    <img className="img-fluid" width="300" src="../../assets/img/showcase2.jpg"></img>
                                    <img className="img-fluid" width="300" src="../../assets/img/showcase3.jpg"></img>
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
