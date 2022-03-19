import { createContext, useState } from 'react';
const projects = [
    {
        key: "1",
        title: "Project 1",
        description: "This is project 1",
        date: "2020-01-01",

    },
    {
        key: "2",
        title: "Project 2",
        description: "This is project 2",
        date: "2020-01-02",
    },
    // define a list of projects here
    {
        key: "3",
        title: "Project 3",
        description: "This is project 3",
        date: "2020-01-03",
    },
    {
        key: "4",
        title: "Project 4",
        description: "This is project 4",
        date: "2020-01-04",
    },
    {
        key: "5",
        title: "Project 5",
        description: "This is project 5",
        date: "2020-01-05",
    }
];
const AllProjectsContext = createContext({
    AllProjects: [],
    totalAllProjects: 0,
    add: (AllProject) => { },
    remove: (Projectkey) => { },
});

export function AllProjectsContextProvider(props) {
    const [userAllProjects, setUserAllProjects] = useState(projects);

    function addAllHandler(newProject) {
        setUserAllProjects((prevUserAllProjects) => {
            return prevUserAllProjects.concat(newProject);
        });
    }

    function removeAllHandler(Projectkey) {
        setUserAllProjects(prevUserAllProjects => {
            return prevUserAllProjects.filter(Project => Project.key !== Projectkey);
        });
    }


    const context = {
        AllProjects: userAllProjects,
        totalAllProjects: userAllProjects.length,
        add: addAllHandler,
        remove: removeAllHandler
    };

    return (
        <AllProjectsContext.Provider value={context}>
            {props.children}
        </AllProjectsContext.Provider>
    );
}

export default AllProjectsContext;
