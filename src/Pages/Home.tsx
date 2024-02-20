import styled from "styled-components";
import Sidebar from "../Features/Calculator/Components/Sidebar";
import Menu from "../Features/Calculator/Components/Menu";
import Canvas from "../Features/Calculator/Components/Canvas";
import Navbar from "../Components/Navbar";

const StyledHome = styled.main`
  height: 100vh;
  display: flex;
  /* background-color: red; */
`

const Home = () => {
  return <>
    <Navbar />
    <StyledHome>
      <Sidebar />
      <Canvas />
      <Menu />
    </StyledHome>
  </>
}

export default Home;