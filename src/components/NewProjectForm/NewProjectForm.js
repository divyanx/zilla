import { useRef } from "react";
import { v4 as uuid } from "uuid";
import classes from "./NewProjectForm.module.css";
import { TextField } from "@mui/material";

function NewProjectForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    console.log(enteredTitle);
    console.log(enteredDescription);
    const Data = {
      title: enteredTitle,
      description: enteredDescription,
      date: new Date().toISOString().slice(0, 10),
      key: uuid(),
      notes: [],
    };

    props.onAddProject(Data);
  }

  return (
    <div className={classes["form-wrapper"]}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <TextField
            size="normal"
            fullWidth
            label="Project Title"
            id="ProjectTitle"
            inputRef={titleInputRef}
          />
          <div className={classes.t}></div>
          <TextField
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
    </div>
  );
}

export default NewProjectForm;
