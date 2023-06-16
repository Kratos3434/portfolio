import { Container, Col, Row } from "react-bootstrap";
import Head from "next/head";
export default function ContactMe(){
    return(
        <Container className="text-center fst-italic">
            <Head>
                <title>Contact me</title>
            </Head>
            <h1>Contact Me</h1>
            <Row>
                <Col md className="pt-5">
                    <strong>Email: </strong> keithcarlos34@gmail.com<br /><br />
                    <p>+1 (416) 527-3396</p>
                    <strong>City: </strong> Toronto<br /><br />
                </Col>
            </Row>
        </Container>
    )
}