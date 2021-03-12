import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CatalogBox, CatalogImage, CatalogTitle, CatalogDesc, CatalogPrice, Image, StarIcon } from "./CatalogComponent";
import { HeroButton } from '../Hero/HeroElements'

const CatalogElement = (props) => {
    return (
        <>
            <CatalogBox>
                <CatalogImage className="d-flex justify-content-center">
                    <Image
                        source={props.source}
                    />
                </CatalogImage>
                <Row>
                    <Col className="d-flex">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CatalogTitle>
                            {props.title}
                        </CatalogTitle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CatalogDesc>
                            {props.desc}
                        </CatalogDesc>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CatalogPrice>
                            {props.price}
                        </CatalogPrice>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center" >
                        <HeroButton>
                            Add To Cart
                        </HeroButton>
                    </Col>
                </Row>
            </CatalogBox>
        </>
    )
}

export default CatalogElement
