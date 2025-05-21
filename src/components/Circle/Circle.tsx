import * as Styled from "./Circle.styled";
import {useEffect, useReducer, useRef} from "react";
import {CircleDot} from "../CircleDot/CircleDot";
import {gsap} from "gsap";
import {CircleYears} from "../CircleYears/CircleYears";
import {eventData} from "../../constants/eventData";
import {ICircle} from "./types";
import {Iposition} from "../CircleDot/types";

export const Circle: React.FC<ICircle> = ({rotateValue, currentIndex, circleData, handleRotate}) => {
    const containerRef = useRef<any>(null)
    const [_, forceUpdate] = useReducer((v) => v + 1, 0)
    const dotsNumber = circleData.length
    const angleIncrement = (2 * Math.PI) / dotsNumber;
    const dots: Iposition[] = [];

    for (let i = 0; i < dotsNumber; i++) {
        const x = Math.cos(i * angleIncrement) * 268; // радиус окружности
        const y = Math.sin(i * angleIncrement) * 268; // радиус окружности
        dots.push({x, y});
    }

    dots.reverse();

    useEffect(() => {
        document.documentElement.style.setProperty('--rotate-value', String(-rotateValue) + 'DEG');
        gsap.to(containerRef.current, {rotate: rotateValue})
    }, [rotateValue, containerRef]);

    useEffect(() => {
        forceUpdate()
    }, []);

    return (
        <Styled.CircleContainer>
            <Styled.CircleDotsWrapper ref={containerRef}>
                {circleData.map((item, i: number) => {
                    return (
                        <CircleDot isActive={currentIndex === item.count} wrapperHeight={containerRef?.current?.offsetWidth} handler={handleRotate}
                                   key={item.count} position={dots[i]} {...item}/>
                    )
                })}
            </Styled.CircleDotsWrapper>
            <CircleYears startYear={eventData[currentIndex - 1].startYear}
                         endYear={eventData[currentIndex - 1].endYear}/>
        </Styled.CircleContainer>
    )
}
