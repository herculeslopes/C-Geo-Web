import { useAppSelector } from "../../../Hooks/reduxHooks";
import { ShapeIndex } from "../../../Features/Calculator/shapeIndex";
import Rectangular from "../../../Features/Calculator/Sections/Rectangular";
import styled from "styled-components";

const Circular = styled.div`
  border-radius: 50%;
  background-color: black;
`

const Section = () => {
  const { shape, formConfig } = useAppSelector((state) => state.calculator);

  switch (shape) {
    case ShapeIndex.RECTANGULAR:
      return  <Rectangular />;

    case ShapeIndex.CIRCULAR:
      const fieldIndex = formConfig.fields.findIndex(field => field.name === 'diameter');
      const diameter = formConfig.fields[fieldIndex].value;

      
      return <Circular style={{ width: diameter, height: diameter }} />

    default:
      return <>
        {shape}

        {JSON.stringify(formConfig.fields)}
      </>;
  }
}

export default Section;