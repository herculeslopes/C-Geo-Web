import styled from "styled-components";
import Sidebar from "../Features/Calculator/Components/Sidebar";
import Menu from "../Features/Calculator/Components/Menu";
import Canvas from "../Features/Calculator/Components/Canvas";

const StyledHome = styled.main`
  height: 100vh;
  display: flex;
  /* background-color: red; */
`

const Home = () => {
  return <>
    <StyledHome>
      <Sidebar />
      <Canvas />
      <Menu />
    </StyledHome>
  </>
}

export default Home;