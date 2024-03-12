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
`
export const StartYear = styled.p`
  color: var(--purple)
`
export const EndYear = styled.p`
  color: var(--pink)
`
