import {IcircleData} from "../../constants/circleData";

export interface ICircle {
    rotateValue: number,
    currentIndex: number,
    circleData: IcircleData[],
    handleRotate: (index: number) => void
}
