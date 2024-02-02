import { FormConfig } from "./Components/DynamicForm";
import { circularFormConfig } from "./Formulas/circular";
import { hollowCircularFormConfig } from "./Formulas/hollowCircular";
import { hollowRectangularFormConfig } from "./Formulas/hollowRectangular";
import { ishapeFormConfig } from "./Formulas/ishape";
import { rectangularFormConfig } from "./Formulas/rectangular";
import { ShapeIndex } from "./shapeIndex";



export const formConfigMapping: Record<ShapeIndex, FormConfig> = {
  [ShapeIndex.RECTANGULAR]: rectangularFormConfig,
  [ShapeIndex.HOLLOW_RECTANGULAR]: hollowRectangularFormConfig,
  [ShapeIndex.CIRCULAR]: circularFormConfig,
  [ShapeIndex.HOLLOW_CIRCULAR]: hollowCircularFormConfig,
  [ShapeIndex.I_SHAPE]: ishapeFormConfig,
}