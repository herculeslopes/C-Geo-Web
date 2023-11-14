import styled from "styled-components";
import Shape from "./Shape";

const StyledSidebar = styled.div`
  background-color: black;
  
`

const Sidebar = () => {
  const shapes = ['rectangular', 'hollow_rectangular'];
  
  return <>
    <StyledSidebar>
      {shapes.map(shape => <Shape />)}
    </StyledSidebar>
  </>
}

export default Sidebar;