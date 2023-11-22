import { styled } from "styled-components";
import { use } from '@svg-drawing/react';

const StyledRectangular = styled.div`
  width: 100px;
  height: 100px;

  background-color: black;
`

const Rectangular = () => {
  const [renderRef, draw] = useSvgDrawing();

  return <>
    <div style={{ width: 500, height: 500 }} ref={renderRef} />
  </>

  // return <>
  //   <StyledRectangular>

  //   </StyledRectangular>
  // </>
}

export default Rectangular;

