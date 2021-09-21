import React from "React";
import styled from "styled-components";

import CourseIcon from "../../images/Icons/Course icon.svg";
import HomeIcon from "../../images/Icons/Home icon.svg";
import MoreIcon from "../../images/Icons/More icon.svg";
import PlusIcon from "../../images/Icons/Plus Icon.svg";
import TestIcon from "../../images/Icons/Test icon.svg";

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-top: 2px solid #c1c1c1;
`;

const IconStructure = (props) => (
  <div {...props}>
    <img {...props} />
  </div>
);

const Icon = styled(IconStructure)`
  width: 32px;
  height: 32px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <Icon src={HomeIcon} alt="Home" active></Icon>
      <Icon src={CourseIcon} alt="Courses"></Icon>
      <Icon src={PlusIcon} alt="Plus"></Icon>
      <Icon src={TestIcon} alt="Tests"></Icon>
      <Icon src={MoreIcon} alt="More"></Icon>
    </StyledNavbar>
  );
};
export default Navbar;
