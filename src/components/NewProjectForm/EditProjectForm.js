import { useRef } from 'react';
import { v4 as uuid } from 'uuid';
import classes from './NewProjectForm.module.css';
import { TextField } from '@mui/material';

function EditProjectForm(props) {

    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    // console.log(props.allProjects);
    // convert p.key to string
    const prevData = props.allProjects.filter(p => p.key === props.ke)[0];
    console.log(prevData);
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        // console.log(enteredTitle);
        // console.log(enteredDescription);
        //find the project with the key props.ke 

        const Data = {
            title: enteredTitle,
            description: enteredDescription,
            date: new Date().toISOString().slice(0, 10),
            key: uuid(),
        };

        props.onEditProject(Data, props.ke);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div >

                <TextField defaultValue={prevData.title} size="normal" fullWidth label="Project Title" id="ProjectTitle" inputRef={titleInputRef} />
                <div className={classes.t}></div>
                <TextField
                    defaultValue={prevData.description}
                    size="normal"
                    id="outlined-textarea"
                    label="Description"
                    multiline
                    fullWidth
                    inputRef={descriptionInputRef}
                />
            </div>
            <div className={classes.actions}>
                <button>Add Project</button>
            </div>
        </form>
    );
}

export default EditProjectForm;
