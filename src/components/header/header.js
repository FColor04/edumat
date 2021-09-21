import React from "React";
import styled from "styled-components";
import Logo from "../../images/logo.svg";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  position: sticky;
  height: 92px;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2rem;
`;

const StyledLink = styled(Link)`
  background-color: silver;
  color: grey;
  &.active {
    color: black;
  }
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled.img`
  padding: 1rem 1.5rem;
`;

const StyledButtonList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
  list-style: none;
  margin: 0;
`;

const StyledButton = styled.li`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} alt="edumat" />
      <StyledButtonList>
        <StyledButton>a</StyledButton>
        <StyledButton>b</StyledButton>
        <StyledButton>c</StyledButton>
      </StyledButtonList>
      <StyledLink activeClassName="active" to="/">
        Summary
      </StyledLink>
      <StyledLink activeClassName="active" to="/activity">
        Activity
      </StyledLink>
    </StyledHeader>
  );
};
export default Header;
