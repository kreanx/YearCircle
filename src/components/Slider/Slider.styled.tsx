import {Swiper} from 'swiper/react';
import styled from "styled-components";
export const CustomSlider = styled(Swiper)`
  height: 100%;
  width: 100%;
`
export const Button  = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  line-height: 0;
  transform: none;
  
  &:disabled {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const PrevButton = styled(Button)`
  transform: rotate(180DEG);
  position: absolute;
  left: -100px;`
export const NextButton = styled(Button)`
  position: absolute;
  right: -100px;
`

export const SlideYear = styled.div`
  font: 400 25px / 120% var(--second-family);
  text-transform: uppercase;
  color: var(--blue);
`
export const SlideDescription = styled.div`
  font: 400 20px / 150% var(--font-family);
  color: var(--darkblue);
`

export const SlideWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
