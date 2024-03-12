import * as Styled from "./Circle.styled";
import {useEffect, useRef} from "react";
import {CircleDot} from "../CircleDot/CircleDot";
import {gsap} from "gsap";
import {CircleYears} from "../CircleYears/CircleYears";
import {eventData} from "../../constants/eventData";
import {ICircle} from "./types";

export const Circle: React.FC<ICircle> = ({rotateValue, setRotateValue, currentIndex, setCurrentIndex, circleData, handleRotate}) => {
    const containerRef = useRef(null)

    useEffect(() => {
        document.documentElement.style.setProperty('--rotate-value', String(-rotateValue) + 'DEG');
        gsap.to(containerRef.current, {rotate: rotateValue})
    }, [rotateValue, containerRef]);

    return (
        <Styled.CircleContainer>
            <Styled.CircleDotsWrapper ref={containerRef}>
                {circleData.map((item) => {
                    return (
                        <CircleDot isActive={currentIndex === item.count} handler={handleRotate}
                                   key={item.count} {...item}/>
                    )
                })}
            </Styled.CircleDotsWrapper>
            <CircleYears startYear={eventData[currentIndex - 1].startYear}
                         endYear={eventData[currentIndex - 1].endYear}/>
        </Styled.CircleContainer>
    )
}
