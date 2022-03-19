import Button from "../Button/Button";
import "./ProjectItem.css"
function ProjectItem(props) {
    return (
        <div className="Item">
            <div className="Item__body">
                <h2 className="Item__title">{props.title}</h2>
                <p className="Item__description">{props.description}</p>
                <h3 className="Item__date">Created at - {props.date}</h3>
            </div>
            <Button text="View Notes" destination="/" />
        </div>
    );
}
export default ProjectItem;