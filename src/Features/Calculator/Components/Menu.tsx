import styled from "styled-components";
import { useAppSelector } from "../../../Hooks/reduxHooks";
import Form from "./Form";

const StyledMenu = styled.div`
  display: flex;
  width: 300px;
  background-color: #a8a8a8;
`

const Menu = () => {
  const { shape } = useAppSelector((state) => state.calculator);
  
  return <>
    <StyledMenu>
      <h1>{shape}</h1>
      <Form />
    </StyledMenu>
  </>
}

export default Menu;