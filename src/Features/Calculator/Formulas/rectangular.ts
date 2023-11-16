class Rectangular {
    depth: number;
    width: number;
    
    area: number;
    perimeter: number;
    
    constructor(depth: number, width: number) {
        this.depth = depth;
        this.width = width;

        this.setAllProperties();
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