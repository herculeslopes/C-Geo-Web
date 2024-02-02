import { styled } from "styled-components";
import { useAppSelector } from "../../../Hooks/reduxHooks";
import { useEffect } from "react";
// import { use } from '@svg-drawing/react';

const StyledRectangular = styled.div`
  width: 100px;
  height: 100px;

  background-color: black;
`

const Rectangular = () => {
  // const [renderRef, draw] = useSvgDrawing();
  const { shape, dimensions, formConfig } = useAppSelector((state) => state.calculator);

  useEffect(() => {

  }, [])
  
  return <>
    {/* <div style={{ width: 500, height: 500 }} ref={renderRef} /> */}
    {/* <div style={{ width: }}></div> */}

    {JSON.stringify(dimensions)}
    
  </>

  // return <>
  //   <StyledRectangular>

  //   </StyledRectangular>
  // </>
}

export default Rectangular;

