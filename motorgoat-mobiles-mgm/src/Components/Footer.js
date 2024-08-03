import React from "react";
import { Container, Row, Col, Stack, Image } from "react-bootstrap"
import "../Footer.css"


function Footer() {

    return (
        <footer className="foot">
            <Container>
                <Row className="footer">
                    <Col className="col-1">
                        <Stack>
                            <Image
                                className="footer-img"
                                src="https://img.freepik.com/premium-vector/mgm-circle-letter-logo-design-with-circle-ellipse-shape-mgm-ellipse-letters-with-typographic-style-three-initials-form-circle-logo-mgm-circle-emblem-abstract-monogram-letter-mark-vector_229120-24035.jpg?w=360"
                                alt="company logo"
                                width={50}
                                height={50}
                            />
                            <p className="contact">Contact us</p>
                            <p>1-800-GIT-GOAT</p>
                            <p>gitgoat@mobiles.com</p>

                        </Stack>
                    </Col>
                    <Col className="col-2">
                        <Stack>
                            <p>Follow us</p>
                            <Image
                                className="social-img"
                                src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338507_1280.png"
                                alt="fb-logo"
                                width={25}
                                height={25}
                            />
                            <Image
                                className="social-img"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                                alt="insta-logo"
                                width={25}
                                height={25}
                            />
                            <Image
                                className="social-img"
                                src="data:image/png;base64,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"
                                alt="tik-logo"
                                width={25}
                                height={25}
                            />
                            <Image
                                className="social-img"
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png"
                                alt="x-logo"
                                width={25}
                                height={25}
                            />
                        </Stack>
                    </Col>
                    <Col className="col-3">
                        <Stack>
                            <p className="copy">Copyright &copy;2024 MotorGOAT Mobiles, Inc. All rights reserved</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;