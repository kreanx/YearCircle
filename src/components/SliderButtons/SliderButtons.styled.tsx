import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    gap: 0;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1000px) {
    gap: 10px;
  }
`

export const Button  = styled.button<{isActive?: boolean}>`
  background: none;
  border: 0;
  cursor: pointer;
  line-height: 0;
  transform: none;
  color: var(--darkblue);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
  &:hover {
    background: white;
  }
  &:disabled {
    cursor: auto;
    color: rgba(66, 86, 122, 0.5);
    &:hover {
      background: inherit;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 25px;
    height: 25px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const PrevButton = styled(Button)`
  
`
export const NextButton = styled(Button)`
  transform: rotate(180DEG);
`
