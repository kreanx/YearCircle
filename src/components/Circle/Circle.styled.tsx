import styled from "styled-components";

export const CircleContainer = styled.div`
  width: 536px;
  height: 530px;
  position: absolute;
  top: 0;
  left: 190px;
  transform: translate(50%, 50%);
  
  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: calc(100% - 2px);
    height: 100%;
    border: 1px solid var(--darkblue);
    overflow: hidden;
    opacity: .2;
  }

  &::after {
    content: '';
    opacity: 0.1;
    width: 200vw;
    height: 100%;
    top: 0;
    left: -100vw;
    position: absolute;
    transform: translateY(50%);
    border-top: 1px solid var(--darkblue);
    z-index: -1;
  }
`

export const CircleDotsWrapper = styled.div`
  width: 536px;
  height: 464px;
  left: 0;
  top: 31px;
  position: absolute;
`
