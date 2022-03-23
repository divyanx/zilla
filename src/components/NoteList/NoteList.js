import NoteItem from "../NoteItem/NoteItem"
import { useContext } from 'react';
import AllProjectsContext from '../../store/AllProjectcontext';

function NoteList(props) {
    const allProjectCtx = useContext(AllProjectsContext);
    //find the project having key = props.k
    const project = allProjectCtx.AllProjects.filter(p => p.key === props.ke)[0];
    const notes = project.notes;
    return (

        <div className="notes-list">
            <ul>
                {notes.map(note => (
                    <li>
                        <NoteItem note={note} />
                    </li>
                ))}
            </ul >
        </div>
    );
}

export default NoteList;