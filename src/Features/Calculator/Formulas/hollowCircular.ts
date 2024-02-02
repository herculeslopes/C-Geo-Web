import { FormConfig } from "../Components/DynamicForm";

export const hollowCircularFormConfig: FormConfig = {
  fields: [
    { type: 'number', label: 'Diameter', name: 'diameter', unit: 'mm', value: 10 },
    { type: 'number', label: 'Thickness', name: 'thickness', unit: 'mm', value: 10 },
  ]
}