import React from "react";
import MainLayout from "../layouts/mainLayout";
import CoursesView from "../views/coursesView";

const IndexPage = () => {
  return (
    <MainLayout>
      <CoursesView />
    </MainLayout>
  );
};

export default IndexPage;
