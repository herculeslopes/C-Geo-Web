import styled from "styled-components";
import { useAppSelector } from "../Hooks/reduxHooks";

const StyledCanvas = styled.div`
  flex: 1;
`

const Canvas = () => {
  const { shape } = useAppSelector((state) => state.sections);
  
  return <>
    <StyledCanvas>
      { shape }
    </StyledCanvas>
  </>
}

export default Canvas;