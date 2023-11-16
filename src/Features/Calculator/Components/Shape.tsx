import styled from "styled-components";
import { FaShapes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { displayShape } from "../calculatorSlice";
import { ShapeIndex } from "../shapeIndex";

const StyledShape = styled.div`
  display: flex;
  gap: 10px;
  /* justify-content: space-between; */
  /* align-content: flex-start;  */

  width: 30px;
  height: 30px;
  /* aspect-ratio: 1/1; */

  padding: 5px;
  border-radius: 5px;
  background-color: #a8a8a8;

  /* transition: width 30s linear; */
  transition: background-color .5s linear;
  overflow: none;
  cursor: pointer;
  
  &:hover {
    background-color: #8d8d8d;
  }
  
  &.is-expanded {
    width: 100%;
    background-color: #C9C9C9;
    border-bottom: 1px solid black;
    border-radius: 0;
    /* width: fit-content; */
    
    &:hover {
      transition: background-color .1s linear;
      background-color: #8d8d8d;
    }
  }
  
  .react-icon {
    /* margin: auto; */
    width: 20px;
    height: 20px;
  }
`

const Shape = ({ shape }: { shape: ShapeIndex }) => {
  // const { shape: s } = useAppSelector((state) => state.sections);
  const { isSidebarExpanded } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  return <>
    <StyledShape className={isSidebarExpanded ? 'is-expanded' : ''} onClick={() => dispatch(displayShape(shape))}>
      <FaShapes className='react-icon' />
      {isSidebarExpanded ? <span>{shape}</span> : <></>}
    </StyledShape>
  </>
}

export default Shape;