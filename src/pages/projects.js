import Head from "next/head";
import { Container } from "react-bootstrap";
import Image from "next/image";
export default function Projects(){
    return(
        <Container>
            <Head>
                <title>Projects</title>
            </Head>
            <h1>Project(s)</h1>
            <hr />
            <h2>Full Stack React App</h2>
            <p>
                In this project I used the MERN stack. Mongo DB to store data, Express Js for the backend, React for the front end, Node Js also for the backend code
                This web app requires you to sign in/register and after that you are greeted with the home page where you can see all other user's post
                You can also make your own post at your profile page (i.e. username = john then webpage/john) You can visit it at <a href="https://aware-plum-sheep.cyclic.app/login" target="_blank">My Website</a>
            </p>
            <Image src="/p1.jpg" width={1000} height={400} alt="Pic" />
            <Image src="/p2.jpg" width={1000} height={400} alt="Pic" />
        </Container>
    )
}
