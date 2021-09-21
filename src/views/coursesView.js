import React from "react";
import styled from "styled-components";

const StyledCourseList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
`;
const StyledCourse = styled.li`
  display: block;
  flex-grow: 1;
  min-width: 150px;
  height: 250px;
`;

const CoursesView = () => {
  return (
    <>
      <div>Search</div>
      <StyledCourseList>
        <StyledCourse>Kurs 1</StyledCourse>
        <StyledCourse>Kurs 2</StyledCourse>
        <StyledCourse>Kurs 3</StyledCourse>
        <StyledCourse>Kurs 4</StyledCourse>
        <StyledCourse>Kurs 5</StyledCourse>
        <StyledCourse>Kurs 6</StyledCourse>
      </StyledCourseList>
    </>
  );
};

export default CoursesView;
