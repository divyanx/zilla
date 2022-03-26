import "../NoteItem/NoteItem.css"

function NoteItem(props) {
    return (
        <div className="notes-main" href="#" contenteditable>
            <h2>{props.note.author}</h2>
            <p>{props.note.text}</p>
        </div>
    );
}

export default NoteItem