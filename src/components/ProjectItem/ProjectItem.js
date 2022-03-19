import Button from "../Button/Button";
import "./ProjectItem.css"
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import AllProjectsContext from "../../store/AllProjectcontext";
import { Link } from 'react-router-dom';
//import Button.css
import "../Button/Button.css";
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
                <h3 className="Item__date">{props.project.date}</h3>
            </div>
            <div className="Item_footer">
                <Button text="View Notes" destination="/" />
                <Link to={`/edit-project/${props.project.key}`}>
                    <button className='button-26'>
                        Edit
                    </button>
                </Link>
                <button className="button-26" onClick={onclick}>Delete</button>
            </div>

        </div>
    );
}
export default ProjectItem;