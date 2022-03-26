import NoteItem from "../NoteItem/NoteItem"
import { useContext } from 'react';
import AllProjectsContext from '../../store/AllProjectcontext';
import "./NoteList.css"

function NoteList(props) {
    const allProjectCtx = useContext(AllProjectsContext);
    //find the project having key = props.k
    const project = allProjectCtx.AllProjects.filter(p => p.key === props.k)[0];
    const notes = project.notes;
    return (
        <div>
            <h1>Showing All Notes of "{project.title}"</h1>
            <div className="notes-list">
                <ul>
                    {notes.map(note => (
                        <li>
                            <NoteItem note={note} />
                        </li>
                    ))}
                </ul >
            </div>
        </div>

    );
}

export default NoteList;