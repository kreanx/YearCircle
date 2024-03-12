import {ITextCounter} from "./types";
import * as Styled from "./TextCounter.styled";

export const TextCounter: React.FC<ITextCounter> = ({itemLength, currentIndex}) => {
    return (
        <Styled.TextCounter>
            {currentIndex}/{itemLength}
        </Styled.TextCounter>
    )
}
