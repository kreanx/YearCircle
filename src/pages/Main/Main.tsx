import * as Styled from './Main.styled'
import {Circle} from "../../components/Circle/Circle";
import {SliderButtons} from "../../components/SliderButtons/SliderButtons";
import {useState} from "react";
import {calculatePosition} from "../../utils/calculatePosition";
import {circleData} from "../../constants/circleData";
import {Slider} from "../../components/Slider/Slider";
import {eventData} from "../../constants/eventData";

export const Main: React.FC = () => {
    const [rotateValue, setRotateValue] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(1)
    const handleRotate = (index: number) => {
        const currentPosition = rotateValue;
        const targetPosition = (index - 1) * -60;
        const rotateDiff = calculatePosition(targetPosition, currentPosition)

        setCurrentIndex(index)
        setRotateValue(currentPosition + rotateDiff);
    }

    const nextHandler = () => {
        setRotateValue(rotateValue - 60);
        setCurrentIndex(currentIndex + 1)
    }
    const prevHandler = () => {
        setRotateValue(rotateValue + 60);
        setCurrentIndex(currentIndex - 1)
    }

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Content>
                    <Styled.Title>Исторические<br/>даты</Styled.Title>
                </Styled.Content>
                <Circle circleData={circleData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}
                        setRotateValue={setCurrentIndex} rotateValue={rotateValue} handleRotate={handleRotate}/>
                <Styled.ButtonsWrapper>
                    <SliderButtons index={currentIndex} itemLength={circleData.length} nextHandler={nextHandler}
                                   prevHandler={prevHandler}/>
                </Styled.ButtonsWrapper>
                <Styled.SliderWrapper>
                    <Slider currentIndex={currentIndex} eventData={eventData}/>
                </Styled.SliderWrapper>
            </Styled.Wrapper>
        </Styled.Container>
    )
}
