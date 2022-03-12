import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerstyle";
  
const Footer = () => {
  return (
    <Box>
      
      <Container>
        <Row>
          <Column>
            <Heading>Links</Heading>
            <FooterLink href="#">Luxury societies in noida</FooterLink>
            <FooterLink href="#">2 bhk flat to buy in noida</FooterLink>
            <FooterLink href="#">noida 3 bhk flat for sale</FooterLink>
          </Column>
          <Column>
            <Heading>Links</Heading>
            <FooterLink href="#">Tata eureka park sector 150 noida</FooterLink>
            <FooterLink href="#">Tata eureka park noida</FooterLink>
            <FooterLink href="#">eureka park sector 150</FooterLink>
            <FooterLink href="#">Tata eureka park review</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Noida, Sector-150</FooterLink>
            <FooterLink href="#">+91-9718088999</FooterLink>
          </Column>
          <Column>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;