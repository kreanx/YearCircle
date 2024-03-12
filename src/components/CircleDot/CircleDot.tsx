import * as Styled from './CircleDot.styled'
import {ICircleDot} from "./types";
import {gsap} from 'gsap'
import {useEffect, useRef, useState} from "react";

export const CircleDot: React.FC<ICircleDot> = ({position, degree, description, count, handler, isActive}) => {
    const [isOnDot, setIsOnDot] = useState(isActive)
    const dotRef = useRef(null)
    const descriptionRef = useRef(null)

    useEffect(() => {
        if (isOnDot) {
            gsap.to(dotRef.current,  {
                scale: 1,
                duration: 0.3,
            })
        } else {
            if (isActive) return
            gsap.to(dotRef.current,  {
                scale: 0,
                duration: 0.3,
            })
        }
    }, [isOnDot])

    useEffect(() => {
        if (isActive) {
            const tl = gsap.timeline()
            tl
                .to(dotRef.current,  {
                    scale: 1,
                    duration: 0.3
                })
                .to(descriptionRef.current,  {
                    opacity: 1,
                    duration: 0.2,
                    display: 'block'
                })
        } else {
            gsap.to(descriptionRef.current, {
                opacity: 0,
                duration: 0,
                display: 'none'
            })
            gsap.to(dotRef.current, {
                scale: 0,
                duration: 0.3
            })
        }
    }, [isActive]);

    const mouseOverHandler = () => {
        setIsOnDot(true)
    }
    const mouseLeaveHandler = () => {
        setIsOnDot(false)
    }

    return (
        <div onMouseOver={mouseOverHandler} onMouseOut={mouseLeaveHandler} onClick={() => handler(count)}>
            <Styled.CircleWrapper left={position.left} top={position.top}>
                <Styled.CircleInvisible>
                    <Styled.Text ref={dotRef}>{count}</Styled.Text>
                    {isActive && <Styled.Description ref={descriptionRef}>{description}</Styled.Description>}
                </Styled.CircleInvisible>
            </Styled.CircleWrapper>
        </div>
    );
};
