import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;

  @media screen and (max-width: 1000px) {
    padding: 0 20px;
  }
  
  &::before {
    content: '';
    opacity: 0.1;
    width: calc(100% - 2px);
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border: 1px solid var(--darkblue);
    border-top: none;
    border-bottom: none;
    z-index: -1;
  }

  @media screen and (max-width: 1000px) {
    &::after {
      display: none;
    }

    &::before {
      display: none;
    }
  }
`

export const Wrapper = styled.div`
  padding-top: 170px;
  
  &::before {
    content: '';
    opacity: 0.1;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    position: absolute;
    transform: translateX(50%);
    border-left: 1px solid var(--darkblue);
    z-index: -1;
  }

  @media screen and (max-width: 1000px) {
    padding-top: 60px;
    
    display: flex;
    flex-direction: column;
    
    &:nth-child(3) {
      order: 3;
    }
    
    &::before {
      display: none;
    }
  }
`
export const Content = styled.div`
  
`
export const Title = styled.h1`
  margin: 0;
  position: relative;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: var(--darkblue);
  @media screen and (max-width: 1000px) {
    font: 700 20px / 120% var(--font-family);
    order: 3;
    &::before {
      display: none;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: -80px;
    top: 0;
    height: 100%;
    width: 6px;
    background: linear-gradient(180deg, #3877EE 0%, #EF5DA8 100%);
  }
`

export const ButtonsWrapper = styled.div`
  margin-top: 400px;
  order: 5;
  @media screen and (max-width: 1000px) {
    margin-top: 20px;
  }
  
`
export const SliderWrapper = styled.div`
  width: 100%;
  height: 135px;
  margin-top: 56px;

  @media screen and (max-width: 1000px) {
    height: auto;
    margin-top: 20px;
      order: 6;
  }
`

export const Divider = styled.div`
  display: none;
  
  @media screen and (max-width: 1000px) {
    display: block;
    width: 100%;
    height: 1px;
    background: var(--dark);
    margin-top: 38px;
    order: 3;
  }
`

export const CircleTitle = styled.div`
  order: 4;
  font: 700 20px / 150% var(--font-family);
  color: var(--darkblue);
  margin-top: 20px;
`
