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
                            src="https://cdn.pixabay.com/photo/2022/02/09/08/24/tiktok-7002866_1280.png"
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