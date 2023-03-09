import {LabeledObject} from "./LabeledObject";
import {Badge} from "../types/Badge";

export class BadgeLabel extends LabeledObject {
    constructor(x: number, y: number, label: string) {
        super(x, y, label);
        this.x = x
        this.y = y
        this.label = label
    }

    public createBadgeLabel(badge: Badge) {
        return (
            <div className={'testing'}>
                <p>HIIIIII</p>
            </div>
        )
    }
}