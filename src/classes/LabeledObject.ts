import {CoordinatedObject} from "./CoordinatedObject";

export class LabeledObject extends CoordinatedObject {
    public label: string;
    public x: number = 0
    public y: number = 0
    constructor(x: number, y: number, label: string) {
        super(x, y);
        this.label = label;
    }

    public createLabel(x: number, y: number) {

    }
}