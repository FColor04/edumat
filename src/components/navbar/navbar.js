import React from "react";
import styled from "styled-components";

import CourseIcon from "../../images/Icons/Course icon.svg";
import HomeIcon from "../../images/Icons/Home icon.svg";
import MoreIcon from "../../images/Icons/More icon.svg";
import PlusIcon from "../../images/Icons/Plus Icon.svg";
import TestIcon from "../../images/Icons/Test icon.svg";
import Toolbar from "../toolbar/toolbar";

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 2px solid #c1c1c1;
  z-index: 198;
  background-color: white;
`;

const IconStructure = (props) => (
  <div {...props}>
    <img {...props} />
  </div>
);

const Icon = styled(IconStructure)`
  width: 32px;
  height: 32px;
  opacity: 0.5;
  &.active {
    opacity: 1;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Toolbar>
        <Icon src={HomeIcon} alt="Home"></Icon>
        <Icon src={CourseIcon} alt="Courses"></Icon>
        <Icon src={PlusIcon} alt="Plus"></Icon>
        <Icon src={TestIcon} alt="Tests"></Icon>
        <Icon src={MoreIcon} alt="More"></Icon>
      </Toolbar>
    </StyledNavbar>
  );
};
export default Navbar;
