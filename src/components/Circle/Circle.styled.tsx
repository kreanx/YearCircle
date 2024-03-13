import styled from "styled-components";

export const CircleContainer = styled.div`
  max-width: 536px;
  max-height: 536px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 1000px) {
    position: static;
    transform: none;
    top: 0;
    order: 2;
    
    &::after {
      display: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    border: 1px solid var(--darkblue);
    border-bottom: none;
    opacity: .2;
    width: 1437px;
    height: 1px;
    top: 50%;
    left: -84%;
    z-index: -3;
  }

  @media screen and (max-width: 1000px) {
    &::after {
      display: none;
    }

    &::before {
      display: none;
    }
  }


  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: calc(100% - 2px);
    height: 100%;
    border: 1px solid var(--darkblue);
    overflow: hidden;
    opacity: .2;
    z-index: -1;
  }
`

export const CircleDotsWrapper = styled.div`
  max-width: 536px;
  max-height: 536px;
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
