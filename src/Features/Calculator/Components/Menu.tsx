import styled from "styled-components";
import { useAppSelector } from "../../../Hooks/reduxHooks";

const StyledMenu = styled.div`
  display: flex;
  width: 300px;
  background-color: #a8a8a8;
`

const Menu = () => {
  const { shape } = useAppSelector((state) => state.calculator);
  
  return <>
    <StyledMenu>
      
    </StyledMenu>
  </>
}

export default Menu;