import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;
`
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const Button  = styled.button<{isActive?: boolean}>`
  background: none;
  border: 0;
  cursor: pointer;
  line-height: 0;
  transform: none;
  color: var(--darkblue);
  &:disabled {
    cursor: auto;
    color: rgba(66, 86, 122, 0.5);
  }
`

export const PrevButton = styled(Button)`
  
`
export const NextButton = styled(Button)`
  transform: rotate(180DEG);
`
