import styled from "styled-components";
import Shape from "./Shape";
import { FaBars } from "react-icons/fa";
import { useState, Dispatch, SetStateAction } from "react";

const StyledSidebar = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  
  padding: 5px;
  background-color: #C9C9C9;
  /* transition: width .3s linear; */

  &.is-expanded {
    /* width: 100px; */
    /* background-color: white; */
  }
`

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // const shapes = ['rectangular', 'hollow_rectangular'];
  const shapes = [
    "Rectangular",
    "Hollow Rectangular",
    "Circular",
    "Hollow Circular",
    "I-Shape",
    "T-Shape",
    "Angle",
    "Double Angle",
    "Lipped Angle",
    "Channel",
    "Double Channel",
    "Lipped Channel",
    "Lipped Channel (Single Lip)",
    "Double Lipped Channel",
    "Lipped Channel Box",
    "Triangular",
    "Hollow Triangular",
    "Box Girder",
    "Z-Shape",
    "Lipped Z-Shape",
    "Hat Shape",
    "Bulb Flat",
    "Tee Rail"
  ]

  return <>
    <StyledSidebar className={isExpanded ? 'is-expanded' : ''} >
      <BtnExpand toggleExpanded={() => setIsExpanded(!isExpanded)} />
      {shapes.map(shape => <Shape {...{ shape, isExpanded }} />)}
    </StyledSidebar>
  </>
}

const StyledBtnExpand = styled.div`
  display: flex;
  /* margin: 0 auto; */
  width: 30px;
  aspect-ratio: 1/1;

  border-radius: 5px;
  background-color: #a8a8a8;

  .react-icon {
    margin: auto;
    width: 20px;
    height: 20px;
  }
`

const BtnExpand = ({ toggleExpanded }) => {
  return <>
    <StyledBtnExpand onClick={toggleExpanded}>
      <FaBars className='react-icon' />
    </StyledBtnExpand>
  </>
}

export default Sidebar;