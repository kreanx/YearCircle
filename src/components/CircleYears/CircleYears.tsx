import * as Styled from "./CircleYears.styled";
import {ICircleYears} from "./types";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

export const CircleYears: React.FC<ICircleYears> = ({startYear, endYear}) => {
    const startYearRef = useRef<any>(startYear);
    const endYearRef = useRef<any>(endYear);
    const startYearElementRef = useRef<any>(startYear);
    const endYearElementRef = useRef<any>(endYear);

    useEffect(() => {

        gsap.from(startYearElementRef.current, {
            textContent: startYearRef.current,
            duration: 2.5,
            ease: "power4.out",
            snap: { textContent: 1 },
            stagger: {
                each: 1.0,
                onUpdate: function() {
                    startYearRef.current = startYear;
                },
            }
        });
        gsap.from(endYearElementRef.current, {
            textContent: endYearRef.current,
            duration: 2.5,
            ease: "power4.out",
            snap: {textContent: 1},
            stagger: {
                each: 1.0,
                onUpdate: function () {
                    endYearRef.current = endYear;
                },
            }
        });

    }, [startYear, endYear]);

    return (
        <Styled.YearWrapper>
            <Styled.StartYear ref={startYearElementRef}>{startYear}</Styled.StartYear>
            <Styled.EndYear ref={endYearElementRef}>{endYear}</Styled.EndYear>
        </Styled.YearWrapper>
    )
}
