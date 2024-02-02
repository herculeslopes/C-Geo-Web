import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { ShapeIndex } from "../shapeIndex";
import { updateForm } from "../calculatorSlice";


const StyledForm = styled.form`
  display: flex;
  flex-flow: column;

  .fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  input {
    width: 100%;
    
  }

  button {
    width: 50%;
  }
`

const Form = () => {
  const { shape, section } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  
  switch (shape) {
    case ShapeIndex.RECTANGULAR:
      return <>
        {JSON.stringify(section)}
        {/* {section.depth} */}
        <StyledForm>
          <div className="fields">
            <label htmlFor="">Depth</label>
            <input type="text" onChange={() => section.setDimensions(5, 5)} />
          </div>

          <button name="depth" type="button">asdf</button>
        </StyledForm>
      </>;

    default:
      return <></>;
  }
}

export default Form;