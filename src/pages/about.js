import { Card, Row, Col } from "react-bootstrap";
import Head from "next/head";
export default function About(){
    return (
        <>
            <Head>
                <title>About me</title>
            </Head>
            <h1 className="fst-italic">About me</h1>
            <Card className="fst-italic">
                <Card.Body>
                    My name is Keith Carlos, and I am 20 years old. I am from the Philippines, and I currently live in Toronto, Canada.
                    I am currently studying Computer Programming & Analysis at Seneca College.
                </Card.Body>
            </Card>
            <br />
            <h1 className="fst-italic">Programming Languages and Tools</h1>
            <Card className="fst-italic">
                <Card.Body>
                    <Row className="text-center">
                        <Col>
                            <img src="https://www.freeiconspng.com/uploads/c--logo-icon-0.png" width={100} height={100} alt="C++ logo" />
                            <br />
                            <b>C/C++</b>
                        </Col>
                        <Col>
                            <img src="https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png" width={100} height={100} alt="JavaScript logo" />
                            <br />
                            <b>JavaScript</b>
                        </Col>
                        <Col>
                            <img src="https://pluspng.com/img-png/python-logo-png-open-2000.png" width={100} height={100} alt="Python logo" />
                            <br />
                            <b>Python</b>
                        </Col>
                        <Col>
                            <img src="https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png" width={100} height={100} alt="Java logo" />
                            <br />
                            <b>Java</b>
                        </Col>
                        <Col>
                            <img src="http://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" width={100} height={100} alt="HTML logo" />
                            <br />
                            <b>HTML</b>
                        </Col>
                        <Col>
                            <img src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" width={100} height={100} alt="React logo" />
                            <br />
                            <b>React Js</b>
                        </Col>
                        <Col>
                            <img src="https://seekicon.com/free-icon-download/next-js_1.svg" width={100} height={100} alt="Next logo" />
                            <br />
                            <b>Next Js</b>
                        </Col>
                        <Col>
                            <img src="https://www.mattbenton.io/img/logos/vue-9-logo-png-transparent-min.png" width={100} height={100} alt="Vue logo" />
                            <br />
                            <b>Vue Js</b>
                        </Col>
                        <Col>
                            <img src="https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png" width={100} height={100} alt="Mongo DB logo" />
                            <br />
                            <b>Mongo DB</b>
                        </Col>
                        <Col>
                            <img src="https://www.myintervals.com/blog/wp-content/uploads/2011/12/postgresql-logo1.png" width={100} height={100} alt="Postgres logo" />
                            <br />
                            <b>Postgres SQL</b>
                        </Col>
                        <Col>
                            <img src="https://mobilemancerblog.blob.core.windows.net/blog/2020/08/vs-code-logo-transp.png" width={100} height={100} alt="VS Code logo" />
                            <br />
                            <b>VS Code</b>
                        </Col>
                        <Col>
                            <img src="https://logos-download.com/wp-content/uploads/2016/09/Node_logo_NodeJS.png" width={150} height={100} alt="Node Js logo" />
                            <br />
                            <b>Node Js</b>
                        </Col>
                        <Col>
                            <img src="https://buttercms.com/static/images/tech_banners/ExpressJS.8587dd0647ca.png" width={150} height={100} alt="Express Js logo" />
                            <br />
                            <b>Express Js</b>
                        </Col>
                        <Col>
                            <img src="https://lankydanblog.files.wordpress.com/2017/01/javafx.png?w=591" width={150} height={100} alt="JavaFX logo" />
                            <br />
                            <b>JavaFX</b>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}