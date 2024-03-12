import {IcircleData} from "../../constants/circleData";

export interface ICircleDot extends IcircleData{
    handler: (index: number) => void,
    isActive: boolean,
}
