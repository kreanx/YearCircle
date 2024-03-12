import styled from "styled-components";

export const CircleWrapper = styled.div<{ top: number; left: number }>`
  position: absolute;
  width: 6px;
  height: 6px;
  left: ${({left}) => left + 'px'};
  top: ${({top}) => top + 'px'};
  background: var(--darkblue);
  border-radius: 100%;
  transform: rotate(var(--rotate-value));
  cursor: pointer;
`

export const CircleInvisible = styled.div`
  position: absolute;
  width: 56px;
  height: 56px;
  top: -26px;
  left: -26px;
  border-radius: 50%;
`

export const Text = styled.p`
  display: flex;
  width: 56px;
  height: 56px;
  scale: 0;
  justify-content: center;
  align-items: center;
  font: 400 20px / 150% var(--font-family);
  color: var(--darkblue);
  position: absolute;
  margin: 0;
  z-index: 10;
  border: 1px rgba(48, 62, 88, 0.50) solid;
  border-radius: 50%;
  background-color: var(--grey);
`

export const Description = styled.p`
  margin: 0;
  font: 700 20px / 150% var(--font-family);
  color: var(--darkblue);
  position: absolute;
  left: 80px;
  opacity: 0;
  top: 13px;
  display: none;
`
