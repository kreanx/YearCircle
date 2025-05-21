import * as Styled from "./Main.styled"
import {Circle} from "../../components/Circle/Circle"
import {SliderButtons} from "../../components/SliderButtons/SliderButtons"
import {useState} from "react"
import {circleData} from "../../constants/circleData"
import {Slider} from "../../components/Slider/Slider"
import {eventData} from "../../constants/eventData"

export const Main: React.FC = () => {
    const [rotateValue, setRotateValue] = useState(180)
    const [currentIndex, setCurrentIndex] = useState(1)
    const currentAngle = 360 / circleData.length

    const handleRotate = (index: number) => {
        const currentIdx = (currentIndex - 1) % circleData.length
        const targetIdx = (index - 1) % circleData.length
        let indexDiff = targetIdx - currentIdx

        if (indexDiff > circleData.length / 2) {
            indexDiff -= circleData.length 
        } else if (indexDiff < -circleData.length / 2) {
            indexDiff += circleData.length
        }

        const rotateDiff = indexDiff * -currentAngle
        setRotateValue(rotateValue + rotateDiff)
        setCurrentIndex(index)
    }

    const nextHandler = () => {
        setRotateValue(rotateValue - currentAngle)
        setCurrentIndex((prev) => (prev >= circleData.length ? 1 : prev + 1))
    }

    const prevHandler = () => {
        setRotateValue(rotateValue + currentAngle)
        setCurrentIndex((prev) => (prev <= 1 ? circleData.length : prev - 1))
    }

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Content>
                    <Styled.Title>
                        Исторические
                        <br />
                        даты
                    </Styled.Title>
                </Styled.Content>
                <Circle
                    circleData={circleData}
                    currentIndex={currentIndex}
                    rotateValue={rotateValue}
                    handleRotate={handleRotate}
                />
                <Styled.Divider />
                <Styled.CircleTitle>
                    {circleData[currentIndex - 1].description}
                </Styled.CircleTitle>
                <Styled.ButtonsWrapper>
                    <SliderButtons
                        index={currentIndex}
                        itemLength={circleData.length}
                        nextHandler={nextHandler}
                        prevHandler={prevHandler}
                    />
                </Styled.ButtonsWrapper>
                <Styled.SliderWrapper>
                    <Slider currentIndex={currentIndex} eventData={eventData} />
                </Styled.SliderWrapper>
            </Styled.Wrapper>
        </Styled.Container>
    )
}
