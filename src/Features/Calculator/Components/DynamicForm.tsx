import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { updateDimension, updateForm } from "../calculatorSlice";
import { FormEvent, useEffect, useMemo, useState } from "react";

export type FormField = {
  type: 'text' | 'number';
  label: string;
  name: string;
  unit: string;
  value: number;
}

export type FormConfig = {
  fields: FormField[];
}

type DynamicFormProps = {
  formConfig: FormConfig;
}


const StyledDynamicForm = styled.form`
  padding: 10px;

  .progress-bar {
    width: 100%;
    height: 5px;
    background-color: black;

    .progress {
      display: block;
      height: inherit;
      
      background-color: green;
    }
    
    /* &.updating {
      &:after {
        width: 0;
      }
    }

    &.done {
      &:after {
        transition: width linear 5s;
        width: 100%;
      }
    }

    &:after {
      content: "";

      display: block;
      height: inherit;
      
      background-color: green;
    } */
  }

  
  .field {
    margin-bottom: 10px;
  }
  
  input {
    padding: 5px;
    
    width: 100%;
    /* background-color: #dbdbdb; */
    background-color: #e9e9e9;

    outline: none;
    border: none;
    border-radius: 5px;
  }
`

const DynamicForm: React.FC<DynamicFormProps> = ({ }) => {
  const { formConfig } = useAppSelector((state) => state.calculator);
  const [isFormUpdating, setIsFormUpdating] = useState(false);
  const [debounceProgress, setDebounceProgress] = useState(100);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setDebounceProgress((prevProgress) => {

        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsFormUpdating(false);

          dispatch(updateDimension());
          
          return prevProgress
        }

        return prevProgress + 2;
      })


    }, 10);

    return () => clearInterval(interval);

  }, [debounceProgress]);

  const handleForm = () => {
    let timeout;

    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsFormUpdating(true);
      setDebounceProgress(0);
      dispatch(updateForm({ name: event.target.name, value: Number(event.target.value), }))


      // clearTimeout(timeout);
      // // setDebounceProgress(0);
      // // setDebounceProgress(1);
      // timeout = setTimeout(() => {
      //   // alert('one second without interaction');
      //   setIsFormUpdating(false);
      //   console.log('ok');

      // }, 1000);

    }
  }

  const memoHandleForm = useMemo(() => handleForm(), []);

  const renderFormField = (field: FormField) => {
    return (
      <div className="field" key={field.name}>
        <label>{field.label}</label>
        <input type="number" name={field.name} value={field.value} onChange={memoHandleForm} />
      </div>
    );
  };

  return (
    <StyledDynamicForm>
      <div className={"progress-bar".concat(isFormUpdating ? ' updating' : ' done')}>
        <div className="progress" style={{ width: `${debounceProgress}%` }}></div>
      </div>
      {/* <div className="progress-bar">
        {isFormUpdating && <div className="progress"></div>}
      </div> */}
      {/* <div className="progress-bar" style={{ width: `${debounceProgress}%`}}></div> */}
      <h1>Form {isFormUpdating ? 'Updating' : 'Done'} {debounceProgress}</h1>
      {formConfig.fields.map(renderFormField)}
      <button type="button">Submit</button>
    </StyledDynamicForm>
  )
}

export default DynamicForm;