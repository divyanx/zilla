import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import classes from './NewProjectForm.module.css';

import { useHistory } from 'react-router-dom';
function NewProjectForm(props) {
    const history = useHistory();
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const Data = {
            title: enteredTitle,
            description: enteredDescription,
            date: new Date().toISOString().slice(0, 10),
            key: uuid(),
        };

        props.onAddProject(Data);

        history.replace('/all-projects');
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Project Title</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea
                    id='description'
                    required
                    rows='5'
                    ref={descriptionInputRef}
                ></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Project</button>
            </div>
        </form>
    );
}

export default NewProjectForm;
