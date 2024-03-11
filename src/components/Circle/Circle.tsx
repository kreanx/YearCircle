import * as Styled from "./Circle.styled";
import {useEffect, useRef, useState} from "react";
import {circlePosition} from "../../constants/circlePosition";
import {CircleItem} from "../CircleItem/CircleItem";
import {gsap} from "gsap";

export const Circle: React.FC = () => {
    const containerRef = useRef(null)

    const [rotateValue, setRotateValue] = useState(0)

    useEffect(() => {
        gsap.to(containerRef.current, {rotate: rotateValue})
    }, [rotateValue, containerRef.current]);

    const handleRotate = (index: number) => {
        const positions = [-60, 0, 60, 240, 180, 120];
        const currentPosition = rotateValue;
        const targetPosition = positions[index];

        let rotateDiff = targetPosition - currentPosition;

        if (rotateDiff > 180) {
            rotateDiff -= 360;
        } else if (rotateDiff < -180) {
            rotateDiff += 360;
        }

        setRotateValue(currentPosition + rotateDiff);
    }
    return (
        <Styled.CircleContainer>
            <Styled.CircleDotsWrapper ref={containerRef}>
                {circlePosition.map(({left, top}, i) => {
                    return (
                        <CircleItem handler={handleRotate} key={i} left={left} top={top} index={i}/>
                    )
                })}
            </Styled.CircleDotsWrapper>
        </Styled.CircleContainer>

    )
}
