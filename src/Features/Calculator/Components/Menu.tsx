import styled from "styled-components";
import { useAppSelector } from "../../../Hooks/reduxHooks";
import Form from "./Form";
import DynamicForm, { FormConfig } from "./DynamicForm";
import { rectangularFormConfig } from "../Formulas/rectangular";

const StyledMenu = styled.div`
  display: flex;
  flex-flow: column;
  
  width: 300px;
  background-color: #a8a8a8;
`

const Menu = () => {
  const { shape } = useAppSelector((state) => state.calculator);

  // const myFormConfig: FormConfig = {
  //   fields: [
  //     { type: 'number', label: 'Depth', name: 'depth', unit: 'mm', value: 0 },
  //   ]
  // }



  return <>
    <StyledMenu>
      <h1>{shape}</h1>
      {/* <Form /> */}
      <DynamicForm formConfig={rectangularFormConfig} />
    </StyledMenu>
  </>
}

export default Menu;