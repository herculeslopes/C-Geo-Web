import { FormConfig } from "../Components/DynamicForm";

export type rectangularDimensions = {
    depth: number;
    width: number;
}

export const rectangularFormConfig: FormConfig = {
    fields: [
        { type: 'number', label: 'Depth', name: 'depth', unit: 'mm', value: 0 },
        { type: 'number', label: 'Width', name: 'width', unit: 'mm', value: 0 },
    ]
}

export default class Rectangular {
    depth: number;
    width: number;
    
    area: number;
    perimeter: number;
    
    constructor() { //depth: number, width: number
        // this.depth = depth;
        // this.width = width;

        // this.setAllProperties();
    }

    public setDimensions(depth: number, width: number): void {
        this.depth = depth;
        this.width = width;
    }
    
    public setAllProperties(): void {
        this.setArea();
        this.setPerimeter();
    }

    private setArea(): void {
        const { depth, width } = this;
        this.area = depth * width;
    }

    private setPerimeter(): void {
        const { depth, width } = this;
        this.perimeter = 2 * (depth + width);
    }
}