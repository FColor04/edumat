import React from "react";
import styled from "styled-components";
import Search from "../../images/Icons/Search.svg";

const StyledSearchBar = styled.div`
  position: relative;
  height: 100%;
  flex-grow: 1;
  display: flex;
  input {
    height: 100%;
    flex-grow: 1;
    padding: 1rem;
    margin-right: 0.5rem;
    border: 0;
    border-radius: 1rem;
    background-color: #f4f4f4;
  }
  &::after {
    content: "";
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    right: 0.5rem;
    top: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${Search});
    background-size: contain;
    background-repeat: no-repeat;
    pointer-events: none;
    opacity: 0.5;
  }
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="Jakiego kursu szukasz?" />
    </StyledSearchBar>
  );
};

export default SearchBar;
