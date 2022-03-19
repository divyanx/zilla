import ProjectList from "../components/ProjectList/ProjectList";
import { useContext } from 'react';
import AllProjectsContext from '../store/AllProjectcontext';
function AllProjects() {
    const allProjectCtx = useContext(AllProjectsContext);
    return (
        <div>
            <h1>AllProjects</h1>
            <ProjectList projects={allProjectCtx.AllProjects} />
        </div>
    );
}

export default AllProjects;