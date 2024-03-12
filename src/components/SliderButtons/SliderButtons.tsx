import {ISliderButtons} from "./types";
import * as Styled from './SliderButtons.styled'
import {ReactComponent as PrevIcon} from '../../assets/infoPrevIcon.svg';
import {TextCounter} from "../TextCounter/TextCounter";

export const SliderButtons: React.FC<ISliderButtons> = ({nextHandler, prevHandler, index, itemLength}) => {
    return (
        <Styled.Container>
            <TextCounter currentIndex={index} itemLength={itemLength}/>
            <Styled.ButtonWrapper>
                <Styled.PrevButton type='button' onClick={prevHandler}
                                   disabled={index === 1}><PrevIcon/></Styled.PrevButton>
                <Styled.NextButton type='button' onClick={nextHandler}
                                   disabled={index === itemLength}><PrevIcon/></Styled.NextButton>
            </Styled.ButtonWrapper>
        </Styled.Container>
    )
}
