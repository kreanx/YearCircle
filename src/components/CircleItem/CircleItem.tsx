import * as Styled from './CircleItem.styled'
import {ICircleItem} from "./types";
import {forwardRef} from "react";
import {gsap} from "gsap";

export const CircleItem: React.FC<ICircleItem> = ({ top, left, index, handler }) => {

    return <Styled.Circle  left={left} top={top} onClick={() => handler(index)} />;
};
