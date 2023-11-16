import { useAppSelector } from "../../../Hooks/reduxHooks";
import { ShapeIndex } from "../../../Features/Calculator/shapeIndex";
import Rectangular from "../../../Features/Calculator/Sections/Rectangular";

const Section = () => {
  const { shape } = useAppSelector((state) => state.calculator);

  switch (shape) {
    case ShapeIndex.RECTANGULAR:
      return  <Rectangular />;
  
    default:
      return <>{shape}</>;
  }
}

export default Section;