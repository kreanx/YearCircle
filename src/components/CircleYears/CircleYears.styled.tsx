import styled from "styled-components";

export const YearWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 120px;
  font: 700 200px / 80% var(--font-family);
  letter-spacing: -0.02em;
  text-align: center;
  align-items: center;
  z-index: -1;

  @media screen and (max-width: 1000px) {
    font: 700 56px var(--font-family);
    gap: 20px;
    transform: none;
    margin-top: 56px;
    position: static; 
    justify-content: space-between;
  }
`
export const StartYear = styled.p`
  margin: 0;
  color: var(--purple)
`
export const EndYear = styled.p`
  margin: 0;
  color: var(--pink)
`
