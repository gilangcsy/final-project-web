import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { MainBox, DescBox, DescTitle, Description, Images, RowC } from './MainContentElement'


const MainContent = (props) => {
    return (
        <>
            <Container id="about">
                <RowC>
                    {/* <Col sm="12" md="4" lg={3}>*/}
                    <Col sm="12"> 
                        <MainBox type={props.type}>
                            <Images>
                                <img className="img-fluid" width={props.width} src={`../../assets/img/${props.img}`}></img>
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
                                {props.quote}
                                <br></br>
                                <br />
                                <br/>
                                <b>- {props.pos} -</b>
                            </Description>
                        </DescBox>
                    </Col>
                </RowC>
                {/* <Carousel itemsToShow={1}>
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
