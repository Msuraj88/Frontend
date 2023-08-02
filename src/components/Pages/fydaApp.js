import React from 'react';
import '../Styles/fydaApp.scss';
import Header from '../includes/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import Form from 'react-bootstrap/Form';


function fydaApp() {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className='Content-box'>
                            <row className="box-header justify-content-between">
                                <h5>Create Strategy</h5>
                                <AssessmentOutlinedIcon className='box-header-icon'/>
                            </row>

                            <div className="box-body-content">
                                <Container>
                                    <Row>
                                        <Col xs={6}>
                                            <Form>
                                                <Form.Label>Buy and Sell</Form.Label>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Select Crypto</option>
                                                    <option value="1">ETH</option>
                                                    <option value="2">Bitcoin</option>
                                                    <option value="3">Cronos</option>
                                                </Form.Select>
                                            </Form>


                                        </Col>
                                        <Col xs={6}> WITH</Col>
                                    </Row>
                                </Container>

                            </div>

                        </div>



                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default fydaApp;
