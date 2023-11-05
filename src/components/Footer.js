import { Container, Row, Col } from "react-bootstrap";
import LinkedIn from "../assets/img/linkedin.png";
import gfg from "../assets/img/gfg.png";
import leetcode from "../assets/img/leetcode.png";

import navIcon1 from "../assets/img/color-sharp.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col size={10} sm={15} className="text-center text-sm-end">
            
            <p>Thank You for visiting my Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}