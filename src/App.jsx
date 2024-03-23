import { useState } from 'react';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar/ProjectsSidebar';

function App() {
  // selecteProjectId undefined (not chaning state), null (adding new project)
  const [projectsState, setProjectsState] = useState({
    selecteProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selecteProjectId: null,
      };
    });
  }

  let content;

  if (projectsState.selecteProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selecteProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
