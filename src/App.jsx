import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";
//import Test from "./components/Test";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");

  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero id="hero" />
      <Who id="who" />
      <Works id="works" />
      <Contact id="contact" />
    </Container>
  );
}

export default App;
