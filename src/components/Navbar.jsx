import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
  };
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/a.jpeg" />
          <List>
            <ListItem onClick={() => scrollToSection("hero")}>Home</ListItem>
            <ListItem onClick={() => scrollToSection("who")}>Studio</ListItem>
            <ListItem onClick={() => scrollToSection("works")}>Works</ListItem>
            <ListItem onClick={() => scrollToSection("contact")}>
              Contact
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button href="https://drive.google.com/file/d/1pHaU4G_tt3vxUxUVV818Tr955Ic3w1b4/view?usp=sharing">
            Hire Me
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
