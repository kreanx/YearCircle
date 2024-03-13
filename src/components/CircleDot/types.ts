import {IcircleData} from "../../constants/circleData";

export interface Iposition {
    x: number,
    y: number,
}
export interface ICircleDot extends IcircleData{
    handler: (index: number) => void,
    isActive: boolean,
    position: Iposition,
    wrapperHeight: number,
}
