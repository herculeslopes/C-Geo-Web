import styled from "styled-components";
import Section from "./Section";

const StyledCanvas = styled.div`
  flex: 1;
  /* background: conic-gradient(from 90deg at 2px 2px, #dbdbdb 90deg,#0000 0) -2px -2px / 25px 25px; */
  /* background-color: #e9e9e9; */
  /* background-color: #d2fadf; */
  background: conic-gradient(from 90deg at 2px 2px, #d2fadf 90deg,white 0) -2px -2px / 25px 25px;

  overflow: auto;
`

const Canvas = () => {
  return <>
    <StyledCanvas>
      <Section />
    </StyledCanvas>
  </>
}

export default Canvas;