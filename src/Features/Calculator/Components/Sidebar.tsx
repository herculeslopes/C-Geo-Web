import styled from "styled-components";
import Shape from "./Shape";
import { FaBars } from "react-icons/fa";
import { useState, Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { toggleSidebar } from "../calculatorSlice";

import { ShapeIndex } from "../shapeIndex";

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
  const { isSidebarExpanded } = useAppSelector(((state) => state.calculator));

  const shapeNames: string[] = Object.values(ShapeIndex);
  
  // const shapes = [
  //   "Rectangular",
  //   "Hollow Rectangular",
  //   "Circular",
  //   "Hollow Circular",
  //   "I-Shape",
  //   "T-Shape",
  //   "Angle",
  //   "Double Angle",
  //   "Lipped Angle",
  //   "Channel",
  //   "Double Channel",
  //   "Lipped Channel",
  //   "Lipped Channel (Single Lip)",
  //   "Double Lipped Channel",
  //   "Lipped Channel Box",
  //   "Triangular",
  //   "Hollow Triangular",
  //   "Box Girder",
  //   "Z-Shape",
  //   "Lipped Z-Shape",
  //   "Hat Shape",
  //   "Bulb Flat",
  //   "Tee Rail"
  // ]

  return <>
    <StyledSidebar className={isSidebarExpanded ? 'is-expanded' : ''} >
      <BtnExpand />
      {shapeNames.map(shape => <Shape {...{ shape }} />)}
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

  cursor: pointer;
  
  &:hover {
    background-color: #8d8d8d;
  }
  .react-icon {
    margin: auto;
    width: 20px;
    height: 20px;
  }
`

const BtnExpand = () => {
  const dispatch = useAppDispatch();
  
  const _toggleSidebar = () => dispatch(toggleSidebar());
  
  return <>
    <StyledBtnExpand onClick={_toggleSidebar}>
      <FaBars className='react-icon' />
    </StyledBtnExpand>
  </>
}

export default Sidebar;