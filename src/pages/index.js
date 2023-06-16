import { Container } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import Head from "next/head";

export default function Home(){
    return (
        <Container className="text-center fst-italic">
            <Head>
                <title>Keith Carlos</title>
            </Head>
            <img src="http://www.pixelstalk.net/wp-content/uploads/2016/06/HD-images-of-nature-download.jpg" 
            width={500} height={500} alt="profile pic"/>
            <br />
            <h1>Keith Carlos</h1>
            <p>Web Developer | Full Stack</p>
            <a href="../resume.pdf" className="btn btn-primary text-black" download><Download />&nbsp;Resume</a>
        </Container>
    )
}