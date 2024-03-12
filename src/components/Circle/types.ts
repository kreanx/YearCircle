import {IcircleData} from "../../constants/circleData";
import {Dispatch, SetStateAction} from "react";

export interface ICircle {
    rotateValue: number,
    setRotateValue: Dispatch<SetStateAction<number>>,
    currentIndex: number,
    setCurrentIndex: Dispatch<SetStateAction<number>>,
    circleData: IcircleData[],
    handleRotate: (index: number) => void
}
