import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  //overflow: hidden;
  padding-left: 80px;
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
`

export const Wrapper = styled.div`
  margin-top: 170px;
  
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
`
export const Content = styled.div`
  
`
export const Title = styled.h1`
  position: relative;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: var(--darkblue);
  
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
`
export const SliderWrapper = styled.div`
  width: 100%;
  height: 135px;
  margin-top: 56px;
`

