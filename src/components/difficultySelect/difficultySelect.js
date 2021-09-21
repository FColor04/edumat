import React from "react";
import styled from "styled-components";
import Dropdown from "../../images/Icons/Dropdown.svg";

const DifficultyContainer = styled.div`
  height: 100%;
  width: auto;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    right: 0.5rem;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${Dropdown});
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
    opacity: 0.5;
  }
`;
const StyledSelect = styled.select`
  height: 100%;
  padding: 0 1rem;
  padding-right: 3rem;
  border: 2px solid #f4f4f4;
  border-radius: 1rem;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  &::-ms-expand {
    display: none;
  }
`;

const DifficultySelect = () => (
  <DifficultyContainer>
    <StyledSelect name="difficulty" id="difficulty">
      <option value="0">Poziom</option>
      <option value="1">Poziom 1</option>
      <option value="2">Poziom 2</option>
      <option value="3">Poziom 3</option>
    </StyledSelect>
  </DifficultyContainer>
);

export default DifficultySelect;
