import React from "react";

import ProjectsComp from "../components/ProjectsComp";

import { Helmet } from 'react-helmet';

const ProjectsPage = () => {
  return(
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="service"
        />
        <meta name="description" content="Agents" />
        <title>Lesawi Services CC - Your one stop web app solution</title>
      </Helmet>
      <ProjectsComp />
    </div>
  )
}

export default ProjectsPage;