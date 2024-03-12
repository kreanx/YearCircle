import styled from "styled-components";

export const CircleContainer = styled.div`
  width: 536px;
  height: 536px;
  position: absolute;
  top: 0;
  left: 50%;

  width: 536px;
  height: 536px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

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
`

export const CircleDotsWrapper = styled.div`
  width: 536px;
  height: 464px;
  left: 0;
  top: 31px;
  position: absolute;
`
