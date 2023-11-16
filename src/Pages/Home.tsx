import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import Menu from "../Components/Menu";
import Canvas from "../Components/Canvas";

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