import { FormConfig } from "../Components/DynamicForm";

export const ishapeFormConfig: FormConfig = {
  fields: [
    { type: 'number', label: 'Depth', name: 'depth', unit: 'mm', value: 10 },
    { type: 'number', label: 'Top Width', name: 'topWidth', unit: 'mm', value: 10 },
    { type: 'number', label: 'Top Thickness', name: 'topThickness', unit: 'mm', value: 10 },
    { type: 'number', label: 'Bottom Width', name: 'bottomWidth', unit: 'mm', value: 10 },
    { type: 'number', label: 'Bottom Thickness', name: 'bottomThickness', unit: 'mm', value: 10 },
    { type: 'number', label: 'Web Thickness', name: 'webThickness', unit: 'mm', value: 10 },
    { type: 'number', label: 'Fillet Radius', name: 'filetRadius', unit: 'mm', value: 10 },
  ]
}