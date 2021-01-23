import React from 'react';

import { Helmet } from 'react-helmet';

import ProjectsComp from '../components/ProjectsComp';
import ProjectsCon from '../containers/ProjectsCon';

function ProjectsPage() {
  return (
    <div>
      <Helmet>
        <meta
          name="keywords"
          content="service"
        />
        <meta name="description" content="Agents" />
        <title>Lesawi Services CC - Your one stop web app solution</title>
      </Helmet>
      <div>
        {
          ProjectsCon.map((items, i) => (
            <ProjectsComp
              key={i}
              projectNumber={ProjectsCon[i].projectNumber}
              id={ProjectsCon[i].id}
              projectName={ProjectsCon[i].projectName}
              image={ProjectsCon[i].image}
              hrefLink={ProjectsCon[i].hrefLink}
              alt={ProjectsCon[i].alt}
              target={ProjectsCon[i].target}
              comment={ProjectsCon[i].comment}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ProjectsPage;
