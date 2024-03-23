import NewProject from './components/NewProject/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar/ProjectsSidebar';

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
