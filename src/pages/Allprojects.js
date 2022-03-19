import ProjectList from "../components/ProjectList/ProjectList";

function AllProjects() {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "This is project 1",
            date: "2020-01-01",
            favourite: false
        },
        {
            id: 2,
            title: "Project 2",
            description: "This is project 2",
            date: "2020-01-02",
            favourite: false
        },
        // define a list of projects here
        {
            id: 3,
            title: "Project 3",
            description: "This is project 3",
            date: "2020-01-03",
            favourite: false
        },
        {
            id: 4,
            title: "Project 4",
            description: "This is project 4",
            date: "2020-01-04",
            favourite: false
        },
        {
            id: 5,
            title: "Project 5",
            description: "This is project 5",
            date: "2020-01-05",
            favourite: false
        }
    ];
    var d = new Date().toISOString().slice(0, 10);
    return (
        <div>
            <h1>AllProjects</h1>
            <ProjectList projects={projects} />
        </div>
    );
}

export default AllProjects;