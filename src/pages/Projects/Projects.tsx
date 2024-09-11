import Navbar from '../Components/Navbar/Navbar';
import ProjectsView from './Components/ProjectsView/ProjectsView';

export default function Projects() {
  return (
    <div className="bg-black h-screen flex flex-col p-8">
      <Navbar />
      <div className="flex-grow flex">
        <ProjectsView />
      </div>
    </div>
  );
}

