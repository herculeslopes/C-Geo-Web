import { useAppSelector } from "../../../Hooks/reduxHooks";
import { ShapeIndex } from "../shapeIndex";

const Form = () => {
  const { shape } = useAppSelector((state) => state.calculator);
  
  switch (shape) {
    case ShapeIndex.RECTANGULAR:
      return <>
        <form action="">
          safd
        </form>
      </>;
  
    default:
      return <></>;
  }
}

export default Form;