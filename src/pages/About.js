import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Portfolio from "../components/Portfolio";

const h1 = {
 fontFamily: "Cinzel Decorative",
 fontSize: "105px",
fontWeight: "700",
textShadow: "-1px 2px 0 #500, 1px 1px 0 #600, 1px -2px 0 #400,  -1px -1px 0 #100"
}

const h2 = {
  fontFamily: "Cinzel Decorative",
  fontSize: "45px",
  fontWeight: "700",
  textShadow: "-1px 1px 0 #100, 1px 1px 0 #600, 1px -1px 0 #400,  -1px -1px 0 #100" 
 }

 const contain ={
  marginTop: 20, 
  backgroundColor: "#D1CFDC"
 }

 const p ={
   fontSize: "24px",
   textAlign: "center"
 }

 const p1 ={
  fontSize: "18px",
  textAlign: "justify"
}
 const center = {
   textAlign: "center"
 }
function About() {
  return (
    <div className = "contain">
      <Hero backgroundImage="https://i.imgur.com/bVlOQ6K.png">
        <h1 style = {h1}>Mike Nezzer</h1>
        <br></br>
        <h2 style = {h2}>Full Stack Developer 	&#9734; Accountant &#9734; Musician</h2>
      </Hero>
      <Container style={ contain }>
        <Row>
          <Col size="md-12">
            <h1 style = {center}>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p style = {p1}>
            Software Engineer/Web developer transferring skills from years of Accounting experience to the coding world. I have earned my certificate in Full Stack Development from General Assembly boot camp, with curriculum that focused on HTML, CSS, JavaScript, Node Js, React, Ruby, Rails as well as others.  Attention to detail and problem solving skills translate well from Accounting to web development.  Being a  creative team member and seeing the design aspects and  coding come together is extremely gratifying and fulfilling and  motivates me.  I know how to thrive in a team environment,  working as part of a small Finance section where we had to cover for each other.  I’m enthusiastic about the opportunities for constant learning and growth in the burgeoning field of full stack development.
            </p>
           
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h1 style = {center}>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p style = {p}>
     Email: mnezz1131@gmail.com &nbsp; | &nbsp; Phone: 512-785-0540 &nbsp; |  &nbsp;<a href = "https://www.linkedin.com/in/michael-nezzer-11b956196/"> LinkedIn</a> &nbsp;| &nbsp; <a href = "https://github.com/mnezz1131"> Git Hub</a>
            </p>
           
          </Col>
        </Row>
      </Container>
      <Portfolio /> 
  </div>


  );
}

export default About;
