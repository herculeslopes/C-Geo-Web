import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import Menu from "../Components/Menu";

const StyledHome = styled.main`
  display: flex;
  background-color: red;
`

const Home = () => {
  return <>
    <StyledHome>
      <Sidebar />
      
      <Menu />
    </StyledHome>
  </>
}

export default Home;