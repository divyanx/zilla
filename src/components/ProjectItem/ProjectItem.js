import Button from "../Button/Button";
import "./ProjectItem.css"
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import AllProjectsContext from "../../store/AllProjectcontext";

function ProjectItem(props) {
    const history = useHistory();
    const allProjectCtx = useContext(AllProjectsContext);
    function onclick(event) {
        console.log(props.project.key);
        event.preventDefault();
        allProjectCtx.remove(props.project.key);
        history.replace('/all-projects');
    }
    return (
        <div className="Item">
            <div className="Item__body">
                <h2 className="Item__title">{props.project.title}</h2>
                <p className="Item__description">{props.project.description}</p>
                <h3 className="Item__date">Created at - {props.project.date}</h3>
            </div>
            <div className="Item_footer">
                <Button text="View Notes" destination="/" />
                <Button text="Edit" destination="/" />
                <button onClick={onclick}>Delete</button>
            </div>

        </div>
    );
}
export default ProjectItem;