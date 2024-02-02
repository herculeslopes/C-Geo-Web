import { FormConfig } from "../Components/DynamicForm";

export const hollowRectangularFormConfig: FormConfig = {
  fields: [
    { type: 'number', label: 'Depth', name: 'depth', unit: 'mm', value: 0 },
    { type: 'number', label: 'Width', name: 'width', unit: 'mm', value: 0 },
    { type: 'number', label: 'Vertical Thickness', name: 'verticalThickness', unit: 'mm', value: 0 },
    { type: 'number', label: 'Horizontal Thickness', name: 'horizontalThickness', unit: 'mm', value: 0 },
    { type: 'number', label: 'Fillet Radius', name: 'filletRadius', unit: 'mm', value: 0 },
  ]
}