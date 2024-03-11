import * as Styled from './Main.styled'
import {Circle} from "../../components/Circle/Circle";

export const Main: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Content>
                    <Styled.Title>Исторические<br/>даты</Styled.Title>
                </Styled.Content>
                <Circle/>
            </Styled.Wrapper>
        </Styled.Container>
    )
}
