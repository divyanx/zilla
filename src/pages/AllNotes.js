
import NoteList from '../components/NoteList/NoteList';


function AllNotes() {
    const { Projectkey } = useParams();
    return (
        <NoteList k={Projectkey} />
    );
}
export default AllNotes;