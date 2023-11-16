import { styled } from "styled-components";

const StyledRectangular = styled.div`
  width: 100px;
  height: 100px;

  background-color: black;
`

const Rectangular = () => {
  return <>
    <StyledRectangular />
  </>
}

export default Rectangular;