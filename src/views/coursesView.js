import React from "react";
import styled from "styled-components";
import DifficultySelect from "../components/difficultySelect/difficultySelect";
import SearchBar from "../components/searchBar/searchbar";
import Toolbar from "../components/toolbar/toolbar";
import CourseImage from "../images/Icons/Course.png";
import Level from "../images/Icons/Level.svg";
import BlueHeart from "../images/Icons/Blue Heart.svg";

const Courses = [
  {
    title: "Ten kurs jest ciekawy, odpal i zrozumiesz",
    description:
      "Stretch your analytic muscles with knights, knaves, Kukpon logic gates, and more!",
  },
  {
    title: "Kurs liczb zespolonych",
    description:
      "W tym kursie nauczysz się jak rozwiązywać działania z wykorzystaniem liczb zespolonych",
  },
  {
    title: "Kurs liczb zespolonych",
    description:
      "W tym kursie nauczysz się jak rozwiązywać działania z wykorzystaniem liczb zespolonych",
  },
  {
    title: "Kurs liczb zespolonych",
    description:
      "W tym kursie nauczysz się jak rozwiązywać działania z wykorzystaniem liczb zespolonych",
  },
  {
    title: "Kurs liczb zespolonych",
    description:
      "W tym kursie nauczysz się jak rozwiązywać działania z wykorzystaniem liczb zespolonych",
  },
  {
    title: "Kurs liczb zespolonych",
    description:
      "W tym kursie nauczysz się jak rozwiązywać działania z wykorzystaniem liczb zespolonych",
  },
];
const FlexRow = styled.div`
  display: flex;
`;
const StyledCourseList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  padding: 0;
`;
const StyledCourseIcon = styled.img`
  width: 100%;
  padding: 1rem;
`;
const StyledCourseIconStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  img {
    padding: 0.25rem 0;
  }
  img:not(:first-child) {
    border-top: 2px solid #c1c1c1;
  }
`;
const CourseStructure = ({ title, description, className }) => (
  <li className={className}>
    <FlexRow>
      <StyledCourseIcon src={CourseImage} alt={title} />
      <StyledCourseIconStack>
        <img src={Level} alt="2" />
        <img src={BlueHeart} alt="<3" />
      </StyledCourseIconStack>
    </FlexRow>
    <h3>{title}</h3>
    <span>{description}</span>
  </li>
);
const StyledCourse = styled(CourseStructure)`
  display: block;
  flex-grow: 1;
  min-width: 160px;
  max-width: 180px;
  min-height: 205px;
  h3 {
    font-size: 0.8rem;
  }
  span {
    text-align: justify;
    font-size: 0.75rem;
    color: #c1c1c1;
  }
`;
const StyledColumn = styled.div`
  margin: 2rem 1.5rem;
`;
const SearchRow = styled.div`
  display: flex;
  height: 3rem;
  font-size: 1rem;
`;
const StyledFilterToolbar = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;
const StyledFilter = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  height: 2rem;
  &.active {
    color: white;
    background-color: #131330;
  }
`;
const CoursesView = () => {
  return (
    <StyledColumn>
      <h2>Zapisane kursy</h2>
      <SearchRow>
        <SearchBar />
        <DifficultySelect />
      </SearchRow>
      <br />
      <StyledFilterToolbar>
        <Toolbar>
          <StyledFilter>Do zrobienia</StyledFilter>
          <StyledFilter>W trakcie</StyledFilter>
          <StyledFilter>Wykonane</StyledFilter>
        </Toolbar>
      </StyledFilterToolbar>
      <StyledCourseList>
        {Courses.map((course, index) => (
          <StyledCourse
            title={course.title}
            description={course.description}
            key={"Course-" + index}
          ></StyledCourse>
        ))}
      </StyledCourseList>
    </StyledColumn>
  );
};

export default CoursesView;
