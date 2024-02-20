import { ShapeIndex } from "./shapeIndex";

export const SectionMapping: Record<ShapeIndex, { icon: string }> = {
  [ShapeIndex.RECTANGULAR]: { icon: '/btn-icons/rectangular.svg'},
  [ShapeIndex.HOLLOW_RECTANGULAR]: { icon: '/btn-icons/hollow-rectangular.svg'},
  [ShapeIndex.CIRCULAR]: { icon: '/btn-icons/circular.svg'},
  // [ShapeIndex.HOLLOW_CIRCULAR]
  [ShapeIndex.I_SHAPE]: { icon: '/btn-icons/i-shape.svg'},
}